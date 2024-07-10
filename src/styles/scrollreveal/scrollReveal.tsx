// "use client";
import React, { useRef, useEffect, FC, CSSProperties } from "react";
import scrollReveal from "scrollreveal";
import "./scrollReveal.module.css";

interface ScrollRevealProps {
  style: CSSProperties;
  children: React.ReactNode;
};

const ScrollReveal: FC<ScrollRevealProps> = ({ children, style }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sectionRef.current)
        scrollReveal().reveal(sectionRef.current, {
          reset: true,
          delay: 100,
        });
    } 
  }, []);

  return (
    <section
      ref={sectionRef}
      style={style}
      className="container scroll-section"
      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
