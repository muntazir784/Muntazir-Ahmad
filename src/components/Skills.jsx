import React from 'react';
import { Code2 } from 'lucide-react';

const skills = [
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Node", icon: "/icons/node.png" },
  { name: "C", icon: "/icons/c.png" },
  { name: "C++", icon: "/icons/cpp.png" },
  { name: "Java", icon: "/icons/java.png" },
  { name: "mongoDB", icon: "/icons/mongoDB.png" },
  { name: "GitHub", icon: "/icons/github.png" },

];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20"
      // style={{ backgroundColor: "#ffffff" }}
    >
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-up {
            animation: fadeUp 0.6s ease forwards;
            opacity: 0;
          }
        `}
      </style>

      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <Code2 className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 bg-white p-6 rounded-lg shadow-md">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-md mb-3"
                // style={{ backgroundColor: "" }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10"
                />
              </div>
              <p className="text-sm text-gray-800 font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
