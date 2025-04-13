
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface CarouselSlide {
  imageUrl: string;
  title: string;
  subtitle: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="h-[70vh] relative overflow-hidden">
                <img 
                  src={slide.imageUrl} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center max-w-3xl animate-fade-in">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-center max-w-2xl animate-fade-in">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-miras-blue border-0 opacity-70 hover:opacity-100" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-miras-blue border-0 opacity-70 hover:opacity-100" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
