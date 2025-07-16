import React from 'react';
import { Download, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const ResumeDownload = () => {
  const resumeLink = portfolioData.links.find(link => link.type === 'resume');

  return (
    <section id="resume" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 glitch-text">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="group relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <a
            href={resumeLink?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gray-800 border-2 border-cyan-400 rounded-lg px-8 py-6 backdrop-blur-sm hover:border-green-400 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-4 text-white font-mono text-lg font-bold"
          >
            <div className="p-3 bg-cyan-400/20 rounded-lg">
              <FileText className="text-cyan-400" size={32} />
            </div>
            <div className="text-left">
              <div className="text-xl">Download Resume</div>
              <div className="text-sm text-gray-400">PDF Format</div>
            </div>
            <Download className="text-cyan-400" size={24} />
          </a>
        </div>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Get a comprehensive overview of my experience, skills, and achievements in a printable format.
        </p>
      </div>
    </section>
  );
};

export default ResumeDownload;