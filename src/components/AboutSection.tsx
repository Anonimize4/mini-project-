const AboutSection = () => {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">whoami?</h3>
          <div className="bg-blue-800 rounded-lg p-6 shadow-lg">
            <p className="text-white leading-relaxed mb-4">
              I am a passionate Full Stack Developer with expertise in modern web technologies. 
              My journey in software development has equipped me with strong problem-solving skills 
              and a deep understanding of creating efficient, scalable applications.
            </p>
            <p className="text-white leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and continuously expanding my skill set to stay current with industry trends.
            </p>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">My Experience</h3>
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-800">Full Stack Developer</h4>
                <p className="text-gray-600 text-sm">2022 - Present</p>
                <p className="text-gray-700">Developing scalable web applications using React, Node.js, and modern cloud technologies</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-800">Software Engineer</h4>
                <p className="text-gray-600 text-sm">2020 - 2022</p>
                <p className="text-gray-700">Built and maintained enterprise-level software solutions with focus on performance and security</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-800">Junior Developer</h4>
                <p className="text-gray-600 text-sm">2019 - 2020</p>
                <p className="text-gray-700">Started professional journey learning best practices and contributing to various projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
