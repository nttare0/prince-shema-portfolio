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
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"
        style={{
          background: `linear-gradient(135deg, ${glowColor}60, ${glowColor}20, ${glowColor}60)`,
        }}
      />
      
      {/* Secondary glow layer */}
      <div 
        className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-700 blur-2xl"
        style={{
          background: `radial-gradient(circle at center, ${glowColor}30, transparent 70%)`,
        }}
      />
      
      {/* Main card */}
      <motion.div
        className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full shadow-2xl"
        style={{
          transform: isHovered 
            ? `perspective(1200px) rotateX(${mousePosition.y * 8}deg) rotateY(${mousePosition.x * 8}deg) translateZ(30px)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Enhanced shine effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)`,
            transform: `translateX(${mousePosition.x * 30}px) translateY(${mousePosition.y * 30}px)`,
          }}
        />
        
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `conic-gradient(from 0deg, ${glowColor}40, transparent, ${glowColor}40, transparent, ${glowColor}40)`,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'xor',
              padding: '1px',
            }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
          {children}
        </div>
        
        {/* Enhanced corner accents */}
        <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" 
             style={{ background: `radial-gradient(circle, ${glowColor}, transparent)` }} />
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" 
             style={{ background: `radial-gradient(circle, ${glowColor}, transparent)` }} />
      </motion.div>
    </motion.div>
  );
};