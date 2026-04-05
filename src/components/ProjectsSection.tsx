import { motion } from 'framer-motion';
import { 
  Briefcase, GraduationCap, Users, Search, Shield,
  ExternalLink, Calendar, MapPin, ChevronRight
} from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SIEM Lab with Wazuh",
      description: "Designed and deployed a centralized SIEM lab using Wazuh to collect and analyze logs from Linux endpoints and visualize security alerts through custom dashboards.",
      image: "/myprojects/wazuh.png",
      tags: ["SIEM", "Wazuh", "Log Analysis"]
    },
    {
      title: "Network Traffic Analysis",
      description: "Performed network traffic analysis using Wireshark to identify malicious communication patterns and potential data exfiltration attempts.",
      image: "/myprojects/wireshark.png",
      tags: ["Wireshark", "Traffic Analysis", "Forensics"]
    },
    {
      title: "Network Reconnaissance",
      description: "Performed network reconnaissance and vulnerability scanning using Nmap to identify potential security weaknesses.",
      image: "/myprojects/nmap.png",
      tags: ["Nmap", "Scanning", "Recon"]
    },
    {
      title: "OWASP Top 10 Testing",
      description: "Tested OWASP Top 10 vulnerabilities (XSS, SQL Injection) in controlled lab environments using Burp Suite.",
      image: "/myprojects/burp.png",
      tags: ["Burp Suite", "Web Security", "OWASP"]
    },
    {
      title: "Phishing Simulation",
      description: "Conducted phishing simulation exercises using Setoolkit in controlled environments for security awareness.",
      image: "/myprojects/setoolkit.png",
      tags: ["Social Engineering", "Awareness", "Testing"]
    }
  ];

  const experiences = [
    {
      icon: Briefcase,
      title: "Cybersecurity Intern",
      company: "Information Network Security Administration (INSA)",
      period: "June 2025 – September 2025",
      points: [
        "Penetration testing and security audits on critical infrastructure",
        "Gap analyses and risk assessments (ISO 27001, GDPR, PCI DSS)",
        "Web application testing and OWASP Top 10 mitigation",
        "Technical reports for executive stakeholders"
      ]
    },
    {
      icon: GraduationCap,
      title: "Cybersecurity Studies & Labs",
      company: "Self-directed Learning",
      period: "January 2023 - Present",
      points: [
        "Core concepts: network security, cryptography, web security",
        "Hands-on labs with Wireshark, Nmap, Metasploit, Burp Suite",
        "Ranked top 6% globally in Advent of Cyber 2025"
      ]
    },
    {
      icon: Users,
      title: "Cybersecurity Community Mentor",
      company: "Telegram Community",
      period: "2023 - Present",
      points: [
        "Managed learning community with 240+ members",
        "Shared resources, labs, and learning materials",
        "Guided members on security fundamentals"
      ]
    },
    {
      icon: Search,
      title: "Security Researcher",
      company: "Independent",
      period: "Ongoing",
      points: [
        "Research on emerging threats and vulnerabilities",
        "Bug Bounty programs and CTF competitions",
        "Active participant in security communities"
      ]
    }
  ];

  const technicalSkills = [
    "Vulnerability Assessment", "Penetration Testing", "Security Audits",
    "Risk Management", "Incident Response", "Threat Analysis",
    "Network Security", "Digital Forensics", "GRC Compliance"
  ];

  const softSkills = [
    "Problem-solving", "Team Collaboration", "Adaptive Learning",
    "Strategic Planning", "Communication", "Leadership"
  ];

  return (
    <section id="projects" className="py-20">
      {/* Projects Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Projects</h2>
        <div className="section-title-line mx-auto" />
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="card rounded-xl overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="relative h-44 bg-slate-800 overflow-hidden">
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute top-3 right-3">
                <ExternalLink className="w-5 h-5 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-slate-100 font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded-md border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Experience</h2>
        <div className="section-title-line mx-auto" />
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          
          return (
            <motion.div 
              key={index}
              className="card rounded-xl p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="icon-container flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-100 font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm mt-1">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                    <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Skills Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Skills</h2>
        <div className="section-title-line mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="skill-badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="skill-badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Education</h2>
        <div className="section-title-line mx-auto" />
      </motion.div>

      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="card rounded-xl p-6 text-center">
          <div className="icon-container w-16 h-16 mx-auto mb-4">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h3 className="text-slate-100 font-semibold text-xl mb-2">BSc in Cybersecurity</h3>
          <p className="text-cyan-400 text-lg mb-2">Bahirdar University</p>
          <p className="text-slate-400 text-sm">2022 - 2026</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
