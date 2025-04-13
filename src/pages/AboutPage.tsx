
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container">
      <div className="text-center mb-12">
        <h1 className="section-title">{t('aboutTitle')}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('aboutDescription')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-miras-blue">{t('ourHistory')}</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {t('historyText1')}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {t('historyText2')}
          </p>
          
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-4">{t('ourExpertise')}</h3>
            <ul className="space-y-2">
              {[t('webCreation'), t('appCreation'), t('programmingTraining'), t('digitalMarketing')].map((item) => (
                <li key={item} className="flex items-center">
                  <Check size={20} className="text-green-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/about.jpg" 
            alt={t('africanTeamMeeting')} 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="relative bg-miras-blue rounded-lg p-8 mb-16 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{t('ourMission')}</h2>
            <p className="text-xl font-light">{t('aboutMission')}</p>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{t('ourVision')}</h2>
            <p className="text-xl font-light">{t('aboutVision')}</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-8 text-miras-blue">{t('ourValues')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-miras-blue">
            <CardContent className="p-0 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-miras-blue/10 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=100&h=100" alt={t('innovation')} className="w-8 h-8 object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('innovation')}</h3>
              <p className="text-gray-600">
                {t('innovationText')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-miras-blue">
            <CardContent className="p-0 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-miras-blue/10 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=100&h=100" alt={t('excellence')} className="w-8 h-8 object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('excellence')}</h3>
              <p className="text-gray-600">
                {t('excellenceText')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-miras-blue">
            <CardContent className="p-0 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-miras-blue/10 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=100&h=100" alt={t('integrity')} className="w-8 h-8 object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('integrity')}</h3>
              <p className="text-gray-600">
                {t('integrityText')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-miras-blue">{t('readyToCollaborate')}</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {t('collaborateText')}
        </p>
        <Link to="/contact">
          <Button className="bg-miras-blue hover:bg-blue-600">
            {t('contactUs')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
