import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-indigo-500 to-indigo-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 animate-fade-in">
            <h3 className="text-xl font-bold">Muntazir Ahmad</h3>
            <p className="text-white">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: Github, href: 'https://github.com/muntazir784' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/muntazirahmad/' },
              { icon: Mail, href: 'mailto:ahmadmuntazir133@gmail.com' }
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-white hover:text-white transition-colors duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}