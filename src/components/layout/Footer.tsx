import Image from 'next/image';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../icons/index';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Image 
              src="/facite-synergy-logo-white.png" 
              alt="Facite Synergy Logo" 
              width={50} 
              height={50}
              className="object-contain"
            />
            <div className="text-2xl font-bold text-white">
              Facite Synergy
            </div>
          </div>
          <p className="text-gray-400 mb-6">
            Building Tomorrow, Today
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com/facitesynergy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
              aria-label="Follow us on Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/facitesynergy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-pink-600 transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/facitesynergy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-blue-400 transition-colors duration-200"
              aria-label="Follow us on Twitter"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} Facite Synergy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;