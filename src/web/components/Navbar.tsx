import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import router navigation
import logo from "../../assets/logo.png"

const sections = [
  { id: "features", label: "Features" },
  { id: "solutions", label: "Solutions" },
  { id: "pricing", label: "Pricing" },
  { id: "partner", label: "Become a partner" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logo}
            alt="Lottery Display Logo"
            className="brand-logo"
            style={{ height: 250, objectFit: "contain" }}
          />
        </div>

        <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
          {sections.map((s) => (
            <button
              key={s.id}
              className="link-btn"
              onClick={() => {
                scrollToId(s.id);
                setMobileOpen(false);
              }}
              aria-label={`Scroll to ${s.label}`}
            >
              {s.label}
            </button>
          ))}

          {/* ✅ Navigate to login route */}
          <button
            className="link-btn"
            onClick={() => {
              navigate("/login");
              setMobileOpen(false);
            }}
          >
            Login
          </button>

          <a className="nav-contact" href="tel:+923130547655">
            Call Us +92 03130547655
          </a>

          {/* ✅ Get Started → navigate to /login */}
          <button
            className="cta"
            onClick={() => {
              navigate("/login");
              setMobileOpen(false);
            }}
          >
            Get Started
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
