import CanvasBackground from '@/components/CanvasBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechStackSection from '@/components/TechStackSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import JourneySection from '@/components/JourneySection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

export default function PortfolioPage() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: 'transparent',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* 180-Frame Animation Canvas */}
      <CanvasBackground />

      {/* Sheer Floating Glass Navigation Bar */}
      <Navbar />

      {/* Main Content Stream with Sheer Glass Panes */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        <HeroSection />
        <TechStackSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <ArchitectureSection />
        <JourneySection />
        <ServicesSection />
        <ContactSection />
      </div>
    </div>
  );
}
