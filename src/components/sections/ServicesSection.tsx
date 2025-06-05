interface Service {
  icon: string;
  title: string;
  description: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: '🏘️',
      title: 'Real Estate Sales (Land & Houses)',
      description: 'We help you invest wisely in properties with high growth potential. From residential plots to finished homes, we offer verified land and houses in strategic locations.'
    },
    {
      icon: '🏗️',
      title: 'Roofing Solutions',
      description: 'We supply and install top-grade rooftiles that combine beauty and durability. Our roofing team ensures your home is protected and stylish with professional installation.'
    },
    {
      icon: '📐',
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
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-blue-900 text-5xl mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;