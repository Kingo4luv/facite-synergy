import { Button } from '../ui';

const HeroSection = () => {
  const specializations = [
    {
      icon: '🏡',
      text: 'Selling land and houses in prime locations'
    },
    {
      icon: '🏠',
      text: 'Supplying and installing high-quality rooftiles built to last'
    },
    {
      icon: '📋',
      text: 'Delivering expert property survey services to give you peace of mind'
    }
  ];

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-900">Facite Synergy</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-4">
            Building Tomorrow, Today
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            At Facite Synergy, we bring your property dreams to life. Whether you&apos;re investing in land, 
            buying a home, or buying premium rooftiles, we provide quality, reliability, and unmatched 
            expertise every step of the way.
          </p>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">We specialize in:</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {specializations.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-900 text-4xl mb-4">{item.icon}</div>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Let&apos;s help you own your dream property and roof it with excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="#services" 
              variant="primary"
              size="lg"
            >
              Explore Our Services
            </Button>
            <Button 
              href="#contact" 
              variant="outline"
              size="lg"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;