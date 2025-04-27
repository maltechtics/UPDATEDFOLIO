
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-purple-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-purple-glow blur-3xl"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 z-10 relative">
        <h2 className="section-heading text-center mb-16">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-light/10 flex-center mr-4">
                  <Phone size={20} className="text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">Phone</h4>
                  <p className="text-white font-medium">+234 704 644 8906</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-light/10 flex-center mr-4">
                  <Mail size={20} className="text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">Email</h4>
                  <p className="text-white font-medium">malikronaldo735@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-light/10 flex-center mr-4">
                  <Github size={20} className="text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">GitHub</h4>
                  <a href="https://github.com/maltechtics" target="_blank" rel="noopener noreferrer" className="text-white font-medium animated-border">
                    github.com/maltechtics
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-light/10 flex-center mr-4">
                  <Linkedin size={20} className="text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">LinkedIn</h4>
                  <a href="https://linkedin.com/in/abdulmalik-imuekemhe-b50ab935a" target="_blank" rel="noopener noreferrer" className="text-white font-medium animated-border">
                    linkedin.com/in/abdulmalik-imuekemhe
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Location</h3>
              <div className="h-64 rounded-lg overflow-hidden border border-purple-light/20">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126083.42884067929!2d7.3144924351562485!3d9.058633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sUniversity%20of%20Abuja!5e0!3m2!1sen!2sng!4v1619749900567!5m2!1sen!2sng" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  className="grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-card rounded-xl border border-purple-light/10 p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-purple-dark/70 border border-purple-light/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-purple"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-purple-dark/70 border border-purple-light/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-purple"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-purple-dark/70 border border-purple-light/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-purple"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-purple-dark/70 border border-purple-light/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-purple resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="resume-button w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse mr-2">●</span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
