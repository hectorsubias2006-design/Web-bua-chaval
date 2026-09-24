import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import GrillBanner from '@/components/GrillBanner';
import FeaturedDishes from '@/components/FeaturedDishes';
import MenuSection from '@/components/MenuSection';
import SpaceFeatures from '@/components/SpaceFeatures';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <Hero />
          <About />
          <GrillBanner />
          <FeaturedDishes />
          <MenuSection />
          <SpaceFeatures />
          <Footer />
        </div>
      </main>
    </>
  );
}
