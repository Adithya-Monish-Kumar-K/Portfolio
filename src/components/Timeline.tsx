
import { Calendar, MapPin, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Timeline = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 glitch-text">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative pl-20"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black shadow-lg shadow-cyan-400/50"></div>

                <div className="group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-gray-800/80 border border-gray-700 rounded-lg p-6 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2 text-cyan-400 font-mono text-lg font-bold mb-2">
                          <Building size={18} />
                          {job.company}
                        </div>
                      </div>
                      <div className="text-sm space-y-1">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Calendar size={16} />
                          {job.from} - {job.to}
                        </div>
                        {job.location && (
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin size={16} />
                            {job.location}
                          </div>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
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

export default Timeline;