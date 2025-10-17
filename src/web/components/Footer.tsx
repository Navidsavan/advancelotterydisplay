import React from "react";
import logo from "../../assets/logo.png";
import "../styles/Footer.css"; // ✅ Import external custom CSS

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <img src={logo} alt="Lottery Display Logo" className="brand-logo" />
        </div>

        <div className="footer-actions">
          <a href="tel:+15127889042" className="footer-contact">
            Call Us: +92 3130547655
          </a>
          <a href="mailto:info@lotterydisplay.example" className="footer-email">
            info.digitaltechnologies@gmail.com
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Digital Technologies — All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
