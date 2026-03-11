import Hero from '@/components/server/Hero';
import ProofBar from '@/components/server/ProofBar';
import AudienceRouting from '@/components/server/AudienceRouting';
import BenefitsGrid from '@/components/server/BenefitsGrid';
import FeatureCards from '@/components/server/FeatureCards';
import Footer from '@/components/server/Footer';

// Client interaction layers
import NavbarMorph from '@/components/client/NavbarMorph';
import HeroAnimation from '@/components/client/HeroAnimation';
import FeatureCardsReveal from '@/components/client/FeatureCardsReveal';
import FAQCarousel from '@/components/client/FAQCarousel';
import { Gallery4 } from '@/components/blocks/gallery4';

export default function Home() {
  return (
    <>
      {/* 
        Client-side logic injection 
        These components run GSAP/Swiper but return null or wrap static markup 
      */}
      <NavbarMorph />
      <HeroAnimation />
      <FeatureCardsReveal />

      <main>
        <Hero />
        <ProofBar />
        <AudienceRouting />
        <BenefitsGrid />
        <FeatureCards />
        <Gallery4 />
        <FAQCarousel />
      </main>

      <Footer />
    </>
  );
}
