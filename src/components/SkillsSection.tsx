import { motion } from 'framer-motion';

const SkillsSection = () => {
  const programmingSkills = [
    { icon: "⚛️", name: "React", level: "Advanced", bgColor: "bg-blue-500" },
    { icon: "🟢", name: "Node.js", level: "Advanced", bgColor: "bg-green-500" },
    { icon: "📝", name: "TypeScript", level: "Advanced", bgColor: "bg-yellow-500" },
    { icon: "🎨", name: "Tailwind CSS", level: "Advanced", bgColor: "bg-purple-500" },
    { icon: "⚡", name: "JavaScript", level: "Expert", bgColor: "bg-pink-500" },
    { icon: "🔄", name: "Redux", level: "Intermediate", bgColor: "bg-emerald-500" },
    { icon: "📱", name: "React Native", level: "Intermediate", bgColor: "bg-indigo-500" },
    { icon: "🐍", name: "Python", level: "Advanced", bgColor: "bg-blue-600" },
    { icon: "🌐", name: "Vue.js", level: "Intermediate", bgColor: "bg-green-600" },
    { icon: "🔗", name: "API Development", level: "Advanced", bgColor: "bg-orange-500" }
  ];

  const cybersecuritySkills = [
    { icon: "🔒", name: "Network Security", level: "Advanced", bgColor: "bg-red-500" },
    { icon: "🛡️", name: "Penetration Testing", level: "Intermediate", bgColor: "bg-red-600" },
    { icon: "🔍", name: "Vulnerability Assessment", level: "Advanced", bgColor: "bg-orange-600" },
    { icon: "🔐", name: "Encryption & Cryptography", level: "Intermediate", bgColor: "bg-purple-600" },
    { icon: "🚨", name: "Incident Response", level: "Intermediate", bgColor: "bg-yellow-600" },
    { icon: "📊", name: "Security Monitoring", level: "Advanced", bgColor: "bg-teal-600" },
    { icon: "☁️", name: "Cloud Security", level: "Intermediate", bgColor: "bg-gray-600" },
    { icon: "🔧", name: "Git & GitHub", level: "Advanced", bgColor: "bg-gray-700" },
    { icon: "🚀", name: "Docker Security", level: "Intermediate", bgColor: "bg-cyan-600" },
    { icon: "🧪", name: "Security Testing", level: "Advanced", bgColor: "bg-pink-600" }
  ];

  const SkillItem = ({ skill, index, delay = 0 }: { skill: any; index: number; delay?: number }) => (
    <motion.div 
      key={index} 
      className="flex items-center space-x-4 p-3 border-l-4 border-blue-500 hover:bg-gray-800/50 transition-colors duration-300"
      whileHover={{ x: 10 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: delay + index * 0.1 }}
    >
      <div className={`w-12 h-12 ${skill.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
        <span className="text-white text-xl">{skill.icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-white font-semibold">{skill.name}</h3>
        <p className="text-gray-400 text-sm">{skill.level}</p>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center font-mono" style={{ color: '#39FF14' }}>My Skills</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Programming Skills - Left Side */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Programming</h3>
          <div className="space-y-4">
            {programmingSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
        
        {/* Cybersecurity Skills - Right Side */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Cybersecurity</h3>
          <div className="space-y-4">
            {cybersecuritySkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
