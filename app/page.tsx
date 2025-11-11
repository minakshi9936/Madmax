import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import Gallery from '@/components/Gallery';
import Clients from '@/components/Clients';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <Gallery />
      <Clients />
      <CTASection />
    </>
  );
}
