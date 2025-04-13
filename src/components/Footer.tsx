
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-miras-blue text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Miras</h3>
            <p className="text-sm text-gray-200">
            Phone : +243 991 240 877
            </p>
            <p className="text-sm text-gray-200 mt-2">
              Email: contact@miras.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('ourServices')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-gray-200 hover:text-white transition-colors">
                  {t('webCreation')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-200 hover:text-white transition-colors">
                  {t('appCreation')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-200 hover:text-white transition-colors">
                  {t('programmingTraining')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-200 hover:text-white transition-colors">
                  {t('digitalMarketing')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactUs')}</h3>
            <Link 
              to="/contact"
              className="inline-block bg-white text-miras-blue px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              {t('contactUs')}
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400 text-center">
          <p className="text-sm text-gray-200">
            &copy; {currentYear} Miras. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
