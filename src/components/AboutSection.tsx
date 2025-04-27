
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AboutSectionProps {
  image: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload the current image
  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      console.error(`Failed to load about image: ${image}`);
      setImageLoaded(true); // Continue anyway
    };
    img.src = image;
  }, [image]);

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-purple-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 z-10 relative">
        <h2 className="section-heading text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg opacity-20 blur-xl"></div>
              <div className="relative overflow-hidden rounded-lg border border-purple-light/20">
                <img 
                  src={image} 
                  alt="Imuekemhe Abdulmalik" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`About image error: ${image}`);
                    e.currentTarget.src = '/malik2.jpg'; // Image inside public folder

                  }}
                />
              </div>
              <div className="absolute -bottom-5 -right-5 p-4 bg-card rounded-lg border border-purple-light/20">
                <p className="text-sm">
                  <span className="text-neon-blue font-bold">Reg No:</span> 21/208BIO/421
                </p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl font-playfair font-bold mb-6">
              Final Year Student & <span className="gradient-text">Professional Developer</span>
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <p>
                I am Imuekemhe Abdulmalik, a final-year Biological Sciences student at the University of 
                Abuja with a passion for technology and digital innovation. Beyond my academic pursuits, 
                I've developed extensive expertise as a full-stack web developer and digital designer.
              </p>
              <p>
                My journey in web development started alongside my studies, where I discovered my talent 
                for creating beautiful, functional digital products that solve real-world problems.
              </p>
              <p>
                As the founder of Maltechtics Service and Solutions, I've combined my scientific background 
                with technical skills to deliver premium digital solutions for clients across various industries.
              </p>
              <p>
                I specialize in creating seamless user experiences, responsive designs, and scalable web 
                applications using modern technologies and development practices.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-neon-purple font-bold mb-2">Education</h4>
                <p className="text-white">University of Abuja</p>
                <p className="text-sm text-gray-400">B.Sc. Biological Sciences</p>
              </div>
              <div>
                <h4 className="text-neon-purple font-bold mb-2">Location</h4>
                <p className="text-white">Abuja, Nigeria</p>
                <p className="text-sm text-gray-400">Available for remote work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
