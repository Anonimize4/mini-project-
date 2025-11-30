import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface GridLine {
  id: number;
  type: 'horizontal' | 'vertical';
  position: number;
}

const CyberBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [gridLines, setGridLines] = useState<GridLine[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    // Generate grid lines
    const horizontalLines: GridLine[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      type: 'horizontal',
      position: (i + 1) * 10,
    }));
    const verticalLines: GridLine[] = Array.from({ length: 10 }, (_, i) => ({
      id: i + 10,
      type: 'vertical',
      position: (i + 1) * 10,
    }));
    setGridLines([...horizontalLines, ...verticalLines]);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-emerald-950" />
      
      {/* Animated grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        <AnimatePresence>
          {gridLines.map((line) => (
            <motion.line
              key={line.id}
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              exit={{ opacity: 0, pathLength: 0 }}
              transition={{ duration: 2, delay: line.id * 0.1 }}
              stroke="url(#gridGradient)"
              strokeWidth="0.5"
              fill="none"
              {...(line.type === 'horizontal' 
                ? { x1: '0%', y1: `${line.position}%`, x2: '100%', y2: `${line.position}%` }
                : { x1: `${line.position}%`, y1: '0%', x2: `${line.position}%`, y2: '100%' }
              )}
            />
          ))}
        </AnimatePresence>
      </svg>

      {/* Floating particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [`${particle.x}%`, `${particle.x + (Math.random() - 0.5) * 20}%`],
              y: [`${particle.y}%`, `${particle.y - 20}%`],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Binary code rain effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`binary-${i}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: '100vh',
              opacity: [0, 1, 1, 0],
            }}
            transition={{ 
              duration: Math.random() * 10 + 15,
              delay: Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute text-green-400 font-mono text-xs opacity-30"
            style={{
              left: `${i * 5}%`,
              fontSize: `${Math.random() * 8 + 8}px`,
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </motion.div>
        ))}
      </div>

      {/* Glitch effect overlay */}
      <motion.div
        animate={{
          opacity: [0, 0.1, 0],
          x: [0, -2, 2, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 5,
        }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
      />

      {/* Mouse follow effect */}
      <motion.div
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        className="absolute w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl"
      />

      {/* Scanning lines */}
      <motion.div
        animate={{ y: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"
      />
      
      <motion.div
        animate={{ y: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 4 }}
        className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"
      />

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="w-full h-full"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M 0,0 L 0,50 L 50,50"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32">
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="w-full h-full"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M 100,0 L 100,50 L 50,50"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32">
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="w-full h-full"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M 0,100 L 0,50 L 50,50"
              stroke="#8b5cf6"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32">
        <motion.div
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="w-full h-full"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M 100,100 L 100,50 L 50,50"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default CyberBackground;
