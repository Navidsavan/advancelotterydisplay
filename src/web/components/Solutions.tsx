import React from "react";
import { motion,type Variants } from "framer-motion";
import { FaStore, FaTv, FaNetworkWired,FaBarcode } from "react-icons/fa";
import "../styles/Solution.css";



const solutions = [
  {
    id: 1,
    title: "Retail Lottery Halls",
    desc: "Fast integration with terminal systems and secure remote management.",
    Icon: FaStore ,
  },
  {
    id: 2,
    title: "Kiosk & TV Displays",
    desc: "HD-ready display templates and ad scheduling to monetize screens.",
    Icon: FaTv,
  },
  {
    id: 3,
    title: "Enterprise Networks",
    desc: "Multi-region deployment, role-based control, and analytics.",
    Icon: FaNetworkWired,
  },
  {
    id: 4,
    title: "Desktop Barcode Scanning App",
    desc: "Seamless integration with physical scanners for fast, accurate barcode data capture.",
    Icon: FaBarcode,
  },
];

// ✅ Framer Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between items
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

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="features-section">
      <div className="features-container">
        <motion.h2
          className="features-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Solutions
        </motion.h2>

        <motion.p
          className="features-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
         Deployable solutions tailored for operators, resellers, and retail chains.
        </motion.p>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {solutions.map(({ id, title, desc, Icon }) => (
            <motion.article
              key={id}
              className="feature-card"
              variants={itemVariants}
            >
              <div className="icon-wrapper">
                <Icon size={36} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
