
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import emailjs from '@emailjs/browser';


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('nameRequired');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('emailRequired');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('emailInvalid');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('messageRequired');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (validateForm()) {
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_b9c2wxa',
        'template_69duo8d',
        formData,
        'O-0MYCz3jy40B9Zy_'
      );

      toast({
        title: t('messageSent'),
        // description: `${t('emailLabel')}: ${formData.email}`,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    } catch (error) {
      toast({
        title: 'Erreur',
        description: "L'envoi du message a échoué.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }
};


  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">{t('nameLabel')}</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('nameLabel')}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">{t('emailLabel')}</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t('emailLabel')}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">{t('subjectLabel')}</Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder={t('subjectLabel')}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">{t('messageLabel')}</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('messageLabel')}
          className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-miras-blue hover:bg-blue-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? '...' : t('submitButton')}
      </Button>
    </form>
  );
};

export default ContactForm;
