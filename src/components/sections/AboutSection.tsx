const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* SEO meta tags for this section */}
      <meta name="description" content="Learn about Facite Synergy - a trusted real estate and roofing solutions provider in Nigeria, committed to quality, integrity, and customer satisfaction." />
      <meta name="keywords" content="about Facite Synergy, Nigerian real estate company, roofing company Nigeria, property survey company" />
      
      {/* Circular pattern background - full width and more visible */}
      <div className="absolute inset-0 opacity-25">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="circular-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              {/* Left side circles */}
              <circle cx="8" cy="15" r="3" fill="currentColor" className="text-blue-300" />
              <circle cx="15" cy="45" r="2.2" fill="currentColor" className="text-green-300" />
              <circle cx="5" cy="75" r="2.8" fill="currentColor" className="text-blue-400" />
              <circle cx="20" cy="85" r="1.8" fill="currentColor" className="text-green-200" />
              
              {/* Center circles */}
              <circle cx="45" cy="25" r="2.5" fill="currentColor" className="text-blue-200" />
              <circle cx="55" cy="55" r="3.2" fill="currentColor" className="text-green-400" />
              <circle cx="40" cy="75" r="2" fill="currentColor" className="text-blue-500" />
              <circle cx="60" cy="10" r="1.5" fill="currentColor" className="text-green-500" />
              
              {/* Right side circles */}
              <circle cx="85" cy="20" r="2.8" fill="currentColor" className="text-blue-400" />
              <circle cx="95" cy="50" r="2.4" fill="currentColor" className="text-green-300" />
              <circle cx="80" cy="80" r="3" fill="currentColor" className="text-blue-300" />
              <circle cx="92" cy="85" r="1.6" fill="currentColor" className="text-green-200" />
              
              {/* Additional scattered small dots */}
              <circle cx="25" cy="30" r="1" fill="currentColor" className="text-blue-600" />
              <circle cx="70" cy="35" r="1.2" fill="currentColor" className="text-green-600" />
              <circle cx="35" cy="5" r="0.8" fill="currentColor" className="text-blue-500" />
              <circle cx="75" cy="65" r="1" fill="currentColor" className="text-green-500" />
              <circle cx="10" cy="35" r="0.9" fill="currentColor" className="text-blue-400" />
              <circle cx="88" cy="35" r="1.1" fill="currentColor" className="text-green-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circular-pattern)" />
        </svg>
      </div>

      {/* Additional floating circles for full width coverage */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Far left */}
        <div className="absolute top-20 left-4 w-8 h-8 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-32 left-8 w-12 h-12 bg-green-200 rounded-full opacity-15"></div>
        
        {/* Left quarter */}
        <div className="absolute top-40 left-1/4 w-6 h-6 bg-blue-300 rounded-full opacity-18"></div>
        <div className="absolute bottom-48 left-1/5 w-10 h-10 bg-green-100 rounded-full opacity-12"></div>
        
        {/* Center area */}
        <div className="absolute top-24 left-1/2 w-7 h-7 bg-blue-100 rounded-full opacity-15"></div>
        <div className="absolute bottom-20 left-1/2 w-9 h-9 bg-green-300 rounded-full opacity-16"></div>
        
        {/* Right quarter */}
        <div className="absolute top-36 right-1/4 w-8 h-8 bg-blue-400 rounded-full opacity-17"></div>
        <div className="absolute bottom-40 right-1/5 w-11 h-11 bg-green-200 rounded-full opacity-13"></div>
        
        {/* Far right */}
        <div className="absolute top-16 right-4 w-6 h-6 bg-green-400 rounded-full opacity-19"></div>
        <div className="absolute bottom-28 right-8 w-10 h-10 bg-blue-200 rounded-full opacity-14"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
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