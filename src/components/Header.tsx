
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: '🏠' },
    { href: '#about', label: 'About', icon: '👤' },
    { href: '#skills', label: 'Skills', icon: '💻' },
    { href: '#projects', label: 'Projects', icon: '🚀' },
    { href: '#certificates', label: 'Certificates', icon: '🏆' },
    { href: '#contact', label: 'Contact', icon: '📧' },
  ];

  return (
    <header className="backdrop-blur-lg border-b border-emerald-500/30 w-full h-16 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-50 shadow-xl shadow-emerald-500/20 bg-gray-900/90">
     
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold tracking-wider font-mono gradient-text cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        {"SAMUEL BELAY"}
      </motion.div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              color: '#10b981',
              textShadow: '0 0 10px rgba(16, 185, 129, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-emerald-400 transition-all duration-300 font-mono text-sm relative group"
            style={{ color: '#39FF14' }}
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden text-2xl cyber-border p-2 rounded-lg glow-effect"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ color: '#39FF14' }}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </motion.button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-emerald-500/30 md:hidden"
        >
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  x: 10
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 text-white font-mono py-2 px-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};
export default Header;
