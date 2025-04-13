
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroCarousel from '@/components/HeroCarousel';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const HomePage = () => {
  const { t } = useLanguage();

  const carouselSlides = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      title: t('welcomeTitle'),
      subtitle: t('welcomeSubtitle'),
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      title: t('webCreation'),
      subtitle: t('webCreationDesc'),
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      title: t('digitalMarketing'),
      subtitle: t('digitalMarketingDesc'),
    },
  ];

  const services = [
    {
      title: t('webCreation'),
      description: t('webCreationDesc'),
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      link: '/services',
    },
    {
      title: t('appCreation'),
      description: t('appCreationDesc'),
      imageUrl: '/app.jpg',
      link: '/services',
    },
    {
      title: t('programmingTraining'),
      description: t('programmingTrainingDesc'),
      imageUrl: '/formation.jpg',
      link: '/services',
    },
    {
      title: t('digitalMarketing'),
      description: t('digitalMarketingDesc'),
      imageUrl: '/marketing.jpg',
      link: '/services',
    },
  ];

  return (
    <div>
      <HeroCarousel slides={carouselSlides} />


      
      <section className="page-container">
        <div className="text-center mb-12">
          <h2 className="section-title">{t('welcomeTitle')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('welcomeDescription')}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/services">
              <Button className="bg-miras-blue hover:bg-blue-600">
                {t('discoverServices')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-miras-blue text-miras-blue hover:bg-miras-blue hover:text-white">
                {t('contactUs')}
              </Button>
            </Link>
          </div>
        </div>
        
        <div>
          <h2 className="section-subtitle text-center mb-8">{t('ourServices')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Promotion Section */}
      <section className="mt-16 max-w-5xl mx-auto">
        <Card className="bg-gradient-to-r from-blue-500 to-purple-700 text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <Badge variant="outline" className="mb-4 border-white text-white">{t('limitedOffer')}</Badge>
                <h3 className="text-2xl font-bold mb-3">{t('specialPromotion')}</h3>
                <p className="mb-4">{t('promotionDescription')}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$197</span>
                  <span className="text-lg line-through ml-2">$499</span>
                </div>
                <div className="mb-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5">✓</div>
                      <span>{t('professionalWebsite')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5">✓</div>
                      <span>{t('oneYearHosting')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5">✓</div>
                      <span>{t('domainName')}</span>
                    </li>
                  </ul>
                </div>
                <Link to="/contact">
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    {t('contactForPromotion')}
                  </Button>
                </Link>
              </div>
              <div className="flex-1 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt={t('specialPromotion')}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-subtitle">{t('hostingServices')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('hostingDescription')}</p>
        </div>
        
        <Card className="border-miras-blue">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{t('reliableHosting')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                    <span>{t('fastServers')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                    <span>{t('domainRegistration')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                    <span>{t('sslCertificates')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                    <span>{t('regularBackups')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                    <span>{t('technicalSupport')}</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt={t('hostingServices')}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      
      <section className="bg-miras-lightGray py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('aboutTitle')}</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">{t('aboutDescription')}</p>
          <Link to="/about">
            <Button className="bg-miras-blue hover:bg-blue-600">
              {t('about')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
