
import React from 'react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: "💎",
    title: "Logo Design",
    description: "Crafting professional, unique brand identities that capture your brand's essence and vision.",
    delay: 0,
  },
  {
    icon: "📋",
    title: "Flyer Design",
    description: "Eye-catching flyers for businesses, events, and marketing that grab attention instantly.",
    delay: 100,
  },
  {
    icon: "🌐",
    title: "Website Development",
    description: "Building modern, responsive, and dynamic web applications tailored to your specific needs.",
    delay: 200,
  },
  {
    icon: "📱",
    title: "Social Media Branding",
    description: "Creating cohesive, striking online brand visuals that enhance your social media presence.",
    delay: 300,
  },
  {
    icon: "📦",
    title: "Brand Packages",
    description: "Complete solutions combining logos, websites, and marketing materials for a unified brand appearance.",
    delay: 400,
  },
  {
    icon: "💻",
    title: "Tech Consulting",
    description: "Helping businesses with digital transformation strategies that drive growth and efficiency.",
    delay: 500,
  },
];

const ServicesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-dark to-purple-dark/95 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-glow blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-glow blur-3xl"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 z-10 relative">
        <h2 className="section-heading text-center">What We Do</h2>
        <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Maltechtics Services and Solutions delivers premium digital products and services that help businesses stand out in the digital landscape.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-purple-light/5 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-purple-light/10 animate-pulse-slow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
