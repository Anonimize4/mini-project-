import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          About Me
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-lg">⭐</span>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>whoami?</h3>
          <p className="text-white leading-relaxed mb-4">
            Hello! I'm Samuel Belay, a BSc in Cyber Security graduate from Bahirdar University. 
            I'm a passionate tech person who is creative, collaborative, strong, and dedicated to achieving 
            any given task successfully.
          </p>
          <p className="text-white leading-relaxed mb-4">
            I have experience in penetration testing and coding as demonstrated in my skills section. 
            I completed an internship at INSA lasting over two months, where I gained valuable experience 
            sharing knowledge and engaging in real-world practical work. During my time there, I conducted 
            penetration testing and secure coding practices that made me more confident in my abilities.
          </p>
          <p className="text-white leading-relaxed">
            I have also worked at the innovation team at Bahirdar University. I'm an experienced person 
            with many certificates and recognitions, both online and in person, that validate my expertise 
            and commitment to the field.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 font-mono" style={{ color: '#39FF14' }}>My Experience</h3>
          <motion.div className="space-y-4">
            {[
              {
                title: "Cybersecurity Intern",
                period: "INSA - 2+ Months",
                description: "Conducted penetration testing and secure coding practices, gaining real-world practical experience"
              },
              {
                title: "Innovation Team Member", 
                period: "Bahirdar University",
                description: "Worked on innovative projects and collaborated with team members on cutting-edge solutions"
              },
              {
                title: "Cybersecurity Professional",
                period: "Present", 
                description: "Applying penetration testing skills and secure coding practices in various projects"
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
                  <h4 className="font-bold text-white">{exp.title}</h4>
                  <p className="text-gray-300 text-sm">{exp.period}</p>
                  <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Community Participation Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Community Participation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
                icon: "🌐",
                title: "Open Source Contributor",
                description: "Active contributor to various open-source projects on GitHub"
              },
              {
                icon: "🎓",
                title: "Tech Mentor",
                description: "Mentoring junior developers in local coding bootcamps"
              },
              {
                icon: "📚",
                title: "Technical Blogger",
                description: "Writing articles on web development and cybersecurity"
              },
              {
                icon: "🏆",
                title: "Hackathon Participant",
                description: "Regular participant in national hackathons and coding competitions"
              },
              {
                icon: "👥",
                title: "Tech Meetup Organizer",
                description: "Organizing monthly tech meetups and workshops"
              },
              {
                icon: "🔬",
                title: "Research Volunteer",
                description: "Contributing to cybersecurity research initiatives"
              }
          ].map((activity, index) => (
              <motion.div 
                key={index}
                className="p-4 border-l-4 border-blue-500 hover:bg-gray-800/50 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{activity.icon}</span>
                  <h4 className="text-white font-semibold">{activity.title}</h4>
                </div>
                <p className="text-gray-400 text-sm">{activity.description}</p>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
