import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: "AWS Fundamentals",
    issuer: "Coursera",
    date: "2025",
    type: "certification",
    image: "/assets/certificates/aws.jpeg"
  },
  {
    title: "MongoDB",
    issuer: "MongoDB University",
    date: "2024",
    type: "certification",
    image: "/assets/certificates/mongoDB.png"
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Coursera",
    date: "2025",
    type: "certification",
    image: "/assets/certificates/frontend.png"
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Board Infinity",
    date: "2024",
    type: "certification",
    image: "/assets/certificates/board_infinity.png"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 section-animate">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-8">
          <Award className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-white p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full max-h-[400px] object-contain mb-4 rounded-md shadow-sm mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
              <div className="text-blue-600 mb-1">{cert.issuer}</div>
              <div className="text-gray-500">{cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
