import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ProjectDialog from "./ProjectDialog";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  link: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  images = [],
  technologies,
  link,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <ProjectDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={title}
        description={description}
        images={images.length > 0 ? images : [image]}
        technologies={technologies}
        link={link}
      />
      <div
        onClick={() => setIsDialogOpen(true)}
        className="animate-on-scroll group relative rounded-2xl overflow-hidden transform transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer"
        style={{ animationDelay: `${delay}s` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 ease-out",
              isHovered ? "scale-110" : "scale-100"
            )}
          />

          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-foreground/90 to-foreground/0 dark:from-background/90 dark:to-background/0 transition-opacity duration-500",
              isHovered ? "opacity-95" : "opacity-80"
            )}
          ></div>

          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white dark:text-gray-200">
            <h3
              className={cn(
                "text-2xl font-bold mb-2 transition-all duration-300",
                isHovered ? "-translate-y-2" : "translate-y-0"
              )}
            >
              {title}
            </h3>

            <a
              className={cn(
                "inline-flex items-center text-sm font-medium transition-all duration-300 group-hover:text-white/90 dark:group-hover:text-gray-200/90",
                isHovered
                  ? "opacity-100 -translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              View Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
