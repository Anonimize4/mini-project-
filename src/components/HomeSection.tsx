import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import profileImage from '../assets/photo.jpg';

const HomeSection = () => {
  const skills = useMemo(() => [
    'Network Security', 'Penetration Testing', 'Vulnerability Assessment',
    'Incident Response', 'Security Monitoring', 'Offensive Security', 'Security Automation', 'Defensive Security'
  ], []);

  const [currentSkill, setCurrentSkill] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [hackMode, setHackMode] = useState(false);

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
    <section id="home" className="mb-12 relative grid-bg overflow-hidden text-white">
      <div className="scanline absolute inset-0 pointer-events-none" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.08, textShadow: '0 0 30px rgba(0, 194, 255, 0.8)' }}
            transition={{ duration: 0.5 }}
            className="text-4xl text-red-500 font-bold mb-6"
          >
            Ethical Hacker and Penetration Tester
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="text-2xl md:text-3xl text-cyan-400 font-mono">Cyber Security | Vulnerability Assessment</span>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-green-400 mt-2 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-2xl md:text-3xl font-mono gradient-text">
              {currentSkill}<span className="">|</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="gradient-text text-base font-mono">Stay Ahead of the Curve</span>
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
          📄 My  Resume
            </motion.a>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={() => setHackMode(!hackMode)}
              whileHover={{ scale: 1.06, boxShadow: '0 0 20px rgba(57, 255, 20, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block ${hackMode ? 'bg-green-500' : 'bg-red-500'} text-white font-bold py-3 px-6 rounded-lg font-mono transition-all duration-300`}
            >
              {hackMode ? '🛡️ Defense Mode' : '💀 Hack Mode'}
            </motion.button>
          </div>

          {hackMode && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-6 p-4 bg-black/70 border border-cyan-400 rounded-lg shadow-[0_0_20px_rgba(0,194,255,0.45)]"
            >
              <div className="text-sm font-mono text-cyan-200 mb-2">[HACK MODE ACTIVE] | Real-time breach simulation</div>
              <div className="text-xs font-mono text-green-300 leading-5">booting kernel... 100%\nscanning ports... 7/1024\nattack vector analysis... complete\nexploits ready... 3</div>
            </motion.div>
          )}

        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0 relative"
        >
          <div className="relative">
            <motion.img 
              src={profileImage}
              alt="Samuel Belay" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUYyOTNCIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0Y5RkFGQiIvPgo8cGF0aCBkPSJNNDAgMTYwQzQwIDE0MCA2MCA5MCAxMDAgOTBTMTYwIDE0MCAxNjAgMTYwVjIwMEg0MFYxNjBaIiBmaWxsPSIjRjlGQUZCIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRjlGQUZCIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiPlNBTUVFTCwgU0FNVUVMPC90ZXh0Pgo8L3N2Zz4K';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
