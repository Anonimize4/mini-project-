
const Header: React.FC = () => {
  return (
    <header className="bg-blue-950 w-full h-16 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
     
      <div className="text-white text-xl font-bold">
      SAMUEL BELAY
      </div>
      <nav className="flex space-x-4">
        <a href="#home" className="text-white hover:text-blue-300">Home</a>
        <a href="#about" className="text-white hover:text-blue-300">About</a>
        <a href="#skills" className="text-white hover:text-blue-300">Skills</a>
        <a href="#projects" className="text-white hover:text-blue-300">Projects</a>
        <a href="#certificates" className="text-white hover:text-blue-300">Certificates</a>
        <a href="#contact" className="text-white hover:text-blue-300">Contact</a>
      </nav>
    </header>
  );
};
export default Header;
