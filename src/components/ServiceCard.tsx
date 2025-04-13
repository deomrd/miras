
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl, link }) => {
  const { t } = useLanguage();
  
  return (
    <div className="service-card group">
      <div className="h-48 overflow-hidden rounded-md mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-miras-blue">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="flex items-center text-miras-blue font-medium hover:underline"
      >
        <span>{t('discoverServices')}</span>
        <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
