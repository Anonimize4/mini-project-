import { motion } from 'framer-motion';
import { Mail, Phone, Send, Github, PenTool, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "samuelbelay81@gmail.com",
      link: "mailto:samuelbelay81@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+251 927 669 472",
      link: "tel:+251927669472"
    },
    {
      icon: Send,
      title: "Telegram",
      value: "Join Community",
      link: "https://t.me/+2MB6c6QBCIk1N2Rk"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Anonimize4",
      link: "https://github.com/Anonimize4"
    },
    {
      icon: PenTool,
      title: "Medium",
      value: "@samuelbelay81",
      link: "https://medium.com/@samuelbelay81"
    }
  ];

  return (
    <section id="contact" className="py-20">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Get In Touch</h2>
        <div className="section-title-line mx-auto" />
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          Interested in working together? Feel free to reach out through any of these channels.
        </p>
      </motion.div>
      
      <div className="max-w-2xl mx-auto">
        <div className="card rounded-xl p-8">
          <h3 className="text-xl font-semibold gradient-text mb-8 text-center">Contact Information</h3>
          
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isExternal = info.link.startsWith('http');
              
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  target={isExternal ? '_blank' : '_self'}
                  rel={isExternal ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="icon-container flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-slate-400 text-sm truncate">{info.value}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-slate-400 text-sm mb-4">
              Open to opportunities in cybersecurity and penetration testing
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="status-indicator" />
              <span className="text-sm text-slate-300">Available for hire</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
