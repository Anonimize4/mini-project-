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
