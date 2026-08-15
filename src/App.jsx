import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import MyWork from "./components/MyWork";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg-light">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Education/>
        <Certifications />
        <MyWork />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;