import React, { useEffect } from "react";

export default function About() {
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
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center slide-in">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Something about me
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            &nbsp;&nbsp;I am a beginner frontend developer. I create my own non-commercial projects. So far, I've been doing them for educational purposes. My last completed FireApp project is a complete tool for automating some activities in my work. I would like to use my gained skills in a professional company.<br/><br/>
            &nbsp;&nbsp; I work as a Captain Officer in Fire Department and designer of fire safety systems. My experience is not directly connected to programming but it taught me several crucial abilities required in every business. I know how to properly manage projects, how to meet deadlines and work with clients.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg slide-in">
              Work with me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg slide-in">
              See my past work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 slide-in">
          <img
            className="object-cover object-center rounded opacity-90"
            alt="hero"
            src="./coding.jpg"
          />
        </div>
      </div>
    </section>
  );
}
