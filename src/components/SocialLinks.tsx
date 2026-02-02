
import { Github, Linkedin, Globe, Mail, Twitter, FileText, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const SocialLinks = () => {
  const { links } = portfolioData;

  const getIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <Github size={24} />;
      case 'linkedin':
        return <Linkedin size={24} />;
      case 'blog':
        return <Globe size={24} />;
      case 'email':
        return <Mail size={24} />;
      case 'twitter':
        return <Twitter size={24} />;
      case 'resume':
        return <FileText size={24} />;
      case 'leetcode':
        return <Code size={24} />;
      default:
        return <Globe size={24} />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'github':
        return 'from-gray-400 to-gray-600';
      case 'linkedin':
        return 'from-blue-600 to-blue-400';
      case 'blog':
        return 'from-green-400 to-emerald-400';
      case 'email':
        return 'from-red-400 to-pink-400';
      case 'twitter':
        return 'from-blue-400 to-cyan-400';
      case 'resume':
        return 'from-purple-400 to-violet-400';
      case 'leetcode':
        return 'from-orange-400 to-yellow-500';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="links" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 glitch-text">
            Connect With Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {links.map((link, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${getColor(link.type)} rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300`}></div>
              <a
                href={link.url}
                target={link.type === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="relative bg-gray-800/80 border border-gray-700 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 flex flex-col items-center gap-3 h-full"
              >
                <div className="text-cyan-400">
                  {getIcon(link.type)}
                </div>
                <span className="text-white font-mono text-sm font-medium text-center">
                  {link.label}
                </span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;