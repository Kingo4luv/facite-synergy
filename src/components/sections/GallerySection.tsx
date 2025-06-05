'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: 'real-estate' | 'roofing' | 'survey';
  location: string;
  date: string;
  image: string;
  description: string;
}

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Family Home",
      category: "real-estate",
      location: "Lekki, Lagos",
      date: "March 2025",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&crop=center",
      description: "4-bedroom duplex with modern amenities"
    },
    {
      id: 2,
      title: "Commercial Property",
      category: "real-estate",
      location: "Victoria Island, Lagos",
      date: "February 2025",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
      description: "Prime commercial space in business district"
    },
    {
      id: 3,
      title: "Premium Roof Installation",
      category: "roofing",
      location: "Abuja",
      date: "January 2025",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
      description: "High-quality aluminum roofing system"
    },
    {
      id: 4,
      title: "Residential Roofing",
      category: "roofing",
      location: "Ibadan, Oyo",
      date: "December 2024",
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=600&h=400&fit=crop&crop=center",
      description: "Durable stone-coated steel tiles"
    },
    {
      id: 5,
      title: "Land Survey & Documentation",
      category: "survey",
      location: "Ibeju-Lekki, Lagos",
      date: "November 2024",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center",
      description: "Comprehensive land survey for development"
    },
    {
      id: 6,
      title: "Property Assessment",
      category: "survey",
      location: "Enugu",
      date: "October 2024",
      image: "https://images.unsplash.com/photo-1590725140246-20acdee442be?w=600&h=400&fit=crop&crop=center",
      description: "Detailed property valuation report"
    },
    {
      id: 7,
      title: "Residential Estate",
      category: "real-estate",
      location: "Port Harcourt, Rivers",
      date: "September 2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center",
      description: "Gated community with modern facilities"
    },
    {
      id: 8,
      title: "Industrial Roofing Project",
      category: "roofing",
      location: "Kano",
      date: "August 2024",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop&crop=center",
      description: "Large-scale warehouse roofing installation"
    },
    {
      id: 9,
      title: "Boundary Survey",
      category: "survey",
      location: "Kaduna",
      date: "July 2024",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center",
      description: "Professional boundary demarcation service"
    }
  ];

  const filterOptions = [
    { key: 'all', label: 'All Projects' },
    { key: 'real-estate', label: 'Real Estate' },
    { key: 'roofing', label: 'Roofing' },
    { key: 'survey', label: 'Surveys' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (projectIndex: number) => {
    setCurrentProjectIndex(projectIndex);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  }, [filteredProjects.length]);

  const goToNext = useCallback(() => {
    setCurrentProjectIndex((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  }, [filteredProjects.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, closeModal, goToPrevious, goToNext]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent successful projects across Nigeria
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === option.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'real-estate' 
                      ? 'bg-green-100 text-green-800'
                      : project.category === 'roofing'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {project.category === 'real-estate' ? 'Real Estate' : 
                     project.category === 'roofing' ? 'Roofing' : 'Survey'}
                  </span>
                </div>
                {/* View Project Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </span>
                  <span>{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-90"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <div className="relative z-10 max-w-5xl mx-4 w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Container */}
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative h-96 md:h-[600px]">
                  <Image
                    src={filteredProjects[currentProjectIndex]?.image}
                    alt={filteredProjects[currentProjectIndex]?.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      filteredProjects[currentProjectIndex]?.category === 'real-estate' 
                        ? 'bg-green-100 text-green-800'
                        : filteredProjects[currentProjectIndex]?.category === 'roofing'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {filteredProjects[currentProjectIndex]?.category === 'real-estate' ? 'Real Estate' : 
                       filteredProjects[currentProjectIndex]?.category === 'roofing' ? 'Roofing' : 'Survey'}
                    </span>
                    <span className="text-sm text-gray-500">
                      {currentProjectIndex + 1} of {filteredProjects.length}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {filteredProjects[currentProjectIndex]?.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {filteredProjects[currentProjectIndex]?.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {filteredProjects[currentProjectIndex]?.location}
                    </span>
                    <span>{filteredProjects[currentProjectIndex]?.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;