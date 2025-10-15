import React from "react";

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="section alt">
      <div className="container">
        <h2>Solutions</h2>
        <p className="section-sub">Deployable solutions tailored for operators, resellers, and retail chains.</p>

        <div className="grid solutions-grid">
          <div className="card">
            <h3>Retail Lottery Halls</h3>
            <p>Fast integration with terminal systems and secure remote management.</p>
          </div>
          <div className="card">
            <h3>Kiosk & TV Displays</h3>
            <p>HD-ready display templates and ad scheduling to monetize screens.</p>
          </div>
          <div className="card">
            <h3>Enterprise Networks</h3>
            <p>Multi-region deployment, role-based control, and analytics.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
