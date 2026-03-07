import { motion } from 'framer-motion';

const CertificatesSection = () => {
  const certificates = [
    {
      icon: "☁️",
      title: "Certified Cloud Security Professional (CCSP)",
      issuer: "(ISC)²",
      issuedDate: "2025",
      image: "/certificates/ccsp.jpg"
    },
    {
      icon: "🔐",
      title: "Certified Cybersecurity (CC)",
      issuer: "(ISC)²",
      issuedDate: "2025",
      image: "/certificates/cc.png"
    },
    {
      icon: "📱",
      title: "Android and Programming Certificate",
      issuer: "Five Million Coders",
      issuedDate: "2025",
      image: "/certificates/programing.png",
      pdf: "/certificates/android.pdf"
    },
    {
      icon: "🛡️",
      title: "Cyber Shield Showdown CTF 2025 Hacking Certificate",
      issuer: "ALX Ethiopia",
      issuedDate: "2025",
      image: "/certificates/yekolo.png",
      pdf: "/certificates/100-137-10.pdf"
    },
    {
      icon: "💻",
      title: "Coding Hackathon Certificate",
      issuer: "BiTech with PAN",
      issuedDate: "2025",
      pdf: "/certificates/programming.pdf"
    }
  ];

  return (
    <section id="certificates" className="mb-12">
      <header className="text-center mb-8">
        <h2 className="text-4xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          Certificates
          <i className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></i>
        </h2>
        <main className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <i key={star} className="text-yellow-400 text-xl">⭐</i>
          ))}
        </main>
      </header>
      
      <main className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Certificate List */}
        <section className="flex-1">
          <h3 className="text-3xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Certifications</h3>
          <ul className="space-y-4">
            {certificates.map((certificate, index) => (
              <motion.li 
                key={index} 
                className="rounded-lg p-4 hover:bg-gray-800/30 transition-all duration-300"
                whileHover={{ x: 10, scale: 1.02 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <article className="flex items-center space-x-4">
                  <motion.i 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-3xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {certificate.icon}
                  </motion.i>
                  <section className="flex-1">
                    <h4 className="text-white font-semibold text-xl mb-1">{certificate.title}</h4>
                    <p className="text-cyan-400 text-base font-mono mb-1">{certificate.issuer}</p>
                    <footer className="flex items-center space-x-2">
                      <time className="text-gray-400 text-sm font-mono">Issued: {certificate.issuedDate}</time>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <strong className="text-green-400 text-sm font-mono">Active</strong>
                    </footer>
                  </section>
                  <aside className="flex-shrink-0">
                    <motion.em 
                      className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm px-4 py-2 rounded-full font-mono"
                      whileHover={{ scale: 1.1 }}
                    >
                      ✓ Verified
                    </motion.em>
                  </aside>
                </article>
              </motion.li>
            ))}
          </ul>
        </section>
        
        {/* Right Side - Certificate Photos */}
        <section className="flex-1">
          <h3 className="text-3xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Certificate Images</h3>
          <ul className="grid grid-cols-2 gap-4">
            {certificates.slice(0, 4).map((cert, index) => (
              <motion.li
                key={index}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <figure className="aspect-[3/2] rounded-lg flex items-center justify-center bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer overflow-hidden border border-emerald-500/30">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain rounded-lg" />
                  ) : (
                    <section className="text-center relative z-10">
                      <motion.i
                        className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-3xl"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {cert.icon}
                      </motion.i>
                      <p className="text-gray-300 text-sm font-mono font-semibold">{cert.title.split(' ')[0]}</p>
                    </section>
                  )}

                  {/* Background pattern */}
                  <i className="absolute inset-0 opacity-10">
                    <i className="absolute inset-0" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(57, 255, 20, 0.3) 10px, rgba(57, 255, 20, 0.3) 20px)',
                    }} />
                  </i>
                </figure>
                <motion.section
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white text-sm px-4 py-2 rounded-lg font-mono">
                    👁️ View Certificate
                  </button>
                </motion.section>
              </motion.li>
            ))}
          </ul>
        </section>
      </main>
    </section>
  );
};

export default CertificatesSection;
