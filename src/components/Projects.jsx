import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Arogya-Care - DBMS based Healthcare Portal",
    description: "This project developed a comprehensive online platform aimed at providing convenient access to healthcare services, including the sale of medicines and booking appointments with doctors.",
    image: "./images/Arogya.png",
    tech: ["HTML", "CSS", "EJS", "NodeJS", "MongoDb"],
    demo: "https://nitesh-giri.github.io/Arogya-FrontEnd/",
    source: "https://github.com/muntazir784"
  },
  {
    title: "Suduko Solver Visualizer",
    description: "This project developed a comprehensive aimed at providing an interactive way to solve Sudoku puzzles, including real-time visualizations of the solving process and step-by-step explanations of the logic used.",
    image: "/images/sudoku.png",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://nitesh-giri.github.io/Suduko_Solver_Visualizer/",
    source: "https://github.com/muntazir784"
  },
  {
    title: "FASHIONISTA - E-commerce Website",
    description: "This project developed a comprehensive e-commerce platform that allows users to browse and purchase a wide range of fashion products, including clothing, accessories, and footwear.",
    image: "/images/e-commerce.png",
    tech: ["React", "TailwindCSS", "ExpressJS", "MongoDB", "NodeJS"],
    demo: "https://github.com/muntazir784",
    source: "https://github.com/muntazir784"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 section-animate">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-10">
          <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white p-6 rounded-lg shadow-md">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-xl text-white p-5 shadow-md flex flex-col justify-between">
              <img 
                src={project.image} 
                alt={project.title} 
                className="rounded-md mb-4 object-cover w-full h-40 bg-white" 
              />
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-black bg-opacity-30 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
                >
                  Demo
                </a>
                <a 
                  href={project.source} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition inline-flex items-center"
                >
                  Source <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
