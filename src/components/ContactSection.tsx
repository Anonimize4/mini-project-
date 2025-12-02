const ContactSection = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "samuel.belay@example.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: "📍",
      title: "Location",
      value: "San Francisco, CA"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/samuelbelay"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/samuelbelay"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center font-mono" style={{ color: '#39FF14' }}>Get In Touch</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Contact Information</h3>
          <div className="rounded-lg p-6 shadow-lg" style={{ backgroundColor: '#38aecc' }}>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">{info.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-blue-200">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-6 font-mono" style={{ color: '#39FF14' }}>Send Message</h3>
          <div className="rounded-lg p-6 shadow-lg border-2 border-blue-400" style={{ backgroundColor: '#38aecc' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Message Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
