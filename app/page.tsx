import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f0f0f]">

      {/* BOTTOM GRADIENT */}
      <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-fuchsia-700/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact/>
        <Footer/>
      </div>

    </main>
  );
}