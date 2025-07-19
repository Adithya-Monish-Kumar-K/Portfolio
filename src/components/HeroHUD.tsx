
import { MapPin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const HeroHUD = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center p-4 pt-16 lg:pt-24 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid grid-cols-1 gap-8 items-center justify-items-center">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <div className="relative bg-gray-900 border-2 border-cyan-400 rounded-lg p-4 backdrop-blur-sm">
                <img
                  src={personal.photoUrl}
                  alt={personal.name}
                  className="w-80 h-100 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-green-400 w-4 h-4 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-2 glitch-text">
                {personal.name}
              </h1>
              <p className="text-2xl lg:text-3xl text-cyan-400 font-mono mb-4">
                {personal.title}
              </p>
              <p className="text-gray-300 text-lg max-w-4xl">
                {personal.bio}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="bg-gray-900/80 border border-cyan-400/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personal.stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded border border-gray-700 hover:border-cyan-400/50 transition-colors">
                    <span className="text-gray-400 font-mono text-sm">{stat.label}</span>
                    <span className="text-cyan-400 font-mono text-sm font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} className="text-cyan-400" />
                {personal.location}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={16} className="text-cyan-400" />
                {personal.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHUD;