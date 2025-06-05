const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-4">
            Facite Synergy
          </div>
          <p className="text-gray-400 mb-4">
            Building Tomorrow, Today
          </p>
          <p className="text-gray-500 text-sm">
            © {currentYear} Facite Synergy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;