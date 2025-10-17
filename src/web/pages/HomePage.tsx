import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Solutions from "../components/Solutions";
import Pricing from "../components/Pricing";
import Partner from "../components/Partner";
import Footer from "../components/Footer";
import Slider from "../components/Slider";


const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Slider/>
        <Features />
        <Solutions />
        <Pricing />
        <Partner />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
