
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="page-container">
      <div className="text-center mb-12">
        <h1 className="section-title">{t('ourServices')}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('serviceDescription')}</p>
      </div>

      <Tabs defaultValue="web" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="web">{t('webCreation')}</TabsTrigger>
          <TabsTrigger value="app">{t('appCreation')}</TabsTrigger>
          <TabsTrigger value="training">{t('programmingTraining')}</TabsTrigger>
          <TabsTrigger value="marketing">{t('digitalMarketing')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="web" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('webCreation')}</CardTitle>
              <CardDescription>{t('webCreationDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt={t('webCreation')}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('professionalWebsite')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('ecommerceWebsite')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('webApplication')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('responsiveDesign')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('seoOptimization')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="app" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('appCreation')}</CardTitle>
              <CardDescription>{t('appCreationDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/app.jpg" 
                    alt={t('appCreation')}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('mobileApps')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('pwa')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('uiuxDesign')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('customDevelopment')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('maintenanceSupport')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="training" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('programmingTraining')}</CardTitle>
              <CardDescription>{t('programmingTrainingDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/formation.jpg" 
                    alt={t('programmingTraining')}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('webDevTraining')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('programmingCourses')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('practicalWorkshops')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('personalizedMentoring')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('certifications')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="marketing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('digitalMarketing')}</CardTitle>
              <CardDescription>{t('digitalMarketingDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/marketing.jpg" 
                    alt={t('digitalMarketing')}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('contentStrategy')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('seoSem')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('onlineAdvertising')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('socialMediaManagement')}</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 text-miras-blue">•</div>
                      <span>{t('analyticsReporting')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Hosting Services Section */}
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



      {/* Project Showcase Section */}
      <section className="mt-16 max-w-5xl mx-auto mb-16">
        <div className="text-center mb-8">
          <h2 className="section-subtitle">{t('ourProjects')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('projectsDescription')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Portfolio Project */}
          <Card>
            <a href="https://deomrd.vercel.app/" target="_blank" rel="noopener noreferrer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/porfolio.jpg" 
                  alt={t('portfolioProject')}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
            <CardHeader>
              <CardTitle>{t('portfolioProject')}</CardTitle>
              <CardDescription>{t('portfolioDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{t('portfolioDetails')}</p>
              <Badge className="bg-miras-blue">{t('webDesign')}</Badge>
            </CardContent>
          </Card>

          {/* NGO Website Project */}
          <Card>
            <a href="https://eptopeace.org/" target="_blank" rel="noopener noreferrer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/eppo.jpg" 
                  alt={t('ngoProject')}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
            <CardHeader>
              <CardTitle>{t('ngoProject')}</CardTitle>
              <CardDescription>{t('ngoDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{t('ngoDetails')}</p>
              <Badge className="bg-miras-blue">{t('websiteShowcase')}</Badge>
            </CardContent>
          </Card>

          {/* Web Application Project */}
          <Card>
            <a href="https://stocks.alwaysdata.net/" target="_blank" rel="noopener noreferrer">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/stock.jpg" 
                  alt={t('webAppProject')}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
            <CardHeader>
              <CardTitle>{t('webAppProject')}</CardTitle>
              <CardDescription>{t('webAppDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{t('webAppDetails')}</p>
              <Badge className="bg-miras-blue">{t('webApplication')}</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
