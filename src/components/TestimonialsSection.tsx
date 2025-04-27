
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Chioma Okafor",
    title: "CEO, Okafor Fashion House",
    image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1374&auto=format&fit=crop",
    quote: "Working with Abdulmalik was transformative for our brand. His attention to detail and understanding of our vision resulted in a website that perfectly represents our fashion house. The design is not only beautiful but functional, driving our online sales significantly.",
  },
  {
    id: 2,
    name: "Emmanuel Adebayo",
    title: "Founder, TechNaija",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    quote: "Maltechtics Services delivered a complete rebrand that exceeded all expectations. Abdulmalik's technical expertise combined with his creative vision resulted in a digital presence that has elevated our company's profile in the Nigerian tech space.",
  },
  {
    id: 3,
    name: "Amina Ibrahim",
    title: "Marketing Director, Abuja Eats",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1374&auto=format&fit=crop",
    quote: "Our restaurant website and ordering system by Maltechtics has revolutionized our business. The seamless user experience and beautiful design have increased our online orders by 70%. Abdulmalik's understanding of both technical requirements and aesthetic appeal is unmatched.",
  },
  {
    id: 4,
    name: "Oluwaseun Adeleke",
    title: "Creative Director, DesignMasters Nigeria",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1470&auto=format&fit=crop",
    quote: "As a design agency, we have high standards. Abdulmalik exceeded them all with his development work on our portfolio site. His ability to translate design concepts into flawless functionality made our collaboration effortless. A true professional with world-class skills.",
  },
  {
    id: 5,
    name: "Ngozi Okonkwo",
    title: "Principal, Bright Future Academy",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1389&auto=format&fit=crop",
    quote: "Our school needed a modern website that could serve both parents and students effectively. Maltechtics  delivered a comprehensive solution that has transformed how we communicate with our community. The training provided to our staff was clear and thorough.",
  },
];

const TestimonialsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/90 to-purple-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-glow blur-3xl"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 z-10 relative">
        <h2 className="section-heading text-center">Client Testimonials</h2>
        <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-16">
          See what clients have to say about working with Maltechtics Services and Solutions.
        </p>
        
        <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="service-card h-full flex flex-col">
                    <div className="mb-6">
                      <div className="text-3xl text-neon-purple mb-2">❝</div>
                      <p className="text-gray-300 italic">{testimonial.quote}</p>
                      <div className="text-3xl text-neon-purple text-right">❞</div>
                    </div>
                    
                    <div className="mt-auto flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-300">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-card border-purple-light/30 hover:bg-card hover:border-purple-light/80" />
            <CarouselNext className="bg-card border-purple-light/30 hover:bg-card hover:border-purple-light/80" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
