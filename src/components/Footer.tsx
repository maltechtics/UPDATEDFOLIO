
import React from 'react';
import { ArrowRight, Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-purple-dark border-t border-purple-light/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              <span className="text-neon-purple">Mal</span>techtics
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium digital solutions for businesses and individuals. We transform ideas into world-class digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/maltechtics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-light/10 flex-center text-white hover:bg-neon-purple hover:text-white transition-colors duration-300"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/abdulmalik-imuekemhe-b50ab935a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-light/10 flex-center text-white hover:bg-neon-purple hover:text-white transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-light/10 flex-center text-white hover:bg-neon-purple hover:text-white transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-light/10 flex-center text-white hover:bg-neon-purple hover:text-white transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white animated-border">About Me</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white animated-border">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white animated-border">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white animated-border">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Phone:</span>
                <a href="tel:+2347046448906" className="text-neon-purple">+234 704 644 8906</a>
              </li>
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:malikronaldo735@gmail.com" className="text-neon-purple">malikronaldo735@gmail.com</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="/resume.docx" 
                className="flex items-center text-white hover:text-neon-purple animated-border"
                download="resume.docx"
              >
                Download Resume
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-purple-light/10 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Maltechtics Service and Solutions. All Rights Reserved.</p>
          <p className="mt-1">Designed and Developed by Imuekemhe Abdulmalik</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
