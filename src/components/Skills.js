import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { skills } from "../data";

export default function Skills() {

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
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Technologies that I got to know in the learning process.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-2 sm:w-1/2 w-full transform transition-all duration-300 delay-100 hover:scale-105 slide-in"
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon
                  className={`w-6 h-6 flex-shrink-0 mr-4 ${skill.color}`}
                />
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
