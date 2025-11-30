import { motion } from 'framer-motion';

const CyberBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-emerald-950" />
      
      {/* Simple grid overlay using Tailwind CSS */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, #10b981 1px, transparent 1px),
            linear-gradient(to bottom, #10b981 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Simple corner decorations */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-emerald-500/50" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-blue-500/50" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-purple-500/50" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-emerald-500/50" />

      {/* Simple animated elements using Framer Motion */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full"
      />
      
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full"
      />
      
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        className="absolute top-1/2 left-3/4 w-2 h-2 bg-purple-400 rounded-full"
      />
      
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full"
      />
    </div>
  );
};

export default CyberBackground;
