import React from "react";
import { FaStore, FaTv, FaNetworkWired, FaBarcode } from "react-icons/fa";
import Card, { type Feature } from "./Card"; // ✅ Import reusable component


const SOLUTIONS: Feature[] = [
  {
    id: "retail",
    title: "Retail Lottery Halls",
    desc: "Fast integration with terminal systems and secure remote management.",
    Icon: FaStore,
  },
  {
    id: "kiosk",
    title: "Kiosk & TV Displays",
    desc: "HD-ready display templates and ad scheduling to monetize screens.",
    Icon: FaTv,
  },
  {
    id: "enterprise",
    title: "Enterprise Networks",
    desc: "Multi-region deployment, role-based control, and analytics.",
    Icon: FaNetworkWired,
  },
  {
    id: "barcode",
    title: "Desktop Barcode Scanning App",
    desc: "Seamless integration with physical scanners for fast, accurate barcode data capture.",
    Icon: FaBarcode,
  },
];

const Solutions: React.FC = () => {
  return (
    <Card
      sectionId="solutions"
      title="Solutions"
      subtitle="Deployable solutions tailored for operators, resellers, and retail chains."
      features={SOLUTIONS}
      showButton={false}
    />
  );
};

export default Solutions;
