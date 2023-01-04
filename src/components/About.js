import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jakub.
            <br className="hidden lg:inline-block" /> I am a beginner programmer.
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a master of fire safety engineer and an active fire brigade officer. I am looking for a place that will allow me to confront my skills on the commercial market and gain experience. I can combine work in the State Fire Service, as I do now, with work as a Designer of Fire Safety Systems. I am passionate about programming. Getting to know new technologies gives me great satisfaction and I do it in every free moment. In my work as a designer, I learned the specifics of working with projects, contact with the client and taking responsibility for my own part of the project.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work with me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See my past work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.jpg"
          />
        </div>
      </div>
    </section>
  )
}