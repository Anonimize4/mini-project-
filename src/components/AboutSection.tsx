import { useState } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [expandedCommunity, setExpandedCommunity] = useState<number | null>(null);

  const communityItems = [
    { 
      title: "Cyber Security Community Mentor", 
      description: "Managed a cybersecurity learning community with over 240 members. Shared cybersecurity resources, labs, and learning materials. Guided members on security fundamentals and best practices. Encouraged discussion and collaborative learning among students."
    },
    { 
      title: "INSA Internship", 
      description: "Completed a cybersecurity internship at Information Network Security Administration (INSA). Participated in penetration testing activities and security audits on critical infrastructure, ensuring alignment with INSA 29001 standards."
    },
    { 
      title: "Innovation Team Member", 
      description: "Active member of Bahirdar University's innovation team, working on various tech projects and contributing to cybersecurity awareness programs."
    }
  ];

  return (
    <section id="about" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          About Me
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>▸ SUMMARY</h3>
        <div className="bg-gray-800/30 border border-emerald-500/30 rounded-lg p-4">
          <p className="text-white text-lg leading-relaxed">
            Highly motivated Cybersecurity and Cloud Security enthusiast with hands-on experience in vulnerability assessment, threat analysis, and secure cloud practices. Achieved effective security monitoring and log analysis through Wazuh implementation. Focused on continuous learning and building secure, scalable systems.
          </p>
        </div>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* Left Side - whoami? */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>whoami?</h3>
          <p className="text-white text-lg leading-relaxed mb-4">
            Hello! I'm Samuel Belay, a BSc in Cyber Security graduate from Bahirdar University. 
            I'm a passionate tech person who is creative, collaborative, strong, and dedicated to achieving 
            any given task successfully.
          </p>
          <p className="text-white text-lg leading-relaxed mb-4">
            I have experience in penetration testing and coding as demonstrated in my skills section. 
            I completed an internship at INSA lasting over two months, where I gained valuable experience 
            sharing knowledge and engaging in real-world practical work. During my time there, I conducted 
            penetration testing and secure coding practices that made me more confident in my abilities.
          </p>
          <p className="text-white text-lg leading-relaxed">
            I have also worked at the innovation team at Bahirdar University.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            My interests include penetration testing, cloud security, and understanding attacker behavior.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            I actively build hands-on experience through labs, security tools, and platforms like Hack The Box while developing projects such as SIEM monitoring using Wazuh.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            I enjoy exploring how vulnerabilities are discovered, exploited, and ultimately defended.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            I adhere to governance, risk management and compliance and local rules.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            I am mentor more than 230+ cyber security enthusiasts.
          </p>
        </motion.div>
        
        {/* Right Side - Community Participation */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>Community Participation</h3>
          <div 
            className="space-y-3"
            onMouseLeave={() => setExpandedCommunity(null)}
          >
            {communityItems.map((item, index) => {
              const isExpanded = expandedCommunity === index;
              return (
              <motion.div
                key={index}
                className="border border-emerald-500/30 rounded-lg overflow-hidden bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setExpandedCommunity(index)}
              >
                <div className="p-4">
                  <span className="text-white font-mono text-lg block">{item.title}</span>
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
                    <p className="text-gray-300 text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              );
            })}
          </div>
          
          {/* Hackathon Images */}
          <div className="mt-6">
            <h4 className="text-2xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>Hackathon Events</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/hackatons/hackathon.jpg", alt: "Hackathon Event 1" },
                { src: "/hackatons/samiHackathon.jpg", alt: "Sami Hackathon Event" }
              ].map((hackathon, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[3/2] rounded-lg overflow-hidden bg-gray-800/50 border border-emerald-500/30">
                    <img 
                      src={hackathon.src} 
                      alt={hackathon.alt} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm px-4 py-2 rounded-lg font-mono">
                      🏆 Hackathon
                    </span>
                  </motion.div>
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
