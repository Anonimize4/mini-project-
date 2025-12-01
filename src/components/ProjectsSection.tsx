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
            className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4">
              <div className={`w-full h-40 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center`}>
                <span className="text-white text-4xl font-bold">{project.icon}</span>
              </div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={`${getTechColor(tech)} text-xs px-2 py-1 rounded`}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <motion.button 
                className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                View Demo
              </motion.button>
              <motion.button 
                className="text-gray-600 hover:text-gray-800 text-sm font-semibold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
