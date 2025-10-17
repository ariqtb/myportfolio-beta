// ./Components/ModalView.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/types/Project";
import Image from "next/image";

type PortfolioModalProps = {
  project: Project;
  onClose: () => void; // parent will set selectedProject(null)
};

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  // Carousel state
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number | null>(null);
  const lastTranslate = useRef(0);
  const isDragging = useRef(false);

  const images = project.images?.length ? project.images : ["/img/project1.jpeg"];
  const clamp = (v: number) => Math.max(0, Math.min(v, images.length - 1));

  const goTo = (i: number) => setIdx(clamp(i));
  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);

  // Mount + body scroll lock + focus trap setup
  useEffect(() => {
    setIsMounted(true);

    // lock scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // remember previous focus, focus close button
    prevFocusRef.current = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    // ESC local (parent also handles, but keep encapsulated)
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") startClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") {
        startClose();
      } else if (e.key === "Tab") {
        // Simple focus trap
        if (!panelRef.current) return;
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      prevFocusRef.current?.focus?.();
    };
  }, [idx]);

  const startClose = () => {
    setIsClosing(true);
    // Match animation duration below (200ms)
    setTimeout(() => onClose(), 200);
  };

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) startClose();
  };

  // --- Swipe handling (pointer events: mouse + touch) ---
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.clientX;
    lastTranslate.current = -idx * trackRef.current.clientWidth;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    trackRef.current.style.transition = "none";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || startX.current == null || !trackRef.current) return;
    const dx = e.clientX - startX.current;
    const w = trackRef.current.clientWidth;
    const translate = lastTranslate.current + dx;
    trackRef.current.style.transform = `translateX(${translate}px)`;
    // snap preview while dragging (optional)
    const p = Math.round(-translate / w);
    if (p !== idx) setIdx(clamp(p));
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    if (startX.current != null) {
      const dx = e.clientX - startX.current;
      const threshold = (trackRef.current.clientWidth || 1) * 0.15;
      if (dx < -threshold) next();
      else if (dx > threshold) prev();
    }
    isDragging.current = false;
    startX.current = null;
    trackRef.current.style.transition = "transform 200ms ease-out";
    trackRef.current.style.transform = `translateX(${-idx * (trackRef.current.clientWidth || 0)}px)`;
  };

  // keep transform in sync on resize / idx change
  useEffect(() => {
    const handle = () => {
      if (!trackRef.current) return;
      trackRef.current.style.transition = "transform 200ms ease-out";
      trackRef.current.style.transform = `translateX(${-idx * trackRef.current.clientWidth}px)`;
    };
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [idx]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      ref={overlayRef}
      onClick={onOverlayClick}
      className={[
        "fixed inset-0 z-[1000] flex items-center justify-center px-4",
        "bg-black/60 backdrop-blur-sm",
        isMounted && !isClosing ? "opacity-100" : "opacity-0",
        "transition-opacity duration-200 ease-out",
      ].join(" ")}
      aria-hidden={false}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className={[
          "relative w-full max-w-3xl rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto",
          "bg-gray-900 ring-1 ring-white/10",
          "transition-all duration-200 ease-out",
          isMounted && !isClosing ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2",
        ].join(" ")}
      >
        {/* Header */}
        {/* <div className="sticky top-0 z-10  border-t border-white/10 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80"> */}
        <div className="flex items-start gap-4 p-5 border-b border-white/10">
          <div className="flex-1">
            <h3 id="project-modal-title" className="text-xl font-semibold text-amber-200">
              {project.title ?? project.title ?? "Untitled Project"}
            </h3>
            {project.description ? (
              <p className="mt-1 text-sm text-amber-100/70">{project.description}</p>
            ) : null}
          {/* </div> */}
          
          {/* <button
            ref={closeBtnRef}
            onClick={startClose}
            className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium border border-white/10 text-amber-50 hover:bg-white/10 focus:outline-none focus-visible:ring focus-visible:ring-amber-400"
            aria-label="Close project details"
          >
            Close
          </button> */}
        </div>
        </div>

        {/* Body */}
        <div className="p-5 grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* Preview */}
          <div className="md:col-span-2">
            <div
              className="relative w-full overflow-hidden rounded-xl ring-1 ring-white/10 bg-gray-800"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              {/* Prefer first image if available, else fallback */}
              {/* You can adapt field names to your Project type */}
              {/* Track */}
              <div ref={trackRef} className="flex w-full h-full">
                {images.map((src, i) => (
                  <div key={i} className="shrink-0 w-full aspect-auto p-4 rounded-lg bg-gray-800">
                    <Image
                      src={src}
                      alt={`${project.title} preview ${i + 1}`}
                      className="h-full w-full object-contain select-none pointer-events-none"
                      height= {500}
                      width={500}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* Prev/Next */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    disabled={idx === 0}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 backdrop-blur px-3 py-2 text-sm text-white hover:bg-black/60 disabled:opacity-40"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    disabled={idx === images.length - 1}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 backdrop-blur px-3 py-2 text-sm text-white hover:bg-black/60 disabled:opacity-40"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={[
                        "h-2 w-2 rounded-full ring-1 ring-white/40",
                        i === idx ? "bg-amber-300" : "bg-white/30 hover:bg-white/60",
                      ].join(" ")}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {(project as any).liveUrl ? (
                <a
                  href={(project as any).liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-900 bg-amber-300 hover:bg-amber-200"
                >
                  Live Demo
                </a>
              ) : null}
              {(project as any).repo ? (
                <a
                  href={(project as any).repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-amber-50 ring-1 ring-white/20 hover:bg-white/10"
                >
                  View Code
                </a>
              ) : null}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-3 space-y-5">
            {/* Description */}
            <section>
              <h4 className="text-sm font-semibold tracking-wide text-amber-300 uppercase">Description</h4>
              <p className="mt-2 text-amber-50/90 leading-relaxed">
                {project.description ?? "No description provided."}
              </p>
            </section>

            {/* Tech Stack */}
            {(project as any).techStack?.length ? (
              <section>
                <h4 className="text-sm font-semibold tracking-wide text-amber-300 uppercase">Tech Stack</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {(project as any).techStack.map((t: string, i: number) => (
                    <li
                      key={`${t}-${i}`}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-amber-50/90"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {/* Role */}
            {(project as any).role ? (
              <section>
                <h4 className="text-sm font-semibold tracking-wide text-amber-300 uppercase">My Role</h4>
                <p className="mt-2 text-amber-50/90">{(project as any).role}</p>
              </section>
            ) : null}

            {/* Extra bullets (optional responsibilities / highlights) */}
            {(project as any).highlights?.length ? (
              <section>
                <h4 className="text-sm font-semibold tracking-wide text-amber-300 uppercase">Highlights</h4>
                <ul className="mt-2 list-disc list-inside space-y-1 text-amber-50/90">
                  {(project as any).highlights.map((h: string, i: number) => (
                    <li key={`h-${i}`}>{h}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>
        </div>

        {/* Footer */}
        <div
  className="sticky bottom-0 z-10 border-t border-white/10 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80"
  style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}
>
  <div className="flex justify-center gap-3 px-5 md:px-6 py-4">
    <button
      onClick={startClose}
      className="rounded-lg px-4 py-2 text-sm font-medium text-amber-50 ring-1 ring-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring focus-visible:ring-amber-400"
    >
      Close
    </button>
  </div>
</div>

      </div>
    </div>,
    document.body
  );
}
