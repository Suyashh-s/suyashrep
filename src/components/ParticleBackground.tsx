
import React, { useEffect, useRef } from 'react';

interface ParticleProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particle properties
    const particleCount = 50;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulse: boolean;
    }[] = [];
    
    // Colors for particles
    const colors = [
      'rgba(0, 255, 255, ', // Cyan
      'rgba(160, 32, 240, ', // Purple
      'rgba(8, 146, 208, ', // Blue
      'rgba(255, 16, 240, '  // Pink
    ];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() > 0.5
      });
    }
    
    // Draw particles
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        if (particle.pulse) {
          particle.opacity = Math.sin(Date.now() * 0.001) * 0.2 + 0.3;
        }
        
        ctx.fillStyle = `${particle.color}${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      requestAnimationFrame(draw);
    };
    
    const animationId = requestAnimationFrame(draw);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full opacity-40 pointer-events-none z-0 ${className || ''}`}
    />
  );
};

export default ParticleBackground;
