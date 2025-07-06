"use client";
import { useState } from 'react';
import React from 'react';

const projectsData = [
  {
    id: 'proiect-dulap-lemn-masiv',
    title: 'Dulap din Lemn Masiv Restaurat',
    description: 'Am redat splendoarea originală acestui dulap impunător din lemn masiv, transformându-l într-o piesă centrală atemporală.',
    images: [
      "/images/1.jpeg",
      "/images/2.jpeg",
      "/images/3.jpeg",
      "/images/5.jpeg",
    ],
  },
  {
    id: 'proiect-dulap-renovat',
    title: 'Dulap Restaurat cu Design Reimaginat',
    description: 'O transformare completă pentru acest dulap, ce a beneficiat de un design reimaginat și o restaurare minuțioasă, aducându-l în era modernă.',
    images: [
      "/images/4.jpeg",
      "/images/7.jpeg",
    ],
  },
  {
    id: 'proiect-dulap-simplist',
    title: 'Set minimalist: Dulap și Noptiere',
    description: 'Acest set a fost recondiționat cu un accent pe simplitate, funcționalitate și linii curate, perfect pentru un interior modern.',
    images: [
      "/images/8.jpeg",
      "/images/9.jpeg",
      "/images/11.jpeg",
    ],
  },
  {
    id: 'proiect-set-scaune-canapea',
    title: 'Set Elegant de Scaune și Canapea',
    description: 'Un set elegant de scaune și o canapea asortată, restaurate pentru a adăuga rafinament oricărui spațiu de locuit.',
    images: [
      "/images/13.jpeg",
      "/images/12.jpeg",
      "/images/10.jpeg",
      "/images/16.jpeg",
      "/images/19.jpeg",
    ],
  },
  {
    id: 'proiect-usi-dulap-pictate-prima',
    title: 'Uși de Dulap cu Pictură Manuală Unică',
    description: 'Aceste uși de dulap au fost transformate printr-o pictură manuală, devenind o declarație artistică distinctivă.',
    images: [
      "/images/17.jpeg",
      "/images/18.jpeg",
    ],
  },
  {
    id: 'proiect-usi-dulap-pictate-a-doua',
    title: 'Uși de Dulap cu Design Pictat Manual',
    description: 'O altă pereche de uși de dulap, aduse la viață printr-un design pictat manual, adăugând personalitate și stil.',
    images: [
      "/images/20.jpeg",
      "/images/22.jpeg",
    ],
  },
];

// Reusable Button Component
const Button = ({ children, className = '', ...props }) => (
  <button
    className={`px-6 py-3 rounded-full font-medium transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white px-4 text-center overflow-hidden">
      {/* Optional: Add a subtle background pattern or texture for visual interest */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/hero-bg-texture.jpg')" }}></div>

      <div className="relative z-10 max-w-5xl mx-auto py-16">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Mobilier <span className="text-yellow-400">Restaurat</span> cu Suflet
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
          Redăm viață și strălucire pieselor de mobilier vechi, transformându-le în opere de artă funcționale pentru spațiul tău modern.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        
          <Button className="bg-transparent border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900">
            Contactează-ne
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} - imagine ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
        {project.images.length > 1 && (
          <>
            <button
              onClick={goToPreviousImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors focus:outline-none"
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors focus:outline-none"
              aria-label="Next image"
            >
              &#8250;
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
              {project.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-2.5 h-2.5 rounded-full ${idx === currentImageIndex ? 'bg-yellow-500' : 'bg-gray-300 bg-opacity-70'} cursor-pointer`}
                  onClick={() => setCurrentImageIndex(idx)}
                  aria-label={`View image ${idx + 1}`}
                ></span>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-3xl font-bold text-gray-800 mb-3">{project.title}</h3>
        <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16">
          Proiecte <span className="text-yellow-600">Recente</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-8 md:mb-0">
          <h4 className="text-2xl font-bold text-white mb-2">Mobila Restaurată</h4>
          <p className="text-gray-400">Redăm viață</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h5 className="text-xl font-semibold text-white mb-3">Servicii</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">Restaurare Mobilier</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">Recondiționare Obiecte</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors duration-200">Design Personalizat</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-semibold text-white mb-3">Contact</h5>
          
          <p className="text-gray-400">Telefon: +40 771 020 336</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {/* Add social media icons here */}
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
              <i className="fab fa-facebook-f text-2xl"></i> {/* Requires FontAwesome */}
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
              <i className="fab fa-instagram text-2xl"></i> {/* Requires FontAwesome */}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Mobila Restaurată. Toate drepturile rezervate.
      </div>
    </footer>
  );
}


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}