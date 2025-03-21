import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  link: string;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  images,
  technologies,
  link,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[900px] w-[90vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="aspect-video rounded-lg overflow-hidden relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${title} - View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-0 bg-background" />
              <CarouselNext className="-right-0 bg-background" />
            </Carousel>
          </div>
          <DialogDescription className="mt-4 text-base leading-relaxed">
            {description}
          </DialogDescription>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-muted rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <Button
              asChild
              variant="outline"
              className="gap-2 transition-all hover:gap-3"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
