import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { Shield, Mail, FileText, ChevronRight } from 'lucide-react';
import profileImage from '../assets/photo.jpg';

const HomeSection = () => {
  const skills = useMemo(() => [
    'Network Security',
    'Penetration Testing',
    'Vulnerability Assessment',
    'Incident Response',
    'Security Monitoring',
    'Cloud Security',
  ], []);

  const [currentSkill, setCurrentSkill] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = skills[skillIndex];
    const typingSpeed = isDeleting ? 40 : 80;
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
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center py-16">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              <span>Cybersecurity Professional</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-4 leading-tight"
            >
              Ethical Hacker &
              <br />
              <span className="gradient-text">Penetration Tester</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 mb-6"
            >
              Specializing in Vulnerability Assessment & Security Analysis
            </motion.p>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-10 mb-8"
            >
              <p className="text-xl md:text-2xl font-mono text-cyan-400">
                {currentSkill}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="/Samuel_Belay_CV.pdf"
                download="Samuel_Belay_CV.pdf"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-slate-100">240+</p>
                <p className="text-sm text-slate-400">Community Members</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-slate-100">Top 6%</p>
                <p className="text-sm text-slate-400">Advent of Cyber 2025</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-slate-100">5+</p>
                <p className="text-sm text-slate-400">Certifications</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl" />
              
              {/* Border ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="p-1 rounded-full bg-slate-900">
                  <img 
                    src={profileImage}
                    alt="Samuel Belay - Cybersecurity Professional" 
                    className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUUyOTNCIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzk0QTNCOCIvPgo8cGF0aCBkPSJNNjAgMTYwQzYwIDE0MCA3MCAxMjAgMTAwIDEyMFMxNDAgMTQwIDE0MCAxNjBWMjAwSDYwVjE2MFoiIGZpbGw9IiM5NEEzQjgiLz4KPC9zdmc+';
                    }}
                  />
                </div>
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 shadow-lg">
                <span className="status-indicator" />
                <span className="text-sm font-medium text-slate-300">Available for hire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
