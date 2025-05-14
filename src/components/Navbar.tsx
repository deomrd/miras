
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
               <img src="/miraslabs.png" alt="MirasLabs Logo" className="h-16 w-auto" /> <span className="text-2xl font-bold text-miras-blue">Miras </span><span className="text-2xl font-bold">Labs</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                to="/" 
                className={`${
                  location.pathname === '/' 
                    ? 'border-miras-blue text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {t('home')}
              </Link>
              <Link 
                to="/services" 
                className={`${
                  location.pathname === '/services' 
                    ? 'border-miras-blue text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {t('services')}
              </Link>
              <Link 
                to="/contact" 
                className={`${
                  location.pathname === '/contact' 
                    ? 'border-miras-blue text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {t('contact')}
              </Link>
              <Link 
                to="/about" 
                className={`${
                  location.pathname === '/about' 
                    ? 'border-miras-blue text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {t('about')}
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button
              variant="outline" 
              onClick={toggleLanguage} 
              className="ml-3 text-sm"
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </Button>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-miras-blue"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`${
                location.pathname === '/'
                  ? 'bg-miras-lightGray border-miras-blue text-miras-blue'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={closeMenu}
            >
              {t('home')}
            </Link>
            <Link
              to="/services"
              className={`${
                location.pathname === '/services'
                  ? 'bg-miras-lightGray border-miras-blue text-miras-blue'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={closeMenu}
            >
              {t('services')}
            </Link>
            <Link
              to="/contact"
              className={`${
                location.pathname === '/contact'
                  ? 'bg-miras-lightGray border-miras-blue text-miras-blue'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={closeMenu}
            >
              {t('contact')}
            </Link>
            <Link
              to="/about"
              className={`${
                location.pathname === '/about'
                  ? 'bg-miras-lightGray border-miras-blue text-miras-blue'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={closeMenu}
            >
              {t('about')}
            </Link>
            <div className="pl-3 pr-4 py-2">
              <Button 
                variant="outline" 
                onClick={toggleLanguage} 
                className="w-full text-sm justify-center"
              >
                {language === 'fr' ? 'English' : 'Français'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
