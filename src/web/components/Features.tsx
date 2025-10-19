import React from "react";
import {
  Zap,
  Clock,
  WifiOff,
  MonitorSmartphone,
} from "lucide-react";
import Card, {type Feature } from "./Card";

const FEATURES: Feature[] = [
  { id: "realtime", title: "Real-time Updates", desc: "Instant number and draw updates to all displays.", Icon: Zap },
  { id: "scheduling", title: "Smart Scheduling", desc: "Auto-switch ads and content with flexible time slots.", Icon: Clock },
  { id: "offline", title: "Offline Fallback", desc: "Displays continue when connectivity is lost.", Icon: WifiOff },
  { id: "multidevice", title: "Multi-device Sync", desc: "TVs, kiosks, and mobile displays stay in sync.", Icon: MonitorSmartphone },
];

const FeaturesSection = () => (
  <Card
    title="Features"
    subtitle="Everything you need to run modern digital lottery display and advertisements."
    features={FEATURES}
    showButton={false}
  />
);

export default FeaturesSection;
