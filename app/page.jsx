import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Awards from '../components/Awards';
import OtherProjects from '../components/OtherProjects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <OtherProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
