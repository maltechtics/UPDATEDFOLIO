
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    category: "frontend",
    name: "E-commerce UI",
    description: "A modern e-commerce interface with a seamless shopping experience",
    tech: ["React", "Tailwind CSS", "Redux"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1364&auto=format&fit=crop",
    github: "https://github.com/maltechtics",
    liveDemo: "#",
  },
  {
    category: "frontend",
    name: "Portfolio Template",
    description: "Customizable portfolio template for creative professionals",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1355&auto=format&fit=crop",
    github: "https://github.com/maltechtics",
    liveDemo: "#",
  },
  {
    category: "backend",
    name: "Booking API",
    description: "Robust API for managing hotel bookings and reservations",
    tech: ["Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop",
    github: "https://github.com/maltechtics",
    liveDemo: null,
  },
  {
    category: "backend",
    name: "User Auth System",
    description: "Secure authentication system with role-based access control",
    tech: ["Node.js", "JWT", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1470&auto=format&fit=crop",
    github: "https://github.com/maltechtics",
    liveDemo: null,
  },
  {
    category: "fullstack",
    name: "Task Manager",
    description: "Full-featured task management application with team collaboration",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
    github: "https://github.com/maltechtics",
    liveDemo: "#",
  },
  {
    category: "fullstack",
    name: "Blog Platform",
    description: "Content management system with SEO optimization built-in",
    tech: ["Next.js", "Node.js", "MySQL"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop",
    github: "https://github.com/maltechtics",
    liveDemo: "#",
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/95 to-purple-dark overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-glow blur-3xl"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 z-10 relative">
        <h2 className="section-heading text-center">My Projects</h2>
        <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Explore my portfolio of projects showcasing my expertise across frontend, backend, and full-stack development.
        </p>
        
        <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-4 bg-card/50 backdrop-blur-sm">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-purple-light/20 data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="frontend"
                className="data-[state=active]:bg-purple-light/20 data-[state=active]:text-white"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger 
                value="backend"
                className="data-[state=active]:bg-purple-light/20 data-[state=active]:text-white"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger 
                value="fullstack"
                className="data-[state=active]:bg-purple-light/20 data-[state=active]:text-white"
              >
                Full Stack
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderProjects(filteredProjects, inView)}
            </div>
          </TabsContent>
          
          <TabsContent value="frontend" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderProjects(filteredProjects, inView)}
            </div>
          </TabsContent>
          
          <TabsContent value="backend" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderProjects(filteredProjects, inView)}
            </div>
          </TabsContent>
          
          <TabsContent value="fullstack" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderProjects(filteredProjects, inView)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const renderProjects = (projects: any[], inView: boolean) => {
  return projects.map((project, index) => (
    <div 
      key={index}
      className={`project-card transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-dark to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string, i: number) => (
            <span 
              key={i} 
              className="text-xs bg-purple-light/10 text-neon-purple px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white/80 hover:text-white animated-border"
          >
            <Github size={18} className="mr-1" />
            Code
          </a>
          
          {project.liveDemo && (
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-white/80 hover:text-white animated-border"
            >
              <ExternalLink size={18} className="mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  ));
};

export default ProjectsSection;
