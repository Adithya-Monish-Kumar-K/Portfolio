
import { Heart, Star, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Interests = () => {
  const { personal } = portfolioData;

  const getIcon = (index: number) => {
    const icons = [Heart, Star, Zap];
    const IconComponent = icons[index % icons.length];
    return <IconComponent size={20} />;
  };

  return (
    <section id="interests" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 glitch-text">
            Areas of Interest
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personal.interests.map((interest, index) => (
            <div
              key={interest}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gray-800/80 border border-gray-700 rounded-lg p-4 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3">
                  <div className="text-purple-400">
                    {getIcon(index)}
                  </div>
                  <span className="text-white font-mono font-medium">
                    {interest}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;