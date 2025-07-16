import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 glitch-text">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gray-800/80 border border-gray-700 rounded-lg p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-green-400/20 rounded-lg">
                    <Award className="text-green-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 font-mono text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-cyan-400 font-mono text-sm">
                      {cert.date}
                    </p>
                  </div>
                </div>
                
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm"
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;