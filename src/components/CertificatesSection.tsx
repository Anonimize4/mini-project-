import { motion } from 'framer-motion';
import { Award, Cloud, Shield, Code, Target, CheckCircle2 } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      icon: Cloud,
      title: "Certified Cloud Security Professional (CCSP)",
      issuer: "(ISC)²",
      issuedDate: "2025",
      image: "/certificates/ccsp.jpg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "ISC2 Certified in Cybersecurity (CC)",
      issuer: "(ISC)²",
      issuedDate: "2025",
      image: "/certificates/cc.png",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Code,
      title: "Advent of Cyber 2025",
      issuer: "TryHackMe",
      issuedDate: "2025",
      image: "/certificates/Aoc.png",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Cybershield Showdown CTF",
      issuer: "Yekolo Temari",
      issuedDate: "2025",
      image: "/certificates/yekolo.png",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Local Coding Hackathon",
      issuer: "Community",
      issuedDate: "2025",
      image: "/hackatons/hackathon.jpg",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="certificates" className="py-20">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Certifications</h2>
        <div className="section-title-line mx-auto" />
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Professional certifications and achievements in cybersecurity
        </p>
      </motion.div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Certificate List */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-200 mb-6">Credentials</h3>
          
          {certificates.map((certificate, index) => {
            const Icon = certificate.icon;
            
            return (
              <motion.div 
                key={index} 
                className="card rounded-xl p-5 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${certificate.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-100 font-semibold text-lg truncate group-hover:text-cyan-400 transition-colors">
                      {certificate.title}
                    </h4>
                    <p className="text-cyan-400 text-sm font-medium">{certificate.issuer}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-slate-500 text-sm">Issued: {certificate.issuedDate}</span>
                      <div className="flex items-center gap-1 text-emerald-400 text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Certificate Gallery */}
        <div>
          <h3 className="text-xl font-semibold text-slate-200 mb-6">Certificate Gallery</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {certificates.slice(0, 4).map((cert, index) => {
              const Icon = cert.icon;
              
              return (
                <motion.div
                  key={index}
                  className="relative group rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[4/3] bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-contain bg-slate-900 transition-transform duration-300 group-hover:scale-105" 
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-3`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-slate-400 text-sm text-center">{cert.title.split(' ')[0]}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                    <p className="text-white text-sm font-medium text-center">{cert.title}</p>
                    <p className="text-cyan-400 text-xs">{cert.issuer}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
