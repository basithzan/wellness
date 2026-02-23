import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import MissionSection from '@/components/sections/MissionSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <MissionSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
