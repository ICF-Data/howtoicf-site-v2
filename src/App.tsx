import Nav from './components/Nav';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Guides from './components/Guides';
import FeaturedGuide from './components/FeaturedGuide';
import LeadMagnet from './components/LeadMagnet';
import About from './components/About';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#07090d] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <ValueProps />
        <Guides />
        <FeaturedGuide />
        <LeadMagnet />
        <About />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}
