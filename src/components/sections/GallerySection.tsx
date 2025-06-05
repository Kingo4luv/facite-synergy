'use client';

import { useState } from 'react';
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
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our satisfied clients and let us help you achieve your real estate, 
              roofing, or survey needs with professional excellence.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;