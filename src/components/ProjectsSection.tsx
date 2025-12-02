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
      icon: "📊",
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and business intelligence with real-time updates.",
      technologies: ["Vue.js", "D3.js", "Python"],
      gradient: "from-red-400 to-red-600"
    },
  
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
                <p className="text-gray-400 text-sm">Projects Demo</p>
              </div>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
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
