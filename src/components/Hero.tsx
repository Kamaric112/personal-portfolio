import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/data";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.01),rgba(0,0,0,0.02)_50%,rgba(0,0,0,0.03))] z-0"
        aria-hidden="true"
      />

      <div
        ref={heroRef}
        className="container-tight relative z-10 opacity-0 transition-opacity duration-1000 ease-out"
      >
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg mb-2">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              <span className="block">{personalInfo.name}</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-foreground/80">
              {personalInfo.title}
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed text-balance">
              {personalInfo.bio}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="#experience"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="mt-2 text-sm text-foreground/50">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
