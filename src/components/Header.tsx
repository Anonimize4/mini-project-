
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-emerald-500/20 w-full h-16 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-50 shadow-lg shadow-emerald-500/10">
     
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold tracking-wider font-mono"
        style={{ color: '#39FF14' }}
      >
        {"<SAMUEL BELAY/>"}
      </motion.div>
      
      <nav className="flex space-x-6">
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
            className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-mono text-sm relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
        ))}
      </nav>
    </header>
  );
};
export default Header;
