import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import FadeIn from "@/components/Layout/FadeIn";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <main className="pt-[72px]">
      <Navbar />
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <Stats />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
      <FadeIn>
        <Footer />
      </FadeIn>
      <ScrollToTop />
    </main>
  );
}