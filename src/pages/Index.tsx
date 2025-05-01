
import React, { useEffect } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import VisionVault from '../components/VisionVault';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Placeholder for Resume section - to be implemented
const Resume = () => (
  <section id="resume" className="section-container bg-cyber-darkBlue/50">
    <h2 className="section-title">Resume</h2>
    <div className="max-w-3xl mx-auto p-6 bg-cyber-dark/30 backdrop-blur-sm rounded-lg neon-border">
      <p className="text-center mb-6">View and download my full resume below.</p>
      <div className="flex justify-center">
        <a href="#" className="cyber-button">
          Download PDF Resume
        </a>
      </div>
    </div>
  </section>
);

// Placeholder for About Me section - to be implemented
const About = () => (
  <section id="about" className="section-container">
    <h2 className="section-title">About Me</h2>
    <div className="max-w-4xl mx-auto">
      <p className="text-gray-300 mb-6 text-lg">
        I'm a passionate developer focused on computer vision and machine learning applications. 
        With a background in AI and software development, I create intelligent solutions that 
        bridge the gap between vision algorithms and practical applications.
      </p>
      <p className="text-gray-300 text-lg">
        When I'm not coding, you can find me exploring the latest research papers, 
        contributing to open source projects, or experimenting with new technologies 
        to expand my skillset.
      </p>
    </div>
  </section>
);

const Index: React.FC = () => {
  // Animate skill bars on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('div[style*="width: 0%"]');
          
          skillBars.forEach((bar: any, index) => {
            const width = bar.dataset.width || '0';
            
            setTimeout(() => {
              bar.style.width = width;
            }, 100 * index);
          });
        }
      });
    }, { threshold: 0.1 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
    
    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);
  
  return (
    <div className="relative min-h-screen bg-cyber-black font-rajdhani">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <VisionVault />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
