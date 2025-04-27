import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-slide-in">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Muntazir Ahmad</h1>
            <p className="text-xl opacity-90 mb-8">
              I am a Full Stack Developer skilled in creating dynamic web
              applications. I also excel in UI/UX design, crafting user-friendly
              interfaces for both web and mobile platforms. Reach out if you'd
              like to learn more!
            </p>

            <div className="flex space-x-4 mb-6">
              {[
                { icon: Github, href: "https://github.com/muntazir784" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/muntazirahmad/"},
                { icon: Mail, href: "mailto:ahmadmuntazir133@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link p-2 text-white hover:text-blue-200"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href="mailto:ahmadmuntazir133@gmail.com"
                className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white font-semibold px-5 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-300"
              >
                Get Resume
              </a>
            </div>
          </div>

          <div className="md:w-1/2 animate-fade-in">
            <img
              src="profile.jpeg"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
