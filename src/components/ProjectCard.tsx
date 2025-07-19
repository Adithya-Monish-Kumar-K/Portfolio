
import { Github, ExternalLink, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const ProjectCard = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 glitch-text">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`absolute inset-0 ${project.featured ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-gray-600 to-gray-400'} rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300`}></div>
              <div className={`relative bg-gray-800/80 border ${project.featured ? 'border-cyan-400/50' : 'border-gray-700'} rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 h-full flex flex-col`}>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded text-xs font-mono">
                      <Star size={12} />
                      Featured
                    </div>
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 text-cyan-400 rounded text-xs font-mono border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors font-mono text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;