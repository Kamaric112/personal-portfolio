
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize skill animations
    const animateSkills = () => {
      const bars = document.querySelectorAll('[data-width]');
      bars.forEach(bar => {
        if (bar instanceof HTMLElement) {
          setTimeout(() => {
            bar.style.width = bar.dataset.width || '0%';
          }, 300);
        }
      });
    };
    
    // Initialize scroll animations
    const animateOnScroll = () => {
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
    };
    
    animateSkills();
    const cleanup = animateOnScroll();
    
    // Prevent flash of unstyled content
    document.documentElement.classList.add('js-loaded');
    
    return cleanup;
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
