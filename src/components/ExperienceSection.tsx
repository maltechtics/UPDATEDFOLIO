
import React from 'react';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    year: "2023 - Present",
    title: "Lead Developer",
    company: "Maltechtics Service and Solutions",
    description: "Leading digital projects and managing client relationships. Implementing premium solutions across various sectors."
  },
  {
    year: "2020 - 2023",
    title: "Freelance Web Developer",
    company: "Self-employed",
    description: "Designed and developed websites for small businesses and startups. Focused on responsive design and user experience."
  },
  {
    year: "2019 - 2020",
    title: "Web Design Intern",
    company: "Tech Innovation Hub, Abuja",
    description: "Assisted senior developers in creating website mockups and implementing frontend designs. Gained experience in client communication."
  },
  {
    year: "2018 - 2019",
    title: "Student Developer",
    company: "University of Abuja Tech Club",
    description: "Collaborated on student projects while learning fundamental web development skills. Participated in hackathons and coding competitions."
  },
];

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-dark to-purple-dark/90 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 z-10 relative">
        <h2 className="section-heading text-center mb-16">My Experience</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-neon-purple to-neon-blue transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-12 relative ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-[50%]' : 'md:pl-12 md:text-left md:mr-auto md:ml-[50%]'
              } transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 bg-neon-purple rounded-full transform -translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-neon-purple rounded-full animate-pulse-slow"></div>
              </div>
              
              <div className="relative bg-card border border-purple-light/10 rounded-lg p-6 hover-card">
                <span className="text-neon-purple font-bold text-sm mb-1 block">{exp.year}</span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <h4 className="text-gray-300 mb-4">{exp.company}</h4>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
