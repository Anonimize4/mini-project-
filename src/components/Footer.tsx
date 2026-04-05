import { motion } from 'framer-motion';
import { Github, Mail, Send, PenTool, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "Telegram",
      icon: Send,
      href: "https://t.me/+2MB6c6QBCIk1N2Rk"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:samuelbelay81@gmail.com"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Anonimize4"
    },
    {
      name: "Medium",
      icon: PenTool,
      href: "https://medium.com/@samuelbelay81"
    }
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-900/95 backdrop-blur-lg mt-auto">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold gradient-text mb-4">Samuel Belay</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Cybersecurity professional dedicated to building secure digital solutions. 
              Passionate about ethical hacking and helping others learn security fundamentals.
            </p>
            <div className="flex items-center gap-2">
              <span className="status-indicator" />
              <span className="text-sm text-slate-400">Available for opportunities</span>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-center"
          >
            <h4 className="text-slate-200 font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-wrap md:justify-center gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h4 className="text-slate-200 font-semibold mb-4">Connect</h4>
            <div className="flex md:justify-end gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-slate-500 text-sm mt-4">Let&apos;s collaborate!</p>
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="divider mb-8" />
        
        {/* Copyright */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Samuel Belay. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> in Ethiopia
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
