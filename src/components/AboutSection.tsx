import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Lightbulb, ChevronDown, Trophy } from 'lucide-react';

const AboutSection = () => {
  const [expandedCommunity, setExpandedCommunity] = useState<number | null>(null);

  const communityItems = [
    { 
      title: "Cyber Security Community Mentor", 
      icon: Users,
      description: "Managed a cybersecurity learning community with over 240 members. Shared cybersecurity resources, labs, and learning materials. Guided members on security fundamentals and best practices."
    },
    { 
      title: "INSA Internship", 
      icon: Building2,
      description: "Completed a cybersecurity internship at Information Network Security Administration (INSA). Participated in penetration testing activities and security audits on critical infrastructure."
    },
    { 
      title: "Innovation Team Member", 
      icon: Lightbulb,
      description: "Active member of Bahirdar University's innovation team, working on various tech projects and contributing to cybersecurity awareness programs."
    }
  ];

  return (
    <section id="about" className="py-20">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">About Me</h2>
        <div className="section-title-line mx-auto" />
      </motion.div>

      {/* Summary Card */}
      <motion.div 
        className="card rounded-xl p-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-cyan-400 mb-4">Professional Summary</h3>
        <p className="text-slate-300 leading-relaxed">
          Highly motivated Cybersecurity and Cloud Security enthusiast with hands-on experience in vulnerability assessment, threat analysis, and secure cloud practices. Achieved effective security monitoring and log analysis through Wazuh implementation. Focused on continuous learning and building secure, scalable systems.
        </p>
      </motion.div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Side - Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-slate-100 mb-6">Background</h3>
          
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Hello! I&apos;m Samuel Belay, a BSc in Cyber Security graduate from Bahirdar University. 
              I&apos;m passionate about technology, creative problem-solving, and collaborative teamwork.
            </p>
            <p>
              I have experience in penetration testing and secure coding, demonstrated through my internship at INSA 
              where I conducted security audits on critical infrastructure and gained real-world practical experience.
            </p>
            <p>
              My interests include penetration testing, cloud security, and understanding attacker behavior. 
              I actively build hands-on experience through labs, security tools, and platforms like Hack The Box.
            </p>
            <p>
              I mentor more than 240+ cybersecurity enthusiasts and adhere to governance, risk management, 
              compliance, and local regulations in my practice.
            </p>
          </div>
        </motion.div>
        
        {/* Right Side - Community & Hackathons */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-slate-100 mb-6">Community & Leadership</h3>
          
          <div className="space-y-3 mb-8">
            {communityItems.map((item, index) => {
              const isExpanded = expandedCommunity === index;
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={index}
                  className="card rounded-lg overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setExpandedCommunity(isExpanded ? null : index)}
                >
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="icon-container">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-slate-200 font-medium">{item.title}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    </motion.div>
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
                    <div className="px-4 pb-4 pt-0">
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Hackathon Events */}
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-cyan-400" />
              Hackathon Events
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/hackatons/hackathon.jpg", alt: "Hackathon Event" },
                { src: "/hackatons/samiHackathon.jpg", alt: "Sami Hackathon" }
              ].map((hackathon, index) => (
                <motion.div
                  key={index}
                  className="relative group rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[4/3] bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
                    <img 
                      src={hackathon.src} 
                      alt={hackathon.alt} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="tag text-xs">
                      <Trophy className="w-3 h-3" />
                      Hackathon
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
