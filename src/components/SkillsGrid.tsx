
interface SkillsGridProps {
  title: string;
  skills: string[];
  type: 'technical' | 'general';
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ title, skills, type }) => {
  const getSkillColor = (skill: string, skillType: 'technical' | 'general') => {
    if (skillType === 'technical') {
      const techColors = [
        'from-blue-400 to-cyan-400',
        'from-green-400 to-emerald-400',
        'from-purple-400 to-pink-400',
        'from-yellow-400 to-orange-400',
        'from-red-400 to-rose-400',
        'from-indigo-400 to-blue-400'
      ];
      return techColors[skill.length % techColors.length];
    } else {
      return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id={type === 'technical' ? 'technical-skills' : 'general-skills'} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 glitch-text">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${getSkillColor(skill, type)} rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300`}></div>
              <div className="relative bg-gray-800/80 border border-gray-700 rounded-lg p-4 text-center backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <span className="text-white font-mono text-sm font-medium">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;