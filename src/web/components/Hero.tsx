import React from "react";
import "../styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Empowering the <span>Digital World</span> through Innovative Digital Display Solutions
        </h1>
        <p className="hero-subtitle">
          If you’re part of <span>Digital Technologies</span>, you’re already shaping the <span>Digital World</span>. 
          Bring the future to your screens with real-time lottery and advertisement updates, immersive visuals, 
          and next-level engagement that boost your brand’s presence and performance.
        </p>
      </div>
    </section>
  );
};

export default Hero;
