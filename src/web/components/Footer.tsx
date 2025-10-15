import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Lottery Display</strong>
          <div className="muted">Digital Lottery Display Technology</div>
        </div>

        <div className="footer-actions">
          <a href="tel:+15127889042">Call Us: +1 (512) 788-9042</a>
          <a href="mailto:info@lotterydisplay.example">info@lotterydisplay.example</a>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Lottery Display — All rights reserved</div>
    </footer>
  );
};

export default Footer;
