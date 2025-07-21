'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { createClient } from 'contentful';

interface Project {
  id: string;
  title: string;
  category: 'real-estate' | 'roofing' | 'survey';
  location: string;
  date: string;
  image: string;
  description: string;
  isVideo: boolean;
  videoType: string;
}

const allowedCategories = ['real-estate', 'roofing', 'survey'] as const;
type Category = typeof allowedCategories[number];

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

interface ContentfulAsset {
  fields: {
    file: {
      url: string;
      contentType?: string;
    };
  };
}

interface ContentfulRichTextNode {
  nodeType: string;
  value?: string;
  content?: ContentfulRichTextNode[];
}

interface ContentfulRichText {
  nodeType: string;
  data: Record<string, unknown>;
  content: ContentfulRichTextNode[];
}

interface ContentfulProjectFields {
  title?: string;
  category?: string;
  location?: string;
  date?: string;
  assets?: ContentfulAsset;
  description?: ContentfulRichText;
}

function extractPlainTextFromRichText(richText?: ContentfulRichText): string {
  if (!richText || !Array.isArray(richText.content)) return '';
  for (const node of richText.content) {
    if (node.nodeType === 'paragraph' && Array.isArray(node.content)) {
      return node.content.map((child) => child.value ?? '').join(' ');
    }
  }
  return '';
}

function formatDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const GallerySection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    async function fetchProjects() {
      const res = await client.getEntries({ content_type: 'projects' });
      const items = res.items.map((item) => {
        const fields = item.fields as ContentfulProjectFields;
        let category: Category = 'real-estate';
        const rawCategory = fields.category;
        if (rawCategory && allowedCategories.includes(rawCategory as Category)) {
          category = rawCategory as Category;
        }
        let imageUrl = '';
        let isVideo = false;
        const asset = fields.assets;
        if (asset?.fields?.file?.url) {
          imageUrl = asset.fields.file.url.startsWith('http')
            ? asset.fields.file.url
            : `https:${asset.fields.file.url}`;
          isVideo = asset.fields.file.contentType?.startsWith('video/') ?? false;
        }
        return {
          id: String(item.sys.id),
          title: String(fields.title ?? ''),
          category,
          location: String(fields.location ?? ''),
          date: formatDate(String(fields.date ?? '')),
          image: imageUrl,
          description: extractPlainTextFromRichText(fields.description),
          isVideo,
          videoType: asset?.fields?.file?.contentType ?? '',
        };
      });
      setProjects(items);
    }
    fetchProjects();
  }, []);

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

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      <div className="relative h-64 w-full bg-gray-200" />
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded w-2/3 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-3" />
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
        </div>
      </div>
    </div>
  );

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
          {projects.length === 0
            ? Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)
            : filteredProjects.map((project, index) => {
                if (project.isVideo) {
                  console.log('Video asset:', {
                    url: project.image,
                    type: project.videoType,
                    title: project.title,
                  });
                }
                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    onClick={() => openModal(index)}
                  >
                    <div className="relative h-64 w-full">
                      {project.isVideo ? (
                        <video controls className="object-cover w-full h-full">
                          <source src={project.image} type="video/mp4"/>
                              Your browser does not support the video tag.
                        </video>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
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
                );
              })}
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
                  {filteredProjects[currentProjectIndex]?.isVideo ? (
                    <video controls className="object-cover w-full h-full">
                      <source src={filteredProjects[currentProjectIndex]?.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={filteredProjects[currentProjectIndex]?.image}
                      alt={filteredProjects[currentProjectIndex]?.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  )}
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