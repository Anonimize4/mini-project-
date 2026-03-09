import { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {

  const experiences = [
    { 
      icon: "💼", 
      title: "Cybersecurity Intern", 
      company: "Information Network Security Administration (INSA)",
      period: "June 2025 – September 2025",
      description: "Participated in penetration testing activities and security audits on critical infrastructure, ensuring alignment with INSA 29001 standards and documenting high-risk findings for remediation. Conducted gap analyses and risk assessments mapped to ISO 27001, GDPR, and PCI DSS. Collaborated with development teams to integrate security into the SDLC, performing web application testing and providing actionable mitigation strategies for OWASP Top 10 vulnerabilities."
    },
    { 
      icon: "🎓", 
      title: "Cybersecurity Studies & Labs",
      company: "Self-directed Learning",
      period: "January 2023 - Present",
      description: "Studied core cybersecurity concepts including network security, cryptography, web security, system security, and digital forensics. Conducted hands-on labs in penetration testing, vulnerability assessment, and network analysis. Used security tools including Wireshark, Nmap, Metasploit, and Burp Suite during practical labs."
    },
    { 
      icon: "👥", 
      title: "Cyber Security Community Mentor", 
      company: "Telegram Community",
      period: "2023 - Present",
      description: "Managed a cybersecurity learning community with over 240 members. Shared cybersecurity resources, labs, and learning materials. Guided members on security fundamentals and best practices. Encouraged discussion and collaborative learning among students."
    },
    { 
      icon: "🔬", 
      title: "Security Researcher", 
      company: "Independent",
      period: "Ongoing",
      description: "Conducting research on emerging threats, vulnerabilities, and defense mechanisms. Active participant in Bug Bounty programs and CTF competitions. Ranked in the top 6% globally in Advent of Cyber 2025."
    }
  ];

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
    { icon: "⚖️", name: "GRC Compliance", level: "Advanced", bgColor: "bg-green-600", details: "ISO 27001, GDPR, PCI DSS, INSA 29001, compliance frameworks" },
    { icon: "🖥️", name: "System Administration", level: "Intermediate", bgColor: "bg-slate-500", details: "Linux administration, Windows server, network configuration, hardening" }
  ];

  const softSkills = [
    { icon: "🧩", name: "Problem-solving", level: "Advanced", bgColor: "bg-amber-500", details: "Analyzing complex security challenges and developing effective solutions" },
    { icon: "🤝", name: "Team Collaboration", level: "Advanced", bgColor: "bg-emerald-500", details: "Collaborating effectively in cross-functional teams and security projects" },
    { icon: "📚", name: "Adaptive Learning", level: "Advanced", bgColor: "bg-sky-500", details: "Quickly learning new technologies and adapting to evolving threats" },
    { icon: "🎯", name: "Strategic Planning", level: "Advanced", bgColor: "bg-violet-500", details: "Developing security roadmaps, prioritizing initiatives, risk-based planning" },
    { icon: "💬", name: "Communication", level: "Advanced", bgColor: "bg-indigo-500", details: "Clear articulation of complex security concepts to technical and non-technical audiences" },
    { icon: "👥", name: "Leadership", level: "Advanced", bgColor: "bg-rose-500", details: "Leading security initiatives, mentoring 240+ cybersecurity enthusiasts" }
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

  // State for accordion functionality
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

  const toggleExperience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  const toggleSkill = (index: number) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  // Experience Item Component - Accordion with expand/collapse
  const ExperienceItem = ({ exp, index, delay = 0 }: { 
    exp: { 
      icon: string; 
      title: string; 
      company: string;
      period: string;
      description: string; 
    }; 
    index: number; 
    delay?: number 
  }) => {
    const isExpanded = expandedExperience === index;
    
    return (
    <motion.div
      key={index}
      className="border border-emerald-500/30 rounded-lg overflow-hidden bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay + index * 0.1 }}
      onClick={() => toggleExperience(index)}
    >
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{exp.icon}</span>
          <div>
            <span className="text-white font-semibold text-lg block">{exp.title}</span>
            <span className="text-cyan-400 text-sm">{exp.company}</span>
          </div>
        </div>
        <motion.span 
          className="text-cyan-400 text-xl"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </div>
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
          <span className="text-yellow-400 text-sm font-mono">{exp.period}</span>
          <p className="text-gray-300 mt-2 text-base">
            {exp.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
  };

  // Skill Item Component - Accordion with expand/collapse
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
      onClick={() => toggleSkill(index)}
    >
      <div className="p-4 flex items-center space-x-4">
        <div className={`w-12 h-12 ${skill.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-xl">{skill.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
          <p className="text-gray-400 text-sm">{skill.level}</p>
        </div>
        <motion.span 
          className="text-cyan-400 text-xl"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </div>
      
      {/* Collapsible content with progress bar */}
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
          <p className="text-gray-300 text-sm mb-3">{skill.details}</p>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div 
              className={`h-full ${skill.bgColor} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${getSkillLevel(skill.level)}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                boxShadow: '0 0 10px rgba(57, 255, 20, 0.5)'
              }}
            />
          </div>
          <div className="mt-2 text-right">
            <span className="text-sm text-gray-400 font-mono">{getSkillLevel(skill.level)}%</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
  };

  return (
    <section id="skills" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          Experience & Skills
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Experience Section - Left Side */}
        <div className="flex-1">
          <h3 className="text-3xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Experience</h3>
          <div className="space-y-3">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
        
        {/* Skills Section - Right Side */}
        <div className="flex-1">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>Technical Skills</h3>
            <div className="space-y-3">
              {technicalSkills.map((skill, index) => (
                <SkillItem key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>Soft Skills</h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <SkillItem key={index} skill={skill} index={index + technicalSkills.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
