import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Testimonials />
      <FAQ />
    </>
  );
}