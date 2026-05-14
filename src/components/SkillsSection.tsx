import { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {

  const technicalSkills = [
    { icon: "🔓", name: "Vulnerability Assessment", level: "Advanced", bgColor: "bg-red-500", details: "Risk identification, CVE analysis, security scanning, Nessula, OpenVAS" },
    { icon: "⚔️", name: "Penetration Testing", level: "Advanced", bgColor: "bg-red-600", details: "Web app testing, network pentesting, vulnerability assessment, Metasploit, Burp Suite" },
    { icon: "📋", name: "Security Audits", level: "Advanced", bgColor: "bg-blue-500", details: "Compliance auditing, security assessments, gap analysis, ISO 27001, PCI DSS" },
    { icon: "📊", name: "Risk Management", level: "Advanced", bgColor: "bg-orange-500", details: "Risk assessment, threat modeling, vulnerability analysis, mitigation planning" },
    { icon: "🚨", name: "Incident Response", level: "Intermediate", bgColor: "bg-yellow-600", details: "Log analysis, malware detection, forensic investigation, containment" },
    { icon: "🔍", name: "Cyber Threat Analysis", level: "Advanced", bgColor: "bg-purple-500", details: "Threat intelligence, malware analysis, APT detection, IOCs" },
    { icon: "🌐", name: "Network Security", level: "Advanced", bgColor: "bg-cyan-500", details: "Firewall configuration, IDS/IPS, VPN, network monitoring, segmentation" },
    { icon: "📝", name: "Technical Documentation", level: "Advanced", bgColor: "bg-teal-500", details: "Security reports, penetration testing reports, risk assessments, procedures" },
    { icon: "🔎", name: "Digital Forensics", level: "Intermediate", bgColor: "bg-indigo-500", details: "Evidence collection, forensic analysis, chain of custody, reporting" },
    { icon: "⚖️", name: "GRC Compliance", level: "Advanced", bgColor: "bg-green-600", details: "ISO 27001, GDPR, PCI DSS, INSA 29001, compliance frameworks" }
  ];

  const softSkills = [
    { icon: "🧩", name: "Problem-solving", level: "Advanced", bgColor: "bg-amber-500", details: "Analyzing complex security challenges and developing effective solutions" },
    { icon: "🤝", name: "Team Collaboration", level: "Advanced", bgColor: "bg-emerald-500", details: "Collaborating effectively in cross-functional teams and security projects" },
    { icon: "📚", name: "Adaptive Learning", level: "Advanced", bgColor: "bg-sky-500", details: "Quickly learning new technologies and adapting to evolving threats" },
    { icon: "🎯", name: "Strategic Planning", level: "Advanced", bgColor: "bg-violet-500", details: "Developing security roadmaps, prioritizing initiatives, risk-based planning" },
    { icon: "💬", name: "Communication", level: "Advanced", bgColor: "bg-indigo-500", details: "Clear articulation of complex security concepts to technical and non-technical audiences" },
    { icon: "👥", name: "Leadership", level: "Advanced", bgColor: "bg-rose-500", details: "Leading security initiatives, mentoring 240+ cybersecurity enthusiasts" }
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
    <section id="skills" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          Skills
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Technical Skills - Left Side */}
          <div className="flex-1 lg:order-1">
            <h3 className="text-3xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Technical Skills</h3>
            <div className="space-y-3">
              {technicalSkills.map((skill, index) => (
                <SkillItem key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          {/* Soft Skills - Right Side */}
          <div className="flex-1 lg:order-2">
            <h3 className="text-3xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Soft Skills</h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <SkillItem key={`soft-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

