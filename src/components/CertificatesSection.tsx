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
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Certificates</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((certificate, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{certificate.icon}</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{certificate.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{certificate.issuer}</p>
              <p className="text-gray-500 text-xs">Issued: {certificate.issuedDate}</p>
              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
