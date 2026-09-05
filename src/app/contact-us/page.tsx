import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Herts Signs | 6 Blenheim Court, Welwyn Garden City",
  description: "Get in touch with Herts Signs for a free bespoke quote on signage, vehicle graphics, or large format printing. Call 01707 257 575 or visit our Welwyn Garden City workshop.",
  keywords: ["contact herts signs", "herts signs phone number", "sign makers welwyn garden city contact", "herts signs quote"],
  alternates: {
    canonical: "https://www.hertssigns.co.uk/contact-us",
  },
  openGraph: {
    title: "Contact Herts Signs | 6 Blenheim Court, Welwyn Garden City",
    description: "Get in touch with Herts Signs for a free bespoke quote on signage, vehicle graphics, or large format printing. Call 01707 257 575 or visit our Welwyn Garden City workshop.",
    url: "https://www.hertssigns.co.uk/contact-us",
  },
};

export default function Page() {
  return (
    <main>
      <section className="subhero">
        <div className="wrap">
          <span className="breadcrumb"><Link href="/">Home</Link> / Contact</span>
          <span className="eyebrow">Start a project</span>
          <h1 style={{ marginTop: "0.6rem" } as React.CSSProperties}>Get in touch.</h1>
          <p className="lede" style={{ marginTop: "1.2rem" } as React.CSSProperties}>
            Whether you have print-ready artwork or just a rough idea, tell us what you're working on. We'll come back to you within one working day.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: "1.5rem" } as React.CSSProperties}>
        <div className="wrap contact-grid">
          <div>
            <ContactForm />
          </div>

          <div>
            <div className="contact-info-block">
              <h4>Office Address</h4>
              <p>
                6 Blenheim Court<br />
                Brownfields<br />
                Welwyn Garden City<br />
                Hertfordshire<br />
                AL7 1AD
              </p>
            </div>

            <div className="contact-info-block">
              <h4>Direct Telephone</h4>
              <p>
                Sales &amp; Estimating: <a href="tel:01707257575">01707 257 575</a><br />
                Design Studio: <a href="tel:01707275277">01707 275 277</a>
              </p>
            </div>

            <div className="contact-info-block">
              <h4>Email</h4>
              <p>
                General &amp; Sales: <a href="mailto:info@hertssigns.co.uk">info@hertssigns.co.uk</a><br />
                Artwork &amp; Proofs: <a href="mailto:sales@hertssigns.co.uk">sales@hertssigns.co.uk</a>
              </p>
            </div>

            <div className="contact-info-block">
              <h4>Opening Hours</h4>
              <p>
                Monday – Friday: 08:30 – 17:30<br />
                Saturday – Sunday: Closed<br />
                <span style={{ fontSize: "0.82rem", color: "var(--c-text-dim)" }}>
                  Fitting appointments available by prior arrangement.
                </span>
              </p>
            </div>

            <div className="map-frame" style={{ marginTop: "1.5rem" }}>
              <iframe
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Herts+Signs+%26+Graphics+Ltd,+6+Blenheim+Court,+Welwyn+Garden+City,+AL7+1AD&amp;output=embed"
                title="Map showing Herts Signs Group, 6 Blenheim Court, Welwyn Garden City"
                style={{ width: "100%", height: "260px", border: "0", borderRadius: "4px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
