import { motion } from 'framer-motion';

const AboutSection = () => {
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
            I have also worked at the innovation team at Bahirdar University. I'm an experienced person 
            with many certificates and recognitions, both online and in person, that validate my expertise 
            and commitment to the field.
          </p>
        </motion.div>
      </div>

      {/* This section was removed: Community Participation */}
    </section>
  );
};

export default AboutSection;
