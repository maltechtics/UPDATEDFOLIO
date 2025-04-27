import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use direct URLs for the profile images
  const profileImages = [
    '/lovable-uploads/071191c4-20c4-496e-be31-43c092540c12.png',
    '/lovable-uploads/8d2dbfcf-1eff-43a6-92cc-16cbdec45477.png',
    '/lovable-uploads/69283258-92e3-4f18-b266-59d34b612b76.png',
    '/lovable-uploads/0f28821d-7b28-45e5-b1f8-bfee24d8249f.png',
    '/lovable-uploads/a88e22f4-4078-470f-85d5-85bca3caac24.png',
  ];

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = profileImages.map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              console.log(`Image loaded successfully: ${src}`);
              resolve(src);
            };
            img.onerror = () => {
              console.error(`Error loading image ${src}`);
              resolve(src); // Resolve instead of reject to continue loading
            };
            img.src = src;
          });
        });
        
        await Promise.all(imagePromises)
          .then(results => {
            console.log('All images processed:', results);
            setImagesLoaded(true);
          });
      } catch (error) {
        console.error('Error in image loading process:', error);
        setImagesLoaded(true); // Continue anyway
      }
    };
    
    loadImages();
  }, []);

  // Cycle through profile images
  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % profileImages.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [loading, profileImages.length]);

  // Handle loading complete
  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="bg-purple-dark text-white min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <HeroSection image={profileImages[currentImageIndex]} />
      <AboutSection image={profileImages[(currentImageIndex + 2) % profileImages.length]} />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
