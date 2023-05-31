import { CodeIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { projects } from "../data";

export default function Projects() {
  useEffect(() => {
    const slideInElements = document.querySelectorAll('.slide-in');
    const slideInContent = () => {
      slideInElements.forEach(element => {
        const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
        const elementBottom = element.offsetTop + element.offsetHeight;
        const isHalfShown = slideInAt > element.offsetTop;
        const isNotScrolledPast = window.scrollY < elementBottom;
        if (isHalfShown && isNotScrolledPast) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };
    window.addEventListener('scroll', slideInContent);
    return () => {
      window.removeEventListener('scroll', slideInContent);
    };
  }, []);

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20 slide-in">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Projects that were created during learning as a summary of the acquired knowledge.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              rel="noreferrer"
              target="_blank"
              className="sm:w-1/2 w-full p-4 slide-in"
            >
              <div className="flex relative hover:scale-[1.05]">
                <img
                  alt="gallery"
                  className="absolute py-2 inset-0 w-full h-60 object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-2 relative z-10 w-full h-60 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="flex justify-center my-2">
                    <a href={project.github} rel="noreferrer" target="_blank">
                      <img className="h-8 mx-auto px-2" src="./github.png" alt="github logo" />
                    </a>
                    <a href={project.link} rel="noreferrer" target="_blank">
                      <img className="h-9 mx-auto px-2" src="./website.png" alt="website logo" />
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
