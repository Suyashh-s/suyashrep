
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="text-5xl md:text-7xl font-orbitron font-bold mb-4 glitch-effect" 
          data-text="Suyash Sawant"
        >
          Suyash Sawant
        </h1>
        
        <p className="text-xl md:text-2xl font-rajdhani text-gray-300 mb-8 animate-float">
          Crafting intelligent vision through code.
          <br />
          <span className="font-medium text-neon-cyan">ML Enthusiast | CV Developer</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a href="#" className="cyber-button">
            Download CV
          </a>
          <a href="#contact" className="cyber-button alt">
            Contact Me
          </a>
        </div>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-gray-600 rounded-md hover:border-neon-cyan hover:text-neon-cyan transition-colors duration-300 group"
            aria-label="GitHub"
          >
            <Github size={24} className="group-hover:animate-pulse-glow" />
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-gray-600 rounded-md hover:border-neon-purple hover:text-neon-purple transition-colors duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="group-hover:animate-pulse-glow" />
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="p-2 border border-gray-600 rounded-md hover:border-neon-blue hover:text-neon-blue transition-colors duration-300 group"
            aria-label="Email"
          >
            <Mail size={24} className="group-hover:animate-pulse-glow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
