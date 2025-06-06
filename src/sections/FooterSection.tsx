import React from 'react';

const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JP TECH</h3>
            <address className="not-italic text-gray-300 mb-4">
              123 JP Tech Street<br />
              Hyderabad, India<br />
              <a href="mailto:contact@jptech.com" className="hover:text-blue-400">contact@jptech.com</a><br />
              <a href="tel:+919876543210" className="hover:text-blue-400">+91 63046-75510</a>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-400">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 JP TECH. All Rights Reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;