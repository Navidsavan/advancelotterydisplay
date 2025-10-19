import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Solutions from "../components/Solutions";
import Pricing from "../components/Pricing";
import Partner from "../components/Partner";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Hardware from "../components/Hardware";
import ContactUs from "../components/ContactUs";


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
        <Hardware/>
        <ContactUs/>
        <Partner />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
