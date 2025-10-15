import React from "react";

const plans = [
  { id: "basic", name: "Basic", price: "$29/mo", bullets: ["Single site", "Basic support", "Core display features"] },
  { id: "pro", name: "Pro", price: "$79/mo", bullets: ["Multi-site", "Priority support", "Advanced scheduling"] },
  { id: "enterprise", name: "Enterprise", price: "Custom", bullets: ["SLA & onboarding", "Dedicated account", "Custom integrations"] },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2>Pricing</h2>
        <p className="section-sub">Scalable plans for single stores to nationwide deployments.</p>

        <div className="grid pricing-grid">
          {plans.map((p) => (
            <div key={p.id} className="card pricing-card">
              <h3>{p.name}</h3>
              <p className="price">{p.price}</p>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <button className="btn">Choose {p.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
