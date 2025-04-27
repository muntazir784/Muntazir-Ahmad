import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      {/* <About /> */}
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;