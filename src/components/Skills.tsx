
import React from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-orbitron text-sm">{name}</span>
        <span className="text-xs text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-cyber-dark rounded-full overflow-hidden">
        <div 
          className="h-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${percentage}%`,
            backgroundColor: color || '#00FFFF',
            boxShadow: `0 0 5px ${color || '#00FFFF'}` 
          }}
        ></div>
      </div>
    </div>
  );
};

interface SkillIconProps {
  name: string;
  icon: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 border border-gray-700 rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/5 transition-colors duration-300 group">
      <div className="text-3xl mb-2 group-hover:animate-pulse-glow">{icon}</div>
      <span className="text-xs text-gray-300">{name}</span>
    </div>
  );
};

const Skills: React.FC = () => {
  const programming = [
    { name: 'Python', percentage: 95, color: '#00FFFF' },
    { name: 'JavaScript', percentage: 90, color: '#A020F0' },
    { name: 'TypeScript', percentage: 85, color: '#0892d0' },
    { name: 'C++', percentage: 80, color: '#FF10F0' },
    { name: 'Java', percentage: 75, color: '#00FFFF' }
  ];
  
  const libraries = [
    { name: 'TensorFlow', percentage: 90, color: '#FF10F0' },
    { name: 'OpenCV', percentage: 95, color: '#0892d0' },
    { name: 'PyTorch', percentage: 85, color: '#A020F0' },
    { name: 'React', percentage: 90, color: '#00FFFF' },
    { name: 'D3.js', percentage: 85, color: '#A020F0' }
  ];
  
  const tools = [
    { name: 'Git', icon: '🔄' },
    { name: 'VS Code', icon: '📝' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Jupyter', icon: '📓' },
    { name: 'PyCharm', icon: '🐍' },
    { name: 'Postman', icon: '📬' },
    { name: 'Figma', icon: '🎨' }
  ];
  
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-6 bg-cyber-darkBlue/30 backdrop-blur-sm rounded-lg neon-border">
          <h3 className="font-orbitron text-xl text-neon-cyan mb-6">Programming</h3>
          {programming.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              percentage={skill.percentage} 
              color={skill.color} 
            />
          ))}
        </div>
        
        <div className="p-6 bg-cyber-darkBlue/30 backdrop-blur-sm rounded-lg neon-border">
          <h3 className="font-orbitron text-xl text-neon-purple mb-6">Libraries</h3>
          {libraries.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              percentage={skill.percentage} 
              color={skill.color} 
            />
          ))}
        </div>
        
        <div className="lg:col-span-2 p-6 bg-cyber-darkBlue/30 backdrop-blur-sm rounded-lg neon-border">
          <h3 className="font-orbitron text-xl text-neon-blue mb-6">Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {tools.map((tool, index) => (
              <SkillIcon key={index} name={tool.name} icon={tool.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
