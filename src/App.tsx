import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import CertificatesSection from './components/CertificatesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import ProgrammingSection from './components/ProgrammingSection';
import SkillsSection from './components/SkillsSection';
import CyberBackground from './components/CyberBackground';

function App() {
  return (
    <div className="pt-24 min-h-screen bg-cosmos flex flex-col relative">
      <CyberBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <HomeSection />
          <AboutSection />
          <ExperienceSection />
          <ProgrammingSection />
          <SkillsSection />
          <CertificatesSection /> 
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
