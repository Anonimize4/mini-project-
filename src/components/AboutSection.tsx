import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutSection = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const communityItems = [
    { title: "", description: "" },
    { title: "", description: "" },
    { title: "", description: "" }
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
          <div className="space-y-3">
            {communityItems.map((item, index) => (
              <motion.div
                key={index}
                className="border border-emerald-500/30 rounded-lg overflow-hidden bg-gray-800/30"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setExpandedItem(index)}
                onMouseLeave={() => setExpandedItem(null)}
              >
                <div className="p-4 flex items-center justify-between cursor-pointer">
                  <span className="text-white font-mono">{item.title || "Click to add title"}</span>
                  <motion.span 
                    className="text-cyan-400"
                    animate={{ rotate: expandedItem === index ? 180 : 0 }}
                  >
                    ▼
                  </motion.span>
                </div>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedItem === index ? "auto" : 0,
                    opacity: expandedItem === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 px-4 pb-4 text-base">
                    {item.description || "Click to add description"}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
