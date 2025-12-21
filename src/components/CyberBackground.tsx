import { useEffect, useState } from 'react';

const CyberBackground: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10
    }));
    
    // Use requestAnimationFrame to avoid calling setState synchronously
    requestAnimationFrame(() => {
      setParticles(newParticles);
    });
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-green-400 opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            boxShadow: '0 0 10px rgba(57, 255, 20, 0.8)'
          }}
        />
      ))}

      {/* Cyber lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#39FF14" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00D9FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#39FF14" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
          style={{
            animation: 'float 15s ease-in-out infinite'
          }}
        />
        <path
          d="M0,200 Q300,150 600,200 T1200,200"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
          style={{
            animation: 'float 20s ease-in-out infinite reverse'
          }}
        />
        <path
          d="M0,300 Q200,250 400,300 T800,300"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
          style={{
            animation: 'float 25s ease-in-out infinite'
          }}
        />
      </svg>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-green-400 rounded-full opacity-10 blur-3xl" 
           style={{ animation: 'pulse-glow 4s ease-in-out infinite' }} />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-3xl" 
           style={{ animation: 'pulse-glow 6s ease-in-out infinite 2s' }} />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-400 rounded-full opacity-5 blur-3xl" 
           style={{ animation: 'pulse-glow 8s ease-in-out infinite 4s' }} />
    </div>
  );
};

export default CyberBackground;
