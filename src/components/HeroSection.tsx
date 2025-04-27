
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ image }) => {
  const [title, setTitle] = useState('Web Developer');
  const titles = ['Web Developer', 'Biological Scientist', 'Creative Designer', 'Digital Innovator'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      
      setTimeout(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setTitle(titles[(titleIndex + 1) % titles.length]);
        setIsTyping(true);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [titleIndex, titles]);

  // Preload the current image
  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      console.error(`Failed to load image: ${image}`);
      setImageLoaded(true); // Continue anyway
    };
    img.src = image;
  }, [image]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-purple-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
        <div className="absolute top-10 left-[20%] w-[500px] h-[500px] rounded-full bg-purple-glow blur-3xl"></div>
        <div className="absolute bottom-10 right-[10%] w-[400px] h-[400px] rounded-full bg-purple-glow blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-neon-purple font-bold text-xl md:text-2xl mb-4 animate-fade-in">
              Imuekemhe Abdulmalik
            </h3>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in" style={{animationDelay: '200ms'}}>
              Unleashing Digital <span className="gradient-text">Excellence</span>
            </h1>
            <div className="mb-6 h-12 animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="typing-container">
                <span className={`typing-text text-xl md:text-2xl ${isTyping ? 'border-r-4' : 'border-r-0'}`}>
                  {title}
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-lg animate-fade-in" style={{animationDelay: '600ms'}}>
              Transforming ideas into premium digital experiences. A fullstack developer and digital 
              innovator creating world-class solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '800ms'}}>
              <a 
                href="/resume.docx" 
                className="resume-button flex items-center justify-center"
                download="resume.docx"
              >
                Download Resume
                <span className="ml-2 animate-bounce-right"><ArrowRight size={18} /></span>
              </a>
              <a 
                href="#projects" 
                className="border border-neon-purple/50 hover:border-neon-purple text-white py-3 px-8 rounded-full font-bold uppercase tracking-wider transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '400ms'}}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
              <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden border-2 border-purple-light/20 p-1 relative">
                {image && (
                  <img 
                    src={image} 
                    alt="Imuekemhe Abdulmalik" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      console.error(`Image error: ${image}`);
                      e.currentTarget.src = '/malik1.jpg'; // Image inside public folder

                    }}
                  />
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-full border border-purple-light/20">
                <div className="h-16 w-16 rounded-full bg-neon-purple flex items-center justify-center text-lg font-bold">
                  7+
                  <span className="text-xs ml-0.5">Years<br />Exp.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
