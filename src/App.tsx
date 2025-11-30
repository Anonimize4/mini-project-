

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="pt-16 min-h-screen bg-blue-900 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="home" className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-6">Welcome to Samuel's Portfolio</h1>
              <p className="text-white text-lg mb-8">Full Stack Developer | Software Engineer | Problem Solver</p>
              <a 
                href="/Samuel_Belay_CV.pdf" 
                download="Samuel_Belay_CV.pdf"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/src/assets/profile-photo.jpg" 
                alt="Samuel Belay" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-400 shadow-xl"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUYyOTNCIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0Y5RkFGQiIvPgo8cGF0aCBkPSJNNDAgMTYwQzQwIDE0MCA2MCA5MCAxMDAgOTBTMTYwIDE0MCAxNjAgMTYwVjIwMEg0MFYxNjBaIiBmaWxsPSIjRjlGQUZCIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRjlGQUZCIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwiPlNBTUVFTCwgU0FNVUVMPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
            </div>
          </div>
        </section>

        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-blue-300 mb-4">whoami?</h3>
              <div className="bg-blue-800 rounded-lg p-6 shadow-lg">
                <p className="text-white leading-relaxed mb-4">
                  I am a passionate Full Stack Developer with expertise in modern web technologies. 
                  My journey in software development has equipped me with strong problem-solving skills 
                  and a deep understanding of creating efficient, scalable applications.
                </p>
                <p className="text-white leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
                  projects, and continuously expanding my skill set to stay current with industry trends.
                </p>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-blue-300 mb-4">My Experience</h3>
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-800">Full Stack Developer</h4>
                    <p className="text-gray-600 text-sm">2022 - Present</p>
                    <p className="text-gray-700">Developing scalable web applications using React, Node.js, and modern cloud technologies</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-800">Software Engineer</h4>
                    <p className="text-gray-600 text-sm">2020 - 2022</p>
                    <p className="text-gray-700">Built and maintained enterprise-level software solutions with focus on performance and security</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-gray-800">Junior Developer</h4>
                    <p className="text-gray-600 text-sm">2019 - 2020</p>
                    <p className="text-gray-700">Started professional journey learning best practices and contributing to various projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certificates" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Certificates</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🏆</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">React Developer Certification</h3>
                <p className="text-gray-600 text-sm mb-2">Meta</p>
                <p className="text-gray-500 text-xs">Issued: March 2024</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Verified</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">📜</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Full Stack Web Development</h3>
                <p className="text-gray-600 text-sm mb-2">freeCodeCamp</p>
                <p className="text-gray-500 text-xs">Issued: January 2024</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Verified</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🎯</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">AWS Cloud Practitioner</h3>
                <p className="text-gray-600 text-sm mb-2">Amazon Web Services</p>
                <p className="text-gray-500 text-xs">Issued: November 2023</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Verified</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🔒</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Web Security Specialist</h3>
                <p className="text-gray-600 text-sm mb-2">OWASP</p>
                <p className="text-gray-500 text-xs">Issued: September 2023</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Verified</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🗄️</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Database Management</h3>
                <p className="text-gray-600 text-sm mb-2">MongoDB University</p>
                <p className="text-gray-500 text-xs">Issued: July 2023</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Verified</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Node.js Application Developer</h3>
                <p className="text-gray-600 text-sm mb-2">OpenJS Foundation</p>
                <p className="text-gray-500 text-xs">Issued: May 2023</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">🚀</span>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Project One</h3>
              <p className="text-gray-600 text-sm mb-4">A innovative web application built with modern technologies to solve real-world problems.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">MongoDB</span>
              </div>
              <div className="flex gap-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">View Demo</button>
                <button className="text-gray-600 hover:text-gray-800 text-sm font-semibold">GitHub</button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">🛍️</span>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">E-Commerce Platform</h3>
              <p className="text-gray-600 text-sm mb-4">Full-featured online shopping platform with payment integration and inventory management.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Stripe</span>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Firebase</span>
              </div>
              <div className="flex gap-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">View Demo</button>
                <button className="text-gray-600 hover:text-gray-800 text-sm font-semibold">GitHub</button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">📱</span>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Mobile App Design</h3>
              <p className="text-gray-600 text-sm mb-4">Cross-platform mobile application with intuitive UI and seamless user experience.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React Native</span>
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Redux</span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">API</span>
              </div>
              <div className="flex gap-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">View Demo</button>
                <button className="text-gray-600 hover:text-gray-800 text-sm font-semibold">GitHub</button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">📊</span>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Data Analytics Dashboard</h3>
              <p className="text-gray-600 text-sm mb-4">Interactive dashboard for data visualization and business intelligence with real-time updates.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Vue.js</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">D3.js</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Python</span>
              </div>
              <div className="flex gap-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">View Demo</button>
                <button className="text-gray-600 hover:text-gray-800 text-sm font-semibold">GitHub</button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">🤖</span>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">AI Chat Assistant</h3>
              <p className="text-gray-600 text-sm mb-4">Intelligent chatbot powered by machine learning for customer support and automation.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">TensorFlow</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">FastAPI</span>
              </div>
              <div className="flex gap-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">View Demo</button>
                <button className="text-gray-600 hover:text-gray-800 text-sm font-semibold">GitHub</button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">🎮</span>
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Gaming Platform</h3>
              <p className="text-gray-600 text-sm mb-4">Multiplayer gaming platform with real-time gameplay and social features.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">WebSocket</span>
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Canvas</span>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Node.js</span>
              </div>
              <div className="flex gap-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">View Demo</button>
                <button className="text-gray-600 hover:text-gray-800 text-sm font-semibold">GitHub</button>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">My Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">⚛️</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">React</h3>
              <p className="text-gray-600 text-xs">Advanced</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">🟢</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Node.js</h3>
              <p className="text-gray-600 text-xs">Advanced</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">📝</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">TypeScript</h3>
              <p className="text-gray-600 text-xs">Advanced</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Tailwind CSS</h3>
              <p className="text-gray-600 text-xs">Advanced</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">🗄️</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">MongoDB</h3>
              <p className="text-gray-600 text-xs">Intermediate</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-indigo-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">🔧</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Git & GitHub</h3>
              <p className="text-gray-600 text-xs">Advanced</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Docker</h3>
              <p className="text-gray-600 text-xs">Intermediate</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">🔍</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">REST APIs</h3>
              <p className="text-gray-600 text-xs">Advanced</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">JavaScript</h3>
              <p className="text-gray-600 text-xs">Expert</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">☁️</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">AWS</h3>
              <p className="text-gray-600 text-xs">Intermediate</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">🧪</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Jest & Testing</h3>
              <p className="text-gray-600 text-xs">Intermediate</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-xl">🔄</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Redux</h3>
              <p className="text-gray-600 text-xs">Intermediate</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-blue-300 mb-6">Contact Information</h3>
              <div className="bg-blue-800 rounded-lg p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-blue-200">samuel.belay@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <p className="text-blue-200">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Location</h4>
                      <p className="text-blue-200">San Francisco, CA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">💼</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">LinkedIn</h4>
                      <p className="text-blue-200">linkedin.com/in/samuelbelay</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🐙</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">GitHub</h4>
                      <p className="text-blue-200">github.com/samuelbelay</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-blue-300 mb-6">Send Message</h3>
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400">
                <form className="space-y-4">
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
                      rows="5" 
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
