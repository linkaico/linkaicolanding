import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Solution from '../components/Solution';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <Process />
      <FAQ />
      <Footer />
    </main>
  );
}
