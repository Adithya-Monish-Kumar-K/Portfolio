import React from 'react';
import { portfolioData } from '../data/portfolio';

const ProgrammingLanguages = () => {
  const { skills } = portfolioData;

  return (
    <section id="languages" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 glitch-text">
            Programming Languages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          {skills.languages.map((language, index) => (
            <div
              key={language.name}
              className="bg-gray-800/80 border border-gray-700 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-mono text-white font-bold mb-2 sm:mb-0">
                  {language.name}
                </h3>
                <span className="text-cyan-400 font-mono text-lg font-bold">
                  {language.level}%
                </span>
              </div>
              
              <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${language.level}%`,
                    animationDelay: `${index * 200 + 500}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammingLanguages;