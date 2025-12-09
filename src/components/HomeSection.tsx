import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HomeSection = () => {
  const skills = [
    'React', 'Node.js', 'TypeScript', 'JavaScript', 'Python',
    'Network Security', 'Penetration Testing', 'Vulnerability Assessment',
    'Incident Response', 'Security Monitoring'
  ];

  const [currentSkill, setCurrentSkill] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = skills[skillIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentSkill(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setCurrentSkill(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setSkillIndex((skillIndex + 1) % skills.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, skillIndex, skills]);

  return (
    <section id="home" className="mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-mono tracking-wide"
          >
            <span className="text-white">{"Hi, I'm "}</span>
            <span className="gradient-text">{"SAMUEL BELAY"}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="text-xl md:text-2xl text-cyan-400 font-mono">Cybersecurity Professional</span>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-green-400 mt-2 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-lg md:text-xl text-gray-300 font-mono mb-2">Specializing in:</p>
            <p className="text-xl md:text-2xl font-mono gradient-text">
              {currentSkill}<span className="animate-pulse">|</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-mono">Available for Hire</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300 text-sm font-mono">Open to Opportunities</span>
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 217, 255, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg font-mono transition-all duration-300"
            >
              📧 Get In Touch
            </motion.a>

            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              href="/Samuel_Belay_CV.pdf"
              download="Samuel_Belay_CV.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 217, 255, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg font-mono transition-all duration-300"
            >
              📄 Download CV
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0 relative"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-xl opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img 
              src="/src/assets/photo.jpg" 
              alt="Samuel Belay" 
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover cyber-border glow-effect"
              style={{ animation: 'float 6s ease-in-out infinite' }}
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUYyOTNCIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0Y5RkFGQiIvPgo8cGF0aCBkPSJNNDAgMTYwQzQwIDE0MCA2MCA5MCAxMDAgOTBTMTYwIDE0MCAxNjAgMTYwVjIwMEg0MFYxNjBaIiBmaWxsPSIjRjlGQUZCIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRjlGQUZCIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiPlNBTUVFTCwgU0FNVUVMPC90ZXh0Pgo8L3N2Zz4K';
              }}
            />

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-mono"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              CCSP
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-mono"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              CYBERSECURITY
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
