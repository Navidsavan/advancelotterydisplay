import React from "react";
import { FaStore, FaCogs, FaBuilding } from "react-icons/fa";
import "../styles/Pricing.css";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "$29/mo",
    icon: <FaStore />,
    bullets: [
      "Single site support",
      "Basic monitoring",
      "Core display features",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$79/mo",
    icon: <FaCogs />,
    bullets: [
      "Multi-site control",
      "Priority support",
      "Advanced scheduling",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    icon: <FaBuilding />,
    bullets: [
      "SLA & onboarding",
      "Dedicated account",
      "Custom integrations",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-title">Pricing</h2>
        <p className="pricing-subtitle">
          Scalable plans for single stores to nationwide deployments.
        </p>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div
              key={p.id}
              className="pricing-card"
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <div className="icon-wrapper">{p.icon}</div>
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
