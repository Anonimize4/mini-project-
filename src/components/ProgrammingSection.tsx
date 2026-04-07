import { useState } from 'react';
import { motion } from 'framer-motion';

const ProgrammingSection = () => {
  const programmingLanguages = [
    { icon: "🐍", name: "Python", level: "Advanced", bgColor: "bg-green-500", details: "Scripting, automation, pentesting tools (Scapy, Requests), exploit development, data analysis for security" },
    { icon: "🔥", name: "JavaScript/TypeScript", level: "Advanced", bgColor: "bg-yellow-500", details: "Web app security testing, Node.js tools, browser extensions, React/Vue for security dashboards" },
    { icon: "🐚", name: "Bash/Shell Scripting", level: "Proficient", bgColor: "bg-orange-500", details: "Automation scripts, log analysis, network enumeration, custom pentest workflows" },
    { icon: "⚙️", name: "C/C++", level: "Intermediate", bgColor: "bg-blue-500", details: "Exploit development, reverse engineering, low-level security tools, buffer overflow analysis" },
    { icon: "☕", name: "Java", level: "Proficient", bgColor: "bg-red-500", details: "Enterprise app security, Android pentesting, Spring Boot security, deserialization exploits" },
    { icon: "📦", name: "Go", level: "Intermediate", bgColor: "bg-purple-500", details: "Modern security tools (Amass, ffuf), high-performance scanners, CLI pentest utilities" },
    { icon: "🦀", name: "Rust", level: "Intermediate", bgColor: "bg-teal-500", details: "Memory-safe security tools, kernel modules, high-performance fuzzers" }
  ];

  // State for accordion functionality
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

  // Handle click for skill items (toggle expansion)
  const handleClickSkill = (index: number) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  // Skill Item Component - Accordion with expand/collapse on hover (simplified style)
  const SkillItem = ({ skill, index, delay = 0 }: { 
    skill: { 
      icon: string; 
      name: string; 
      level: string; 
      bgColor: string;
      details: string;
    }; 
    index: number; 
    delay?: number 
  }) => {
    const isExpanded = expandedSkill === index;
    
    return (
    <motion.div 
      key={index} 
      className="border border-emerald-500/30 rounded-lg overflow-hidden bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300 cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: delay + index * 0.1 }}
      onClick={() => handleClickSkill(index)}
    >
      <div className="p-4 flex items-center space-x-4">
        <div className={`w-12 h-12 ${skill.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-xl">{skill.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
        </div>
      </div>
      
      {/* Collapsible content */}
      <motion.div
        initial={false}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4">
          <p className="text-gray-300 text-sm">
            {skill.details}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
  };

  return (
    <section id="programming" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          Programming Languages
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        {programmingLanguages.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProgrammingSection;

