import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      icon: "📊",
      title: "SIEM Lab with Wazuh",
      description: "Designed and deployed a centralized SIEM lab using Wazuh to collect and analyze logs from Linux endpoints and visualize security alerts through custom dashboards.",
      technologies: ["Wazuh", "Linux", "SIEM", "Dashboard"],
      gradient: "from-green-500 to-emerald-600",
      featured: true
    },
    {
      icon: "🔍",
      title: "Network Traffic Analysis",
      description: "Performed network traffic analysis using Wireshark to identify malicious communication patterns and potential data exfiltration attempts.",
      technologies: ["Wireshark", "Network Security", "Traffic Analysis", "Forensics"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: "🗺️",
      title: "Network Reconnaissance & Vulnerability Scanning",
      description: "Performed network reconnaissance and vulnerability scanning using Nmap to identify open ports, services, and potential vulnerabilities.",
      technologies: ["Nmap", "Vulnerability Assessment", "Network Security", "Penetration Testing"],
      gradient: "from-red-500 to-orange-600"
    },
    {
      icon: "🐛",
      title: "OWASP Top 10 Testing",
      description: "Tested OWASP Top 10 vulnerabilities (XSS, SQL Injection) in controlled lab environments using Burp Suite for web application security.",
      technologies: ["Burp Suite", "OWASP", "Web Security", "XSS", "SQL Injection"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: "🎣",
      title: "Phishing Simulation",
      description: "Conducted phishing simulation exercises using Setoolkit in controlled environments to test organizational security awareness.",
      technologies: ["Setoolkit", "Social Engineering", "Security Awareness", "Phishing"],
      gradient: "from-yellow-500 to-red-600"
    }
  ];

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

            <div className="rounded-lg overflow-hidden bg-gray-800/50 h-full">
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
