import Image from 'next/image';

interface Service {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      image: '/images/services/real-estate.jpg',
      alt: 'Modern house representing real estate sales',
      title: 'Real Estate Sales (Land & Houses)',
      description: 'We help you invest wisely in properties with high growth potential. From residential plots to finished homes, we offer verified land and houses in strategic locations.'
    },
    {
      image: '/images/services/roofing.jpg',
      alt: 'Professional roof tiles installation',
      title: 'Roofing Solutions',
      description: 'We supply and install top-grade rooftiles that combine beauty and durability. Our roofing team ensures your home is protected and stylish with professional installation.'
    },
    {
      image: '/images/services/survey.jpg',
      alt: 'Property surveying equipment and land measurement',
      title: 'Property Survey Services',
      description: 'Get accurate and reliable land/property survey reports for legal and planning purposes. We work with certified professionals to give you peace of mind on your investment.'
    }
  ];

  return (
    <section id="services" className="py-8 bg-gray-50">
      {/* SEO meta tags for this section */}
      <meta name="description" content="Professional real estate services, premium roofing solutions, and certified property survey services across Nigeria. Expert land sales, roof installations, and surveying." />
      <meta name="keywords" content="real estate services Nigeria, roofing installation, property survey, land sales, roof tiles, surveying services" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;