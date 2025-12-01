import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center font-mono" style={{ color: '#39FF14' }}>About Me</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>whoami?</h3>
          <motion.div 
            className="bg-blue-800 rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-white leading-relaxed mb-4">
              I am a passionate Full Stack Developer with expertise in modern web technologies. 
              My journey in software development has equipped me with strong problem-solving skills 
              and a deep understanding of creating efficient, scalable applications.
            </p>
            <p className="text-white leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and continuously expanding my skill set to stay current with industry trends.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>My Experience</h3>
          <motion.div 
            className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div className="space-y-4">
              {[
                {
                  title: "Full Stack Developer",
                  period: "2022 - Present",
                  description: "Developing scalable web applications using React, Node.js, and modern cloud technologies"
                },
                {
                  title: "Software Engineer", 
                  period: "2020 - 2022",
                  description: "Built and maintained enterprise-level software solutions with focus on performance and security"
                },
                {
                  title: "Junior Developer",
                  period: "2019 - 2020", 
                  description: "Started professional journey learning best practices and contributing to various projects"
                }
              ].map((exp, index) => (
                <motion.div 
                  key={index}
                  className="border-l-4 border-blue-500 pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <h4 className="font-bold text-gray-800">{exp.title}</h4>
                  <p className="text-gray-600 text-sm">{exp.period}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
