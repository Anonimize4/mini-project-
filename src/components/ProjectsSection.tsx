import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SIEM Lab with Wazuh",
      description: "Designed and deployed a centralized SIEM lab using Wazuh to collect and analyze logs from Linux endpoints and visualize security alerts through custom dashboards.",
      image: "/myprojects/wazuh.png"
    },
    {
      title: "Network Traffic Analysis",
      description: "Performed network traffic analysis using Wireshark to identify malicious communication patterns and potential data exfiltration attempts.",
      image: "/myprojects/wireshark.png"
    },
    {
      title: "Network Reconnaissance & Vulnerability Scanning",
      description: "Performed network reconnaissance and vulnerability scanning using Nmap.",
      image: "/myprojects/nmap.png"
    },
    {
      title: "OWASP Top 10 Testing",
      description: "Tested OWASP Top 10 vulnerabilities (XSS, SQL Injection) in controlled lab environments using Burp Suite.",
      image: "/myprojects/burp.png"
    },
    {
      title: "Phishing Simulation",
      description: "Conducted phishing simulation exercises using Setoolkit in controlled environments.",
      image: "/myprojects/setoolkit.png"
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

