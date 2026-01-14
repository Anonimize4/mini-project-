import { motion } from 'framer-motion';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "samuelbelay81@gmail.com",
      link: "mailto:samuelbelay81@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+251 927 669 472",
      link: "tel:+251927669472"
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

  return (
    <section id="contact" className="mb-12">
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          Get In Touch
          <i className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></i>
        </h2>
        <main className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <i key={star} className="text-yellow-400 text-lg">⭐</i>
          ))}
        </main>
      </header>
      
      <main className="max-w-4xl mx-auto">
        <section className="cyber-border rounded-lg p-6 glow-effect bg-gray-800/50">
          <h3 className="text-2xl font-semibold mb-6 font-mono gradient-text">Contact Information</h3>
          <ul className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.li key={index}>
                <motion.a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.i 
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 glow-effect text-white text-xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {info.icon}
                  </motion.i>
                  <section className="flex-1">
                    <h4 className="text-white font-semibold text-lg">{info.title}</h4>
                    <p className="text-cyan-400 text-sm font-mono">{info.value}</p>
                  </section>
                  <motion.i
                    className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    →
                  </motion.i>
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </section>
      </main>
    </section>
  );
};

export default ContactSection;
