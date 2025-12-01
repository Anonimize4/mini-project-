import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { icon: "⚛️", name: "React", level: "Advanced", bgColor: "bg-blue-500" },
    { icon: "🟢", name: "Node.js", level: "Advanced", bgColor: "bg-green-500" },
    { icon: "📝", name: "TypeScript", level: "Advanced", bgColor: "bg-yellow-500" },
    { icon: "🎨", name: "Tailwind CSS", level: "Advanced", bgColor: "bg-purple-500" },
    { icon: "🗄️", name: "MongoDB", level: "Intermediate", bgColor: "bg-red-500" },
    { icon: "🔧", name: "Git & GitHub", level: "Advanced", bgColor: "bg-indigo-500" },
    { icon: "🚀", name: "Docker", level: "Intermediate", bgColor: "bg-orange-500" },
    { icon: "🔍", name: "REST APIs", level: "Advanced", bgColor: "bg-teal-500" },
    { icon: "⚡", name: "JavaScript", level: "Expert", bgColor: "bg-pink-500" },
    { icon: "☁️", name: "AWS", level: "Intermediate", bgColor: "bg-gray-600" },
    { icon: "🧪", name: "Jest & Testing", level: "Intermediate", bgColor: "bg-cyan-500" },
    { icon: "🔄", name: "Redux", level: "Intermediate", bgColor: "bg-emerald-500" }
  ];

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center font-mono" style={{ color: '#39FF14' }}>My Skills</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 text-center"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.3 }
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.05,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className={`w-12 h-12 ${skill.bgColor} rounded-full mx-auto mb-3 flex items-center justify-center`}>
              <span className="text-white text-xl">{skill.icon}</span>
            </div>
            <motion.h3 
              className="font-bold text-gray-800 mb-1"
              whileHover={{ scale: 1.2 }}
            >
              {skill.name}
            </motion.h3>
            <p className="text-gray-600 text-xs">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
