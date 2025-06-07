'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services: Service[] = [
    {
      id: 1,
      title: "Real Estate Sales",
      description: "Premium land and houses in strategic locations",
      image: "/images/services/real-estate.jpg",
      features: ["Prime Locations", "Verified Properties", "Investment Growth"]
    },
    {
      id: 2,
      title: "Roofing Solutions",
      description: "High-quality rooftiles with professional installation",
      image: "/images/services/roofing.jpg",
      features: ["Durable Materials", "Expert Installation", "Weather Protection"]
    },
    {
      id: 3,
      title: "Property Survey",
      description: "Accurate land surveying and property reports",
      image: "/images/services/survey.jpg",
      features: ["Certified Professionals", "Legal Compliance", "Peace of Mind"]
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="home" className="relative py-24 lg:h-screen overflow-hidden">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hidden xl:block"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hidden xl:block"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="mb-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                  <span className="text-white">Facite</span>
                  <span className="text-blue-400"> Synergy</span>
                </h1>
                <p className="text-xl sm:text-2xl text-blue-200 font-medium">
                  Building Tomorrow, Today
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 transition-all duration-500">
                  {services[currentSlide].title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-200 mb-6 transition-all duration-500">
                  {services[currentSlide].description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {services[currentSlide].features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center transition-all duration-500"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-sm font-medium text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="#services" 
                  variant="primary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white border-none"
                >
                  Explore Our Services
                </Button>
                <Button 
                  href="#contact" 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>

            {/* Right Content - Service Cards Preview */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Our Expertise
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <button
                      key={service.id}
                      onClick={() => goToSlide(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-blue-600/80 text-white'
                          : 'bg-white/10 text-gray-200 hover:bg-white/20'
                      }`}
                    >
                      <div className="font-semibold text-lg">{service.title}</div>
                      <div className="text-sm opacity-90 mt-1">{service.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-400 scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;