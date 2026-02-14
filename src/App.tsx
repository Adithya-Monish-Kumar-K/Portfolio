
import Navigation from './components/Navigation';
import HeroHUD from './components/HeroHUD';
import SkillsGrid from './components/SkillsGrid';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import Timeline from './components/Timeline';
import ProjectCard from './components/ProjectCard';
import ResumeDownload from './components/ResumeDownload';
import SocialLinks from './components/SocialLinks';
import { portfolioData } from './data/portfolio';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main>
        <HeroHUD />

        <SkillsGrid
          title="Technical Skills"
          skills={portfolioData.skills.technical}
          type="technical"
        />

        <SkillsGrid
          title="General Skills"
          skills={portfolioData.skills.general}
          type="general"
        />

        <Certifications />

        <Interests />

        <Timeline />

        <ProjectCard />

        <ResumeDownload />

        <SocialLinks />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-400/20 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-mono">
            © 2026 {portfolioData.personal.name}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;