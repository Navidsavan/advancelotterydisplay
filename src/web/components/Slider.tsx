import React from "react";
import { motion } from "framer-motion";
import "../styles/Slider.css";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.webp";

const images = [slide1, slide2, slide3, slide4, slide5];

const Slider: React.FC = () => {
  return (
    <section className="world-slider">
      <div className="slider-wrapper">
        <motion.div
          className="slider-track"
          animate={{ x: ["0%", "-100%"] }} // Move right → left
          transition={{
            repeat: Infinity,
            duration: 40, // ⏳ slower movement (was 20)
            ease: "linear",
          }}
        >
          {[...images, ...images].map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`slide-${index}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
