import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1>
            Lottery Display <br />
            <span className="muted">Digital Lottery Display Technology</span>
          </h1>

          <p className="lead">
            Revolutionize your lottery halls and kiosks with real-time number updates, dynamic
            ad scheduling, and enterprise-grade remote management.
          </p>

          <div className="hero-actions">
            <a className="btn" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>
              Features
            </a>
            <a className="btn ghost" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
              Pricing
            </a>
          </div>
        </div>

        <div className="hero-right" aria-hidden>
          {/* placeholder for product image / mockup */}
          <div className="mockup">
            <div className="screen-header">LIVE DISPLAY</div>
            <div className="screen-body">
              <div className="numbers">12 - 34 - 56</div>
              <div className="meta">Next draw: 12:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
