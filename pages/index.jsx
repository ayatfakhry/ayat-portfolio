import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayat Fakhry | AI & Satellite Navigation Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of Ayat Fakhry – AI, Machine Learning, GNSS & Space Technology Engineer based in Egypt. Open to international research and engineering opportunities." />
        <meta property="og:title" content="Ayat Fakhry | AI & Space Engineer" />
        <meta property="og:description" content="Engineering intelligent systems at the intersection of AI, Satellite Navigation, and Space Technology." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>◈</text></svg>" />
      </Head>

      <main className="bg-void min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
