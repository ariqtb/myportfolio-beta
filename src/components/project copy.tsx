"use client"
import { log } from "console";
import { SetStateAction, useState, useRef } from "react";
import { useEffect } from "react";
import Image from "next/image";

import PortfolioModal from "@/components/project/ModalView";
import { ProjectList } from "@/lib/project";
import { ProjectModel } from "@/types/Project";

export default function Project2() {
    const [showCardPopup, setShowCardPopup] = useState(false);
    const modalRef = useRef(null);

    const [selectedProject, setSelectedProject] = useState<ProjectModel | null>(null);
    const [isClosing, setIsClosing] = useState(false);

      // ✅ Close modal on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

    const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setSelectedProject(null);
    }, 300); // match animation duration
  };

    return (
        <section id="project2" className="flex flex-col items-center min-h-screen max-w-5xl content-center mx-auto px-5 py-10">
            <h2 className="w-full flex font-bold text-3xl text-amber-300 mb-3">
                Projects
            </h2>
            {ProjectList.map((item, index) => (
                <div
                    key={index}
                    onClick={() => setSelectedProject(item)}
                    className="flex flex-col mb-6 items-center border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-4xl hover:bg-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <Image className="object-fill w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg" src={""} alt="" />
                    <div className="flex flex-col justify-between p-6 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-amber-50 dark:text-white">{item.title}</h5>
                        <p className="mb-3 font-normal text-amber-50 dark:text-amber-50">{item.description}</p>
                    </div>
                </div>
            ))}

            {selectedProject && (
                <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)}/>
            )}
        </section>
    )
}


