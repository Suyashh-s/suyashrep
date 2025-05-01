
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Mock vision projects data
const visionProjects = [
  {
    id: 1,
    title: "Object Recognition System",
    description: "Real-time object detection and classification from video streams",
    video: "https://placehold.co/600x400/videos/vision1.mp4", // placeholder
    github: "#",
    demo: "#",
    tags: ["YOLO", "Object Detection", "OpenCV", "Python"]
  },
  {
    id: 2,
    title: "Facial Expression Analyzer",
    description: "Emotion recognition from facial expressions using deep learning",
    video: "https://placehold.co/600x400/videos/vision2.mp4", // placeholder
    github: "#",
    tags: ["OpenCV", "Deep Learning", "CNN", "TensorFlow"]
  },
  {
    id: 3,
    title: "Gesture Control Interface",
    description: "Control applications using hand gestures captured via webcam",
    video: "https://placehold.co/600x400/videos/vision3.mp4", // placeholder
    github: "#",
    demo: "#",
    tags: ["Mediapipe", "Computer Vision", "JavaScript"]
  },
  {
    id: 4,
    title: "Document Scanner",
    description: "Scan and digitize documents with automatic text extraction",
    video: "https://placehold.co/600x400/videos/vision4.mp4", // placeholder
    github: "#",
    tags: ["OCR", "OpenCV", "Image Processing"]
  }
];

const VisionVault: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  // Extract unique tags for filters
  const allTags = Array.from(new Set(visionProjects.flatMap(project => project.tags)));
  
  const filteredProjects = activeFilter 
    ? visionProjects.filter(project => project.tags.includes(activeFilter))
    : visionProjects;
  
  return (
    <section id="vision-vault" className="section-container relative bg-cyber-darkBlue">
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="relative z-10">
        <h2 className="section-title">Vision Vault</h2>
        
        {/* Filter tags */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <button
            className={`text-sm px-3 py-1 rounded-full transition-colors duration-200 ${
              activeFilter === null 
                ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan' 
                : 'bg-cyber-dark text-gray-400 border border-gray-700 hover:border-gray-500'
            }`}
            onClick={() => setActiveFilter(null)}
          >
            All
          </button>
          
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`text-sm px-3 py-1 rounded-full transition-colors duration-200 ${
                activeFilter === tag 
                  ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple' 
                  : 'bg-cyber-dark text-gray-400 border border-gray-700 hover:border-gray-500'
              }`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-cyber-dark border border-gray-700 hover:border-neon-purple transition-colors duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Video container */}
              <div className="aspect-video bg-cyber-black overflow-hidden relative">
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
                    <h3 className="font-orbitron text-xl text-neon-purple mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-cyber-dark px-2 py-1 rounded-full text-neon-cyan border border-neon-cyan/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-3">
                      <a 
                        href={project.github} 
                        className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-purple transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                      
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          className="flex items-center gap-1 text-sm text-gray-300 hover:text-neon-cyan transition-colors"
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
      </div>
    </section>
  );
};

export default VisionVault;
