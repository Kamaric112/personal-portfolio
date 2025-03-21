import React from "react";
import { personalInfo } from "@/lib/data";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 py-12 px-6">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold mr-3">
                TN
              </div>
              <span className="text-lg font-medium">{personalInfo.name}</span>
            </div>
            <p className="text-foreground/60 text-sm mt-2">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>

            <p className="text-foreground/50 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
