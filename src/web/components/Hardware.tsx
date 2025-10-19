import React from "react";
import "../styles/Hardware.css";
import tvImage from "../assets/tv.webp";
import scannerImage from "../assets/scanner.jpg";

const Hardware = () => {
  return (
    <section id="hardware" className="hardware-section">
      <div className="hardware-container">
        <h2 className="hardware-title">Hardware Recommendation</h2>
        <p className="hardware-subtitle">
          Recommended devices and scanners for optimal Digital Lottery Display performance.
        </p>

        <div className="hardware-grid">
          {/* TV Recommendation */}
          <div className="hardware-card">
            <div className="hardware-image-wrap">
              <img src={tvImage} alt="Android TV" className="hardware-image" />
            </div>
            <h3>TV</h3>
            <p>
              Digital Technologies recommends a <strong>50"–70"</strong> Android TV or equivalent
              smart display, preferably from the following brands:
            </p>
            <ul className="brand-list">
              <li>Samsung</li>
              <li>LG</li>
              <li>Sony</li>
              <li>TCL</li>
              <li>Hisense</li>
            </ul>

            <h4>Alternative Option: Amazon Fire TV Stick</h4>
            <p>
              If your TV is not Android-based, you can use an{" "}
              <strong>Amazon Fire TV Stick (4K or 4K Max)</strong> to easily turn
              any HDMI-enabled display into a smart TV. This ensures smooth Digital Lottery Display
              app performance and stable connectivity.
            </p>
            <ul className="brand-list">
              <li>✔ Easy plug-and-play via HDMI</li>
              <li>✔ Works on any display with HDMI port</li>
              <li>✔ Supports 4K streaming & Wi-Fi</li>
              <li>✔ Affordable & reliable option</li>
            </ul>
          </div>

          {/* Nethum Scanner Recommendation */}
          <div className="hardware-card">
            <div className="hardware-image-wrap">
              <img
                src={scannerImage}
                alt="Nethum 1D/2D Scanner"
                className="hardware-image"
              />
            </div>
            <h3>Nethum 1D / 2D Scanner</h3>
            <p>
              The <strong>Nethum 1D/2D Scanner</strong> offers fast and accurate
              barcode scanning. With <strong>omnidirectional technology</strong>,
              it reads barcodes from any angle (360°), improving efficiency in
              lottery and retail environments.
            </p>
            <h4>Why Choose Nethum?</h4>
            <p>
              Equipped with advanced sensors, it ensures reliable performance
              even under strong lighting or glossy ticket surfaces — making it
              ideal for high-traffic and demanding setups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;
