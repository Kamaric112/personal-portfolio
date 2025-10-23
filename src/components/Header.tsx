import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ui/theme-toggle";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect for active link highlighting
  useEffect(() => {
    const sectionIds = ["about", "experience", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observerOptions = {
      root: null, // relative to document viewport
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is centered
      threshold: 0, // Trigger as soon as any part enters/leaves the rootMargin area
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup function
    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-xl font-medium">
            <span className="sr-only">Truong Nguyen</span>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-lg font-semibold">
              TN
            </div>
          </a>
          <ThemeToggle />
        </div>

        <nav
          className={cn(
            "fixed md:relative top-0 right-0 h-screen md:h-auto w-64 md:w-auto bg-background md:bg-transparent transform md:translate-x-0 z-50",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
            "md:flex md:items-center"
          )}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 md:hidden p-2"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          <ul className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 p-12 md:p-0">
            {["About", "Experience", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={cn(
                    "text-base md:text-sm font-medium tracking-wide transition-colors",
                    activeSection === item.toLowerCase()
                      ? "text-primary font-semibold underline" // Added underline here
                      : "text-foreground/80 hover:text-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          className={cn("md:hidden p-2 z-50", isMenuOpen ? "hidden" : "")}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
