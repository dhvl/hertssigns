import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="logo">
              <img src="/img/logo.png" alt="Herts Signs Group" className="logo-img" style={{ height: "30px", width: "auto" }} />
            </Link>
            <p style={{ marginTop: "1rem", color: "var(--c-text-dim)", fontSize: "0.88rem" }}>
              6 Blenheim Court<br />
              Welwyn Garden City<br />
              AL7 1AD
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/work">Our Work</Link></li>
              <li><Link href="/blog">Blog &amp; Guides</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/catalogues">Catalogues</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/vehicle-graphics">Vehicle Graphics</Link></li>
              <li><Link href="/signage">Signage</Link></li>
              <li><Link href="/printing">Large Format &amp; Printing</Link></li>
              <li><Link href="/design">Design Studio</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <ul>
              <li>Sales: <a href="tel:01707257575">01707 257 575</a></li>
              <li>Studio: <a href="tel:01707275277">01707 275 277</a></li>
              <li><a href="mailto:sales@hertssigns.co.uk">sales@hertssigns.co.uk</a></li>
              <li><Link href="/websites">Website Design (with UiX Studios)</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 1993–2026 Herts Signs Group. All rights reserved.</span>
          <div className="social-row">
            <a href="https://www.facebook.com/hertssigns" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/HertsSigns/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/herts-signs-&-graphics-limited/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
