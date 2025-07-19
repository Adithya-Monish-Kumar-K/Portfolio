
import { Trophy, Calendar, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Awards = () => {
  const { awards } = portfolioData;

  return (
    <section id="awards" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 glitch-text">
            Competitions & Awards
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

          <div className="space-y-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="relative pl-20"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/50"></div>

                <div className="group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-gray-800/80 border border-gray-700 rounded-lg p-6 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-yellow-400/20 rounded-lg">
                        <Trophy className="text-yellow-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {award.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-3 text-sm">
                          <div className="flex items-center gap-2 text-cyan-400">
                            <Calendar size={16} />
                            {award.date}
                          </div>
                          {award.organization && (
                            <div className="flex items-center gap-2 text-gray-300">
                              <Building size={16} />
                              {award.organization}
                            </div>
                          )}
                        </div>
                        
                        {award.description && (
                          <p className="text-gray-300 leading-relaxed">
                            {award.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;