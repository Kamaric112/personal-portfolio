
import React, { useEffect, useRef } from 'react';
import { skills, experiences, education } from '@/lib/data';
import { cn } from '@/lib/utils';
import { 
  Code, 
  FileCode, 
  Server, 
  PenTool, 
  Database, 
  Cloud 
} from 'lucide-react';

// Map of skill names to their respective icons
const skillIcons: Record<string, React.ReactNode> = {
  "React": <Code className="h-8 w-8 text-primary" />,
  "TypeScript": <FileCode className="h-8 w-8 text-primary" />,
  "Node.js": <Server className="h-8 w-8 text-primary" />,
  "UI/UX Design": <PenTool className="h-8 w-8 text-primary" />,
  "GraphQL": <Database className="h-8 w-8 text-primary" />,
  "AWS": <Cloud className="h-8 w-8 text-primary" />,
};

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-tight" ref={aboutRef}>
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 animate-on-scroll">Skills</h3>
            <div className="grid grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="animate-on-scroll flex flex-col items-center p-4 rounded-lg bg-white/20 shadow-sm hover:shadow-md transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-3">
                    {skillIcons[skill.name] || <Code className="h-8 w-8 text-primary" />}
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-6 animate-on-scroll">Experience</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={exp.company} 
                    className={cn(
                      "relative pl-6 border-l-2 border-foreground/10 animate-on-scroll",
                      index === experiences.length - 1 ? "" : "pb-8"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute left-[-8px] top-0 w-3.5 h-3.5 rounded-full bg-primary/70 border-2 border-white"></div>
                    <h4 className="font-semibold text-lg">{exp.position}</h4>
                    <p className="text-foreground/80 text-sm mb-1">{exp.company}</p>
                    <p className="text-foreground/60 text-xs mb-3">{exp.period}</p>
                    <p className="text-foreground/80 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 animate-on-scroll">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={edu.institution} 
                    className="animate-on-scroll"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-foreground/80 text-sm">{edu.institution}</p>
                    <p className="text-foreground/60 text-xs">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
