
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 text-center text-gray-400 bg-cyber-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 text-xs font-orbitron tracking-widest animate-text-flicker">
          This is just the beginning. More visions loading...
        </div>
        
        <div className="text-sm">
          © {new Date().getFullYear()} Suyash Sawant. All rights reserved.
        </div>
        
        <div className="mt-2 text-xs">
          <span className="text-neon-cyan">Designed with </span>
          <span className="text-neon-purple">{'<Code/>'}</span>
          <span className="text-neon-cyan"> & </span>
          <span className="text-neon-purple">Creativity</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
