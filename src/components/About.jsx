import React from "react";
import { Monitor, Server, PenTool } from "lucide-react";
import { User } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="py-20 section-animate"
    >
      <div className="container mx-auto px-6">

      
      <div className="flex items-center mb-8">
          <User className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        </div>

      <div className="flex flex-col md:flex-row items-center gap-10  bg-white p-6 rounded-lg shadow-md">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src="assets/aboutimage.png"
            alt="Avatar"
            className="w-64 h-auto object-cover animate-fade-up"
          />
        </div>

        {/* Details */}
        <div className="space-y-8">
          <div className="space-y-6">
            {/* Frontend Developer */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md hover:bg-gray-200 transition duration-300 ease-in-out animate-fade-up">
              <Monitor className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building
                  responsive and optimized sites.
                </p>
              </div>
            </div>

            {/* Backend Developer */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md hover:bg-gray-200 transition duration-300 animate-fade-up delay-100">
              <Server className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end
                  systems and APIs.
                </p>
              </div>
            </div>

            {/* UI Designer */}
            <div className="flex items-start gap-4 p-4 rounded-lg hover:shadow-md hover:bg-gray-200 transition duration-300 ease-in-out animate-fade-up delay-200">
              <PenTool className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">UI Designer</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  systems as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
