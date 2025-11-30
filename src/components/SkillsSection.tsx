const SkillsSection = () => {
  const skills = [
    { icon: "⚛️", name: "React", level: "Advanced", bgColor: "bg-blue-500" },
    { icon: "🟢", name: "Node.js", level: "Advanced", bgColor: "bg-green-500" },
    { icon: "📝", name: "TypeScript", level: "Advanced", bgColor: "bg-yellow-500" },
    { icon: "🎨", name: "Tailwind CSS", level: "Advanced", bgColor: "bg-purple-500" },
    { icon: "🗄️", name: "MongoDB", level: "Intermediate", bgColor: "bg-red-500" },
    { icon: "🔧", name: "Git & GitHub", level: "Advanced", bgColor: "bg-indigo-500" },
    { icon: "🚀", name: "Docker", level: "Intermediate", bgColor: "bg-orange-500" },
    { icon: "🔍", name: "REST APIs", level: "Advanced", bgColor: "bg-teal-500" },
    { icon: "⚡", name: "JavaScript", level: "Expert", bgColor: "bg-pink-500" },
    { icon: "☁️", name: "AWS", level: "Intermediate", bgColor: "bg-gray-600" },
    { icon: "🧪", name: "Jest & Testing", level: "Intermediate", bgColor: "bg-cyan-500" },
    { icon: "🔄", name: "Redux", level: "Intermediate", bgColor: "bg-emerald-500" }
  ];

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">My Skills</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
            <div className={`w-12 h-12 ${skill.bgColor} rounded-full mx-auto mb-3 flex items-center justify-center`}>
              <span className="text-white text-xl">{skill.icon}</span>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">{skill.name}</h3>
            <p className="text-gray-600 text-xs">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
