import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import CertificatesSection from './components/CertificatesSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import CyberBackground from './components/CyberBackground';

function App() {
  return (
      <div className="pt-16 min-h-screen bg-cosmos flex flex-col relative">
      <CyberBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <HomeSection />
          <AboutSection />
          <CertificatesSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
