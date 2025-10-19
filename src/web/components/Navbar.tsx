import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import '../styles/Navbar.css';


const sections = [
  { id: "features", label: "Features" },
  { id: "solutions", label: "Solutions" },
  { id: "pricing", label: "Pricing" },
  { id: "hardware", label: "Hardware" },
  { id: "partner", label: "Become a Partner" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Left: Logo */}
        <div
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="Lottery Display Logo" className="brand-logo" />
        </div>

        {/* Center: Navigation */}
        <nav className={`nav-center ${mobileOpen ? "open" : ""}`}>
          {sections.map((s) => (
            <button
              key={s.id}
              className="link-btn"
              onClick={() => {
                scrollToId(s.id);
                setMobileOpen(false);
              }}
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* Right: Contact + Buttons */}
        <div className="nav-right">
          <a className="nav-contact" href="tel:+923130547655">
            📞 +92 313 0547655
          </a>

          <button
            className="link-btn"
            onClick={() => {
              navigate("/login");
              setMobileOpen(false);
            }}
          >
            Login
          </button>

          <button
            className="cta"
            onClick={() => {
              navigate("/login");
              setMobileOpen(false);
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="hamburger" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
