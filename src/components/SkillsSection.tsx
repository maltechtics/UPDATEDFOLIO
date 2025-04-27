
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 90 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "RESTful APIs", level: 90 },
      { name: "PHP", level: 75 },
      { name: "Python", level: 70 },
    ],
  },
  {
    id: "database",
    name: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 82 },
      { name: "MS SQL", level: 75 },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Firebase", level: 85 },
      { name: "Postman", level: 92 },
      { name: "Webpack", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative bg-purple-dark/70">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5"></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 z-10 relative">
        <h2 className="section-heading text-center">Technical Skills</h2>
        <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-16">
          A comprehensive set of technical skills and expertise acquired through real-world projects and continuous learning.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-card/50 backdrop-blur-sm mb-8">
              {skillCategories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-purple-light/20 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-4">
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={index} className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                      <div className="flex justify-between mb-2">
                        <span className="font-bold">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: inView ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
