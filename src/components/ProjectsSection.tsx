import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      icon: "🚀",
      title: "Project One",
      description: "A innovative web application built with modern technologies to solve real-world problems.",
      technologies: ["React", "Node.js", "MongoDB"],
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: "🛍️",
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration and inventory management.",
      technologies: ["React", "Stripe", "Firebase"],
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: "📱",
      title: "Mobile App Design",
      description: "Cross-platform mobile application with intuitive UI and seamless user experience.",
      technologies: ["React Native", "Redux", "API"],
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: "📊",
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and business intelligence with real-time updates.",
      technologies: ["Vue.js", "D3.js", "Python"],
      gradient: "from-red-400 to-red-600"
    },
    {
      icon: "🤖",
      title: "AI Chat Assistant",
      description: "Intelligent chatbot powered by machine learning for customer support and automation.",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      icon: "🎮",
      title: "Gaming Platform",
      description: "Multiplayer gaming platform with real-time gameplay and social features.",
      technologies: ["WebSocket", "Canvas", "Node.js"],
      gradient: "from-indigo-400 to-indigo-600"
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800",
      "MongoDB": "bg-purple-100 text-purple-800",
      "Stripe": "bg-yellow-100 text-yellow-800",
      "Firebase": "bg-red-100 text-red-800",
      "React Native": "bg-blue-100 text-blue-800",
      "Redux": "bg-orange-100 text-orange-800",
      "API": "bg-indigo-100 text-indigo-800",
      "Vue.js": "bg-blue-100 text-blue-800",
      "D3.js": "bg-green-100 text-green-800",
      "Python": "bg-gray-100 text-gray-800",
      "TensorFlow": "bg-purple-100 text-purple-800",
      "FastAPI": "bg-green-100 text-green-800",
      "WebSocket": "bg-blue-100 text-blue-800",
      "Canvas": "bg-orange-100 text-orange-800"
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center font-mono" style={{ color: '#39FF14' }}>My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="text-center"
            whileHover={{ 
              scale: 1.05,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-800/50 border-2 border-blue-400 flex items-center justify-center hover:bg-gray-700/50 transition-colors duration-300 mb-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-blue-400 text-3xl">🖼️</span>
                </div>
                <p className="text-gray-400 text-sm">Project Image</p>
              </div>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 justify-center">
              <motion.button 
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                View Demo
              </motion.button>
              <motion.a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 text-sm font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
