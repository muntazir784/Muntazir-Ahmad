import React, { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>Portfolio</span>
          <div className="hidden md:flex space-x-6">
            {['About', 'Skills', 'Projects', 'Certifications'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}