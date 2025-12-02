const CertificatesSection = () => {
  const certificates = [
    {
      icon: "🏆",
      title: "React Developer Certification",
      issuer: "Meta",
      issuedDate: "March 2024"
    },
    {
      icon: "📜",
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      issuedDate: "January 2024"
    },
    {
      icon: "🎯",
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      issuedDate: "November 2023"
    },
    {
      icon: "🔒",
      title: "Web Security Specialist",
      issuer: "OWASP",
      issuedDate: "September 2023"
    },
    {
      icon: "🗄️",
      title: "Database Management",
      issuer: "MongoDB University",
      issuedDate: "July 2023"
    },
    {
      icon: "⚡",
      title: "Node.js Application Developer",
      issuer: "OpenJS Foundation",
      issuedDate: "May 2023"
    }
  ];

  return (
    <section id="certificates" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-mono inline-block relative" style={{ color: '#39FF14' }}>
          Certificates
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></div>
        </h2>
        <div className="flex justify-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-lg">⭐</span>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Certificate List */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Certifications</h3>
          <div className="space-y-4">
            {certificates.map((certificate, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 border-l-4 border-blue-500 hover:bg-gray-800/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">{certificate.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">{certificate.title}</h4>
                  <p className="text-white text-sm">{certificate.issuer}</p>
                  <p className="text-white text-xs">Issued: {certificate.issuedDate}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Side - Certificate Photos */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Certificate Images</h3>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((cert) => (
              <div key={cert} className="relative group">
                <div className="aspect-square rounded-lg border-2 border-blue-400 flex items-center justify-center bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300 cursor-pointer">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-blue-400 text-2xl">📄</span>
                    </div>
                    <p className="text-gray-400 text-xs">Certificate {cert}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
