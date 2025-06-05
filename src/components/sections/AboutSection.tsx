const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <h3 className="text-2xl text-blue-900 mb-8">Who We Are</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Facite Synergy is a trusted real estate and roofing solutions provider in Nigeria, 
              committed to quality, integrity, and customer satisfaction.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We focus on helping individuals, families, and businesses secure valuable real estate 
              investments—whether it&apos;s buying land, purchasing a home, or installing durable, stylish rooftiles.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team combines in-depth industry knowledge with hands-on experience to offer services 
              you can rely on. With every project, our goal is to add value, offer peace of mind, and 
              build lasting relationships.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
            <div className="mb-8">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Our Mission:</h4>
              <p className="text-gray-700">
                To provide reliable real estate and roofing solutions that empower people to invest, 
                build, and live better.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Our Vision:</h4>
              <p className="text-gray-700">
                To become a leading name in the real estate and roofing industry, known for quality, 
                innovation, and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;