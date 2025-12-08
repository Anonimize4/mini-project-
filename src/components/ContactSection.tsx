import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "samuel.belay@example.com",
      link: "mailto:samuel.belay@example.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+251 9XX XXX XXX",
      link: "tel:+2519XXXXXXXX"
    },
    {
      icon: "📱",
      title: "Telegram",
      value: "Telegram",
      link: "https://t.me/+2MB6c6QBCIk1N2Rk"
    },
    {
      icon: "💬",
      title: "Discord",
      value: "Discord",
      link: "https://discord.com/channels/1440029472496550040/1440029473536872513"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "Anonimize4",
      link: "https://github.com/Anonimize4"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          Get In Touch
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-lg">⭐</span>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Information */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6 font-mono gradient-text">Contact Information</h3>
          <div className="cyber-border rounded-lg p-6 glow-effect bg-gray-800/50">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 glow-effect"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white text-xl">{info.icon}</span>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg">{info.title}</h4>
                    <p className="text-cyan-400 text-sm font-mono">{info.value}</p>
                  </div>
                  <motion.div
                    className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    →
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6 font-mono gradient-text">Send Message</h3>
          <div className="cyber-border rounded-lg p-6 glow-effect bg-gray-800/50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-white font-medium mb-2 font-mono">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 font-mono transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-white font-medium mb-2 font-mono">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 font-mono transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-white font-medium mb-2 font-mono">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 font-mono transition-all duration-300"
                  placeholder="Message Subject"
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-white font-medium mb-2 font-mono">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 font-mono resize-none transition-all duration-300"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg font-mono transition-all duration-300 glow-effect"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                🚀 Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
