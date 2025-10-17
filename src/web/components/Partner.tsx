import React from "react";
import "../styles/Partner.css"; // ✅ Import the custom CSS

const Partner: React.FC = () => {
  return (
    <section id="partner" className="section alt">
      <div className="container">
        <h2>Become a Partner</h2>
        <p className="section-sub">
          Join our reseller network — provide digital display hardware, installation and local support while we handle software and cloud updates.
        </p>

        <div className="partner-cta">
          <a className="btn" href="mailto:partners@lotterydisplay.example">
            Contact Partnership Team
          </a>
          <a className="btn ghost" href="#login">
            Login / Partner Portal
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partner;
