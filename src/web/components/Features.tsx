import React from "react";
import {
  Zap,
  Clock,
  WifiOff,
  MonitorSmartphone,
} from "lucide-react";
import { motion,type Variants } from "framer-motion";
import "../styles/Features.css";

type Feature = {
  id: string;
  title: string;
  desc: string;
  Icon: React.ElementType;
};

const FEATURES: Feature[] = [
  { id: "realtime", title: "Real-time Updates", desc: "Instant number and draw updates to all displays.", Icon: Zap },
  { id: "scheduling", title: "Smart Scheduling", desc: "Auto-switch ads and content with flexible time slots.", Icon: Clock },
  { id: "offline", title: "Offline Fallback", desc: "Displays continue when connectivity is lost.", Icon: WifiOff },
  { id: "multidevice", title: "Multi-device Sync", desc: "TVs, kiosks, and mobile displays stay in sync.", Icon: MonitorSmartphone },
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

const Features: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <motion.h2
          className="features-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Features
        </motion.h2>

        <motion.p
          className="features-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Everything you need to run modern digital lottery display and advertisements.
        </motion.p>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {FEATURES.map(({ id, title, desc, Icon }) => (
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

export default Features;
