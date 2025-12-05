import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      icon: "🔒",
      title: "Penetration Testing Toolkit",
      description: "Comprehensive cybersecurity toolkit for automated vulnerability assessment and penetration testing.",
      technologies: ["Python", "React", "Node.js", "Security APIs"],
      gradient: "from-red-500 to-orange-600",
      featured: true
    },
    {
      icon: "🛡️",
      title: "Network Security Monitor",
      description: "Real-time network monitoring system with threat detection and incident response capabilities.",
      technologies: ["Python", "TypeScript", "WebSocket", "Elasticsearch"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: "📊",
      title: "Security Analytics Dashboard",
      description: "Interactive dashboard for security metrics visualization and threat intelligence analysis.",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: "🔍",
      title: "Vulnerability Scanner",
      description: "Automated vulnerability scanning tool for web applications and network infrastructure.",
      technologies: ["Python", "Nmap", "Security Libraries", "Docker"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: "🚀",
      title: "Secure Coding Platform",
      description: "Educational platform for learning secure coding practices and cybersecurity fundamentals.",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: "📱",
      title: "Mobile Security App",
      description: "Android application for mobile device security assessment and privacy protection.",
      technologies: ["React Native", "Security APIs", "Firebase", "Android"],
      gradient: "from-yellow-500 to-red-600"
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800",
    
      "React Native": "bg-blue-100 text-blue-800",
    
      "Vue.js": "bg-blue-100 text-blue-800",
    
      "Python": "bg-gray-100 text-gray-800",

    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          My Projects
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-lg">⭐</span>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={`relative group ${project.featured ? 'lg:col-span-2' : ''}`}
            whileHover={{ 
              scale: 1.02,
              y: -5
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Featured badge */}
            {project.featured && (
              <motion.div
                className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-mono"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐ FEATURED
              </motion.div>
            )}

            <div className="cyber-border rounded-lg overflow-hidden bg-gray-800/50 glow-effect h-full">
              {/* Project header with gradient background */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <motion.div
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center relative z-10"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-4xl">{project.icon}</span>
                </motion.div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)',
                    animation: 'float 20s linear infinite'
                  }} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-3 font-mono">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-3 py-1 rounded-full font-mono"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 justify-between">
                  <motion.button 
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-lg font-mono transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🔍 View Demo
                  </motion.button>
                  <motion.a 
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-lg font-mono transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    💻 GitHub
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
