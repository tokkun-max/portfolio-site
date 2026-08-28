import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickIndex from "@/components/QuickIndex";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Activities from "@/components/Activities";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickIndex />
        <About />
        <Skills />
        <Works />
        <Activities />
      </main>
      <Footer />
    </>
  );
}
