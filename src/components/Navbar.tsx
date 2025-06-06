import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-700">JP TECH</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {isDashboard ? (
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            ) : (
              <>
                <a href="#section1" className="text-gray-600 hover:text-gray-900">Home</a>
                <a href="#section2" className="text-gray-600 hover:text-gray-900">Vision</a>
                <a href="#section3" className="text-gray-600 hover:text-gray-900">Join Us</a>
                <a href="#section4" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#section5" className="text-gray-600 hover:text-gray-900">Contact</a>
              </>
            )}
            {localStorage.getItem('currentUser') && (
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
            )}
          </div>
          
          <div className="flex items-center">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
