
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container bg-cyber-dark relative">
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="relative z-10">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-300 mb-8">
              Interested in collaborating or have a project in mind? Let's connect and create something amazing together. Feel free to reach out through any of the channels below.
            </p>
            
            <div className="flex flex-col space-y-4">
              <a 
                href="mailto:contact@example.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-neon-cyan transition-colors duration-300 group"
              >
                <Mail size={20} className="group-hover:animate-pulse" />
                <span>contact@example.com</span>
              </a>
              
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-300 hover:text-neon-cyan transition-colors duration-300 group"
              >
                <Github size={20} className="group-hover:animate-pulse" />
                <span>github.com/suyashsawant</span>
              </a>
              
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-300 hover:text-neon-cyan transition-colors duration-300 group"
              >
                <Linkedin size={20} className="group-hover:animate-pulse" />
                <span>linkedin.com/in/suyashsawant</span>
              </a>
            </div>
          </div>
          
          <form className="neon-border p-6 bg-cyber-darkBlue/30 backdrop-blur-sm rounded-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block font-orbitron text-sm mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-cyber-dark border border-gray-700 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan rounded-md p-3 text-gray-300"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block font-orbitron text-sm mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-cyber-dark border border-gray-700 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan rounded-md p-3 text-gray-300"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block font-orbitron text-sm mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full bg-cyber-dark border border-gray-700 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan rounded-md p-3 text-gray-300"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="cyber-button w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
