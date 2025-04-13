
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container">
      <div className="text-center mb-12">
        <h1 className="section-title">{t('contactTitle')}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('contactDescription')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="relative overflow-hidden rounded-lg h-[400px] shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
            alt={t('africanBusinessPeople')} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
            <h2 className="text-white text-2xl font-bold mb-2">{t('getInTouch')}</h2>
            <p className="text-white/90 mb-4">{t('readyToWork')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 flex items-center">
              <div className="bg-miras-blue/10 p-4 rounded-full mr-4">
                <Mail className="h-6 w-6 text-miras-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-600">contact@miraslabs.com</p>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 flex items-center">
              <div className="bg-miras-blue/10 p-4 rounded-full mr-4">
                <Phone className="h-6 w-6 text-miras-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{t('phone')}</h3>
                <p className="text-gray-600">+243 991 240 877</p>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 flex items-center">
              <div className="bg-miras-blue/10 p-4 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-miras-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{t('address')}</h3>
                <p className="text-gray-600">Bukavu, {t('drc')}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="shadow-lg border-t-4 border-t-miras-blue">
        <CardHeader>
          <CardTitle className="text-center text-2xl">{t('sendMessage')}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
