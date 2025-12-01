const CyberBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Deep Space Blue background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#1d3557' }} />
    </div>
  );
};

export default CyberBackground;
