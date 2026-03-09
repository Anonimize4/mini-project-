import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SIEM Lab with Wazuh",
      description: "Designed and deployed a centralized SIEM lab using Wazuh to collect and analyze logs from Linux endpoints and visualize security alerts through custom dashboards.",
      image: null
    },
    {
      title: "Network Traffic Analysis",
      description: "Performed network traffic analysis using Wireshark to identify malicious communication patterns and potential data exfiltration attempts.",
      image: null
    },
    {
      title: "Network Reconnaissance & Vulnerability Scanning",
      description: "Performed network reconnaissance and vulnerability scanning using Nmap.",
      image: null
    },
    {
      title: "OWASP Top 10 Testing",
      description: "Tested OWASP Top 10 vulnerabilities (XSS, SQL Injection) in controlled lab environments using Burp Suite.",
      image: null
    },
    {
      title: "Phishing Simulation",
      description: "Conducted phishing simulation exercises using Setoolkit in controlled environments.",
      image: null
    }
  ];

  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "Information Network Security Administration (INSA)",
      period: "June 2025 – September 2025",
      description: "",
      points: [
        "Penetration testing and security audits on critical infrastructure (INSA 29001)",
        "Gap analyses and risk assessments (ISO 27001, GDPR, PCI DSS)",
        "Network architecture audit and data center failover validation",
        "Web application testing and OWASP Top 10 mitigation",
        "Technical reports for executive stakeholders"
      ]
    },
    {
      title: "Cybersecurity Studies & Labs",
      company: "Self-directed Learning",
      period: "January 2023 - June 2026",
      description: "",
      points: [
        "Studied core cybersecurity concepts including network security, cryptography, web security, system security, and digital forensics",
        "Conducted hands-on labs in penetration testing, vulnerability assessment, and network analysis",
        "Used security tools including Wireshark, Nmap, Metasploit, and Burp Suite during practical labs",
        "Identified vulnerabilities and implemented remediation strategies in lab environments",
        "Ranked in the top 6% globally in Advent of Cyber 2025 (24+ hands-on labs)"
      ]
    },
    {
      title: "Cybersecurity Community Mentor",
      company: "Telegram",
      period: "240+ Members",
      description: "",
      points: [
        "Managed a cybersecurity learning community with over 240 members",
        "Shared cybersecurity resources, labs, and learning materials",
        "Guided members on security fundamentals and best practices",
        "Encouraged discussion and collaborative learning among students"
      ]
    },
    {
      title: "Junior Security Analyst",
      company: "Freelance",
      period: "2024 - Present",
      description: "",
      points: [
        "Monitored security alerts and performed initial triage of potential security incidents",
        "Conducted vulnerability scans and assisted in remediation efforts",
        "Documented security procedures and maintained incident response playbooks",
        "Collaborated with senior analysts to investigate phishing attempts and malware infections",
        "Participated in security awareness training sessions for end-users"
      ]
    }
  ];

  return (
    <section id="projects" className="mb-12">
      {/* Projects Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          Projects
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="rounded-lg overflow-hidden bg-gray-800/50 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Header - Image */}
            <div className="relative h-40 bg-gray-900/50 flex items-center justify-center">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">🖼️</div>
                  <p className="text-gray-500 text-sm font-mono">Click to add image</p>
                </div>
              )}
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(57, 255, 20, 0.3) 10px, rgba(57, 255, 20, 0.3) 20px)',
                }} />
              </div>
            </div>

            {/* Footer - Description */}
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg mb-2 font-mono">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Header */}
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
      
      {/* Experience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {experiences.map((experience, index) => (
          <motion.div 
            key={index}
            className="rounded-lg p-6 bg-gray-800/50 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-1 font-mono">{experience.title}</h3>
            {experience.company && (
              <p className="text-cyan-400 text-sm mb-1">{experience.company}</p>
            )}
            {experience.period && (
              <p className="text-yellow-400 text-xs mb-3 font-mono">{experience.period}</p>
            )}
            {experience.points ? (
              <ul className="text-gray-400 text-sm space-y-1">
                {experience.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-400 mr-2">›</span>
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-sm">{experience.description}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Skills Header */}
      <div className="text-center mb-8 mt-12">
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

      {/* Skills Grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Technical Skills - Left */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>Technical Skills</h3>
          <div className="space-y-3">
            {[
              "Vulnerability Assessment",
              "Penetration Testing",
              "Security Audits",
              "Risk Management",
              "Incident Response",
              "Cyber Threat Analysis",
              "Network Security",
              "Digital Forensics",
              "GRC Compliance"
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="rounded-lg p-3 bg-gray-800/30 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <span className="text-white font-mono">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills - Right */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>Soft Skills</h3>
          <div className="space-y-3">
            {[
              "Problem-solving",
              "Team Collaboration",
              "Adaptive Learning",
              "Strategic Planning",
              "Analytical Thinking",
              "Time Management"
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="rounded-lg p-3 bg-gray-800/30 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <span className="text-white font-mono">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Header */}
      <div className="text-center mb-8 mt-12">
        <h2 className="text-4xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          Education
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
      </div>

      {/* Education Content */}
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="rounded-lg p-6 bg-gray-800/30 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-white font-semibold text-xl mb-2 font-mono">Cybersecurity Graduate</h3>
          <p className="text-cyan-400 text-lg mb-2">Bahirdar University</p>
          <p className="text-yellow-400 text-sm font-mono">2022 - 2026</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

