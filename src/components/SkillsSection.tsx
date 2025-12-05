import { motion } from 'framer-motion';

const SkillsSection = () => {
  const programmingSkills = [
    { icon: "⚛️", name: "React", level: "Advanced", bgColor: "bg-blue-500" },
    { icon: "🟢", name: "Node.js", level: "Advanced", bgColor: "bg-green-500" },
    { icon: "📝", name: "TypeScript", level: "Advanced", bgColor: "bg-yellow-500" },
    { icon: "⚡", name: "JavaScript", level: "Expert", bgColor: "bg-pink-500" },
    { icon: "🐍", name: "Python", level: "Advanced", bgColor: "bg-blue-600" }
  ];

  const cybersecuritySkills = [
    { icon: "🔒", name: "Network Security", level: "Advanced", bgColor: "bg-red-500" },
    { icon: "🛡️", name: "Penetration Testing", level: "Intermediate", bgColor: "bg-red-600" },
    { icon: "🔍", name: "Vulnerability Assessment", level: "Advanced", bgColor: "bg-orange-600" },
    { icon: "🚨", name: "Incident Response", level: "Intermediate", bgColor: "bg-yellow-600" },
    { icon: "📊", name: "Security Monitoring", level: "Advanced", bgColor: "bg-teal-600" }
  ];

  const getSkillLevel = (level: string) => {
    const levels: { [key: string]: number } = {
      "Expert": 95,
      "Advanced": 80,
      "Intermediate": 65,
      "Beginner": 40
    };
    return levels[level] || 50;
  };

  const SkillItem = ({ skill, index, delay = 0 }: { skill: any; index: number; delay?: number }) => (
    <motion.div 
      key={index} 
      className="p-4 cyber-border rounded-lg hover:bg-gray-800/30 transition-all duration-300 glow-effect"
      whileHover={{ x: 10, scale: 1.02 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: delay + index * 0.1 }}
    >
      <div className="flex items-center space-x-4 mb-3">
        <div className={`w-12 h-12 ${skill.bgColor} rounded-full flex items-center justify-center flex-shrink-0 glow-effect`}>
          <span className="text-white text-xl">{skill.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
          <p className="text-gray-400 text-sm">{skill.level}</p>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div 
          className={`h-full ${skill.bgColor} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${getSkillLevel(skill.level)}%` }}
          transition={{ duration: 1, delay: delay + index * 0.1 + 0.5 }}
          style={{
            boxShadow: '0 0 10px rgba(57, 255, 20, 0.5)'
          }}
        />
      </div>
      
      <div className="mt-2 text-right">
        <span className="text-xs text-gray-400 font-mono">{getSkillLevel(skill.level)}%</span>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          My Skills
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-lg">⭐</span>
          ))}
        </div>
      </div>
      
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
