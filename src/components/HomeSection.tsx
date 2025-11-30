const HomeSection = () => {
  return (
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
  );
};

export default HomeSection;
