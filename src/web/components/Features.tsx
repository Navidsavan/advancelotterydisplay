import React from "react";

type Feature = {
  id: string;
  title: string;
  desc: string;
};

const FEATURES: Feature[] = [
  { id: "realtime", title: "Real-time updates", desc: "Instant number and draw updates to all displays." },
  { id: "scheduling", title: "Smart scheduling", desc: "Auto-switch ads and content with flexible time slots." },
  { id: "offline", title: "Offline fallback", desc: "Displays continue when connectivity is lost." },
  { id: "multidevice", title: "Multi-device sync", desc: "TVs, kiosks and mobile displays stay in sync." },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2>Features</h2>
        <p className="section-sub">Everything you need to run modern digital lottery displays.</p>

        <div className="grid feature-grid">
          {FEATURES.map((f) => (
            <article key={f.id} className="card">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
