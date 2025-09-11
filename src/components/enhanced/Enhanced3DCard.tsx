import { motion } from 'framer-motion';
import { useState } from 'react';

interface Enhanced3DCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const Enhanced3DCard = ({ children, className = '', glowColor = '#3b82f6' }: Enhanced3DCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className={`relative group perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Glow effect */}
      <div 
        className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
        style={{
          background: `linear-gradient(45deg, ${glowColor}40, transparent, ${glowColor}40)`,
        }}
      />
      
      {/* Main card */}
      <motion.div
        className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full"
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg) translateZ(20px)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Shine effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
            transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>
        
        {/* Corner accent */}
        <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  );
};