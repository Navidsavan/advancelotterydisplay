import React, { useState } from "react";

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

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <strong>Lottery Display</strong>
          <span className="brand-sub">Digital Lottery Display Technology</span>
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

          <a className="link-btn" href="#login" onClick={() => setMobileOpen(false)}>
            Login
          </a>

          <a className="nav-contact" href="tel:+15127889042">
            Call Us +1 (512) 788-9042
          </a>

          <button
            className="cta"
            onClick={() => {
              // example: open signup modal or navigate
              // here it scrolls to partner section as "Get Started" entrypoint
              scrollToId("partner");
              setMobileOpen(false);
            }}
          >
            Get Started
          </button>
        </nav>

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
