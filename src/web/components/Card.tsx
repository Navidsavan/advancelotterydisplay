import React from "react";
import { motion, type Variants } from "framer-motion";
import "../styles/Card.css";

// === Type Definitions ===
export type Feature = {
  id: string;
  title: string;
  desc: string;
  Icon: React.ElementType;
  price?: string; // Optional — only for pricing
  bullets?: string[]; // Optional — for pricing plans
};

type ReusableFeaturesProps = {
  title: string;
  subtitle: string;
  features: Feature[];
  sectionId?: string;
  showButton?: boolean; // 👈 New flag to control button visibility
  buttonLabel?: string; // 👈 Customizable button text
};

// === Animation Variants ===
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// === Reusable Features Component ===
const Card: React.FC<ReusableFeaturesProps> = ({
  title,
  subtitle,
  features,
  sectionId = "features",
  showButton = false,
  buttonLabel = "Learn More",
}) => {
  return (
    <section id={sectionId} className="features-section">
      <div className="features-container">
        {/* Section Title */}
        <motion.h2
          className="features-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="features-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>

        {/* Features Grid */}
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map(({ id, title, desc, Icon, price, bullets }) => (
            <motion.article
              key={id}
              className="feature-card"
              variants={itemVariants}
            >
              <div className="icon-wrapper">
                <Icon size={36} strokeWidth={1.8} />
              </div>

              <h3>{title}</h3>
              {price && <p className="feature-price">{price}</p>}

              <p>{desc}</p>

              {/* Render bullet list if exists */}
              {bullets && (
                <ul className="feature-list">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {/* Optional button (visible in pricing mode) */}
              {showButton && (
                <button className="feature-button">{`Choose ${title}`}</button>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Card;
