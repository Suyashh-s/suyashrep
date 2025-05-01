
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Mock project data
const projectsData = [
  {
    id: 1,
    title: "Neural Art Generator",
    description: "AI-powered tool to transform photos into artistic styles",
    video: "https://placehold.co/600x400/videos/tech.mp4", // placeholder
    github: "#",
    demo: "#",
    tags: ["Python", "TensorFlow", "React"]
  },
  {
    id: 2,
    title: "Portfolio Scanner",
    description: "Real-time financial portfolio analysis with ML predictions",
    video: "https://placehold.co/600x400/videos/code.mp4", // placeholder
    github: "#",
    tags: ["Python", "PyTorch", "D3.js"]
  },
  {
    id: 3,
    title: "DataViz Explorer",
    description: "Interactive data visualization platform",
    video: "https://placehold.co/600x400/videos/data.mp4", // placeholder
    github: "#",
    demo: "#",
    tags: ["JavaScript", "D3.js", "React"]
  },
  {
    id: 4,
    title: "AI Chat Bot",
    description: "Natural language processing chatbot with custom knowledge base",
    video: "https://placehold.co/600x400/videos/ai.mp4", // placeholder
    github: "#",
    tags: ["Python", "BERT", "Flask"]
  }
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title">Dev Deck</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg bg-cyber-dark border border-gray-700 hover:border-neon-cyan transition-colors duration-300"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Video or preview based on hover state */}
            <div className="aspect-video bg-cyber-darkBlue overflow-hidden relative">
              {/* Always have the video element, but control visibility */}
              <video 
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}
                autoPlay 
                muted 
                loop
                playsInline
                src={project.video}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Static preview when not hovered */}
              <div className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
              }`}>
                {/* Project info shown by default */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="font-orbitron text-xl text-neon-cyan mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-cyber-darkBlue px-2 py-1 rounded-full text-neon-cyan border border-neon-cyan/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-cyan transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                    
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-purple transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
