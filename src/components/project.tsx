"use client";
import { useState } from "react";
import Image from "next/image";

import PortfolioModal from "@/components/project/ModalView";
import { ProjectList } from "@/lib/project";
import { ProjectModel } from "@/types/Project";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectModel | null>(
    null
  );

  const pinnedProjects = ProjectList.filter((project) => project.pinned).slice(
    0,
    3
  );
  const otherProjects = ProjectList.filter((project) => !project.pinned);

  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="project"
      className="flex flex-col items-center min-h-screen max-w-5xl content-center mx-auto px-5 py-10"
    >
      <h2 className="w-full flex font-bold text-3xl text-amber-300 mb-3">
        Projects
      </h2>
      {pinnedProjects.map((project, index) => (
        <div
          key={index}
          onClick={() => setSelectedProject(project)}
          style={{ backgroundColor: `#${project.toneColor}` }}
          className={`flex flex-col mb-6 p-6 items-center rounded-lg shadow-sm md:flex-row md:max-w-4xl transition opacity-90 hover:opacity-100 hover:bg-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
        >
          <Image
            className="object-fill w-full rounded-t-lg h-72 md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
            src={project.thumbnail}
            alt=""
            width="200"
            height="200"
          />
          <div className="flex flex-col justify-between p-6 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h5>
            <span className="mb-2 text-base tracking-tight text-gray-900 dark:text-white">
              {project.subtitle}
            </span>
            <p className="mb-3 font-normal text-gray-900 dark:text-amber-50">
              {project.description}
            </p>
          </div>
        </div>
      ))}

      {/* {!showMore && otherProjects.length > 0 && (
        <button
          onClick={() => setShowMore(true)}
          className="mb-6 px-4 py-2 bg-amber-300 text-black font-semibold rounded-lg shadow-md hover:bg-amber-400 transition"
        >
          Show More
        </button>
      )} */}

      {/* {showMore && ( */}
      <div
        className={`
    transition-all duration-300 ease-out overflow-hidden
    ${
      showMore
        ? "opacity-100 translate-y-0 max-h-[3000px]"
        : "opacity-0 translate-y-4 max-h-0 pointer-events-none"
    }
  `}
      >
        {otherProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            style={{
              backgroundColor: `#${project.toneColor}`,
              transitionDelay: `${index * 60}ms`,
            }}
            className={`flex flex-col mb-6 items-center rounded-lg shadow-sm md:flex-row md:max-w-4xl
       bg-gray-500 opacity-90 hover:opacity-100 hover:bg-gray-800 dark:border-gray-700 dark:bg-gray-500 dark:hover:bg-gray-700`}
          >
            <div className="relative w-full md:w-96 h-56 md:h-auto">
              <Image
                src={project.thumbnail}
                alt={project.title}
                // fill
                width={200}
                height={200}
                // className="object-cover"
                // sizes="(max-width: 768px) 100vw, 384px"
                // priority={false}
              />
            </div>
            <div className="flex flex-col justify-between p-6 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <span className="mb-2 text-base tracking-tight text-gray-900 dark:text-white">
                {project.subtitle}
              </span>
              <p className="mb-3 font-normal text-gray-900 dark:text-amber-50">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* )} */}

      {otherProjects.length > 0 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mb-6 px-6 py-2 font-normal rounded-lg shadow-md bg-gray-800 text-amber-300 hover:bg-gray-800 hover:border-2 hover:border-gray-700 hover:-translate-y-2 transition-transform ease-out"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}

      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
