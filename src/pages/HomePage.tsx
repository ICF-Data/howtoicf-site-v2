import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import WorkWithEric from '../components/WorkWithEric';
import Specs from '../components/Specs';
import LeadMagnet from '../components/LeadMagnet';
import About from '../components/About';
import FooterCTA from '../components/FooterCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="bg-[#07090d] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <ValueProps />
        <WorkWithEric />
        <Specs />
        <LeadMagnet />
        <About />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}
