
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/data';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container-tight">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary/20 mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in design, development, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
