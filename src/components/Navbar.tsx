
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-purple-dark/80 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-playfair font-bold text-white">
          <span className="text-neon-purple">Mal</span>techtics
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white font-medium animated-border transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            asChild
            className="bg-gradient-to-r from-neon-purple to-neon-blue hover:shadow-lg hover:shadow-purple-light/20 text-white"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-purple-dark/95 backdrop-blur-md z-30 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-24`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl text-white/80 hover:text-white py-2 font-medium border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            asChild
            className="bg-gradient-to-r from-neon-purple to-neon-blue hover:shadow-lg hover:shadow-purple-light/20 text-white w-full mt-4"
          >
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
