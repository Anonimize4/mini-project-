import { useState } from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    { 
      icon: "💼", 
      title: "Cybersecurity Intern", 
      company: "Information Network Security Administration (INSA)",
      period: "June 2025 – September 2025",
      description: "Participated in penetration testing activities and security audits on critical infrastructure, ensuring alignment with INSA 29001 standards and documenting high-risk findings for remediation. Conducted gap analyses and risk assessments mapped to ISO 27001, GDPR, PCI DSS. Collaborated with development teams to integrate security into the SDLC, performing web application testing and providing actionable mitigation strategies for OWASP Top 10 vulnerabilities."
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
    },
    {
      icon: "🛡️",
      title: "Junior Security Analyst",
      company: "Freelance",
      period: "2024 - Present",
      description: "Monitored security alerts and performed initial triage of potential security incidents. Conducted vulnerability scans and assisted in remediation efforts. Documented security procedures and maintained incident response playbooks. Collaborated with senior analysts to investigate phishing attempts and malware infections."
    }
  ];

  // State for accordion functionality
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  // Handle click for experience items (toggle expansion)
  const handleClickExperience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  // Experience Item Component
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
      onClick={() => handleClickExperience(index)}
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

  return (
    <section id="experience" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          Experience
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

