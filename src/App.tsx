import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import CertificatesSection from './components/CertificatesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <HomeSection />
          <div className="divider my-8" />
          <AboutSection />
          <div className="divider my-8" />
          <CertificatesSection />
          <div className="divider my-8" />
          <ProjectsSection />
          <div className="divider my-8" />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
