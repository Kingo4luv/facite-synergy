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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <h3 className="text-2xl text-blue-900">What We Offer</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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