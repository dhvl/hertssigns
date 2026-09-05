"use client";

import React, { useState } from "react";
import Link from "next/link";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav-row">
        <Link href="/" className="logo">
          <img src="/img/logo.png" alt="Herts Signs Group" className="logo-img" />
        </Link>

        <nav>
          <ul className={`primary-nav ${mobileOpen ? "nav-open" : ""}`}>
            <li>
              <Link href="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" onClick={() => setMobileOpen(false)}>
                About
              </Link>
            </li>
            <li 
              className="has-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a 
                href="#services" 
                aria-haspopup="true"
                onClick={(e) => {
                  e.preventDefault();
                  setServicesOpen(!servicesOpen);
                }}
              >
                Services ▾
              </a>
              <div 
                className="dropdown"
                style={{
                  opacity: servicesOpen ? 1 : undefined,
                  visibility: servicesOpen ? "visible" : undefined,
                  transform: servicesOpen ? "translateY(0)" : undefined
                }}
              >
                <Link href="/vehicle-graphics" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
                  <span className="code">VG</span> Vehicle Graphics &amp; Wrapping
                </Link>
                <Link href="/signage" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
                  <span className="code">SG</span> Signage
                </Link>
                <Link href="/window-films" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
                  <span className="code">WF</span> Window Films
                </Link>
                <Link href="/printing" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
                  <span className="code">LF</span> Large Format &amp; Printing
                </Link>
                <Link href="/exhibitions" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
                  <span className="code">EX</span> Exhibitions &amp; Display Stands
                </Link>
                <Link href="/clothing" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
                  <span className="code">CM</span> Clothing &amp; Merchandise
                </Link>
                <Link href="/design" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
                  <span className="code">DS</span> Design Studio
                </Link>
              </div>
            </li>
            <li>
              <Link href="/work" onClick={() => setMobileOpen(false)}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact-us" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <button 
            className="nav-toggle" 
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </nav>

        <a href="tel:01707257575" className="call-btn">
          01707 257 575
        </a>
      </div>
    </header>
  );
}
