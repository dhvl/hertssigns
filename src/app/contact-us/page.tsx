import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Herts Signs Group",
  description: "Get in touch with Herts Signs Group, Welwyn Garden City. Call, email, or send a quote request.",
};

export default function Page() {
  return (
    <main>
      
<section className="subhero" style={{borderBottom: "none"} as React.CSSProperties}>
<div className="wrap">
<span className="breadcrumb"><a href="/">Home</a> / Contact Us</span>
<span className="eyebrow">Get in touch</span>
<h1 style={{marginTop: "0.6rem"} as React.CSSProperties}>Tell us what you'd like to make.</h1>
<p className="lede" style={{marginTop: "1.2rem"} as React.CSSProperties}>Send a quote request below, or call the studio direct — whichever's easier.</p>
</div>
</section>
<section style={{paddingTop: "1.5rem"} as React.CSSProperties}>
<div className="wrap contact-grid">
<div>

<form action="#" className="contact-form" encType="multipart/form-data" method="POST">
<div className="form-row">
<label htmlFor="name">Name</label>
<input id="name" name="name" required type="text"/>
</div>
<div className="form-row">
<label htmlFor="company">Company (optional)</label>
<input id="company" name="company" type="text"/>
</div>
<div className="form-row">
<label htmlFor="email">Email</label>
<input id="email" name="email" required type="email"/>
</div>
<div className="form-row">
<label htmlFor="phone">Phone</label>
<input id="phone" name="phone" type="tel"/>
</div>
<div className="form-row">
<label htmlFor="service">What do you need?</label>
<select id="service" name="service">
<option value="">Select a service</option>
<option value="vehicle-graphics">Vehicle Graphics &amp; Wrapping</option>
<option value="signage">Signage</option>
<option value="window-films">Window Films</option>
<option value="printing">Large Format &amp; Printing</option>
<option value="exhibitions">Exhibitions &amp; Display Stands</option>
<option value="clothing">Clothing &amp; Merchandise</option>
<option value="design">Design Studio</option>
<option value="other">Something else</option>
</select>
</div>
<div className="form-row">
<label htmlFor="message">Tell us about the project</label>
<textarea id="message" name="message" required></textarea>
</div>
<div className="form-row">
<label htmlFor="attachments">Attachments (optional)</label>
<label className="file-drop" htmlFor="attachments">
<input accept="image/*,.pdf,.ai,.eps,.psd,.svg,.doc,.docx,.zip" id="attachments" multiple name="attachments[]" type="file"/>
<span aria-hidden="true" className="file-drop-icon">↑</span>
<span className="file-drop-text"><strong>Choose files</strong> or drag them here</span>
<span className="file-drop-hint">Logos, photos, sketches or PDFs — images, PDF, AI, EPS, SVG, DOC, ZIP</span>
</label>
<ul aria-live="polite" className="file-list" id="fileList"></ul>
</div>
<button className="btn-primary" style={{justifyContent: "center"} as React.CSSProperties} type="submit">Send request →</button>
</form>
</div>
<div>
<div className="contact-info-block">
<h4>Office Address</h4>
<p>Herts Signs &amp; Graphics Ltd<br/>6 Blenheim Court<br/>Welwyn Garden City<br/>AL7 1AD</p>
</div>
<div className="contact-info-block">
<h4>Phone</h4>
<p>Sales: <a href="tel:01707257575">01707 257 575</a><br/>Studio: <a href="tel:01707275277">01707 275 277</a></p>
</div>
<div className="contact-info-block">
<h4>Email</h4>
<p><a href="mailto:sales@hertssigns.co.uk">sales@hertssigns.co.uk</a></p>
</div>
<div className="contact-info-block">
<h4>Coverage</h4>
<p>Serving Welwyn Garden City, Hatfield, St Albans, Stevenage and the surrounding Hertfordshire area, with clients further afield by arrangement.</p>
</div>
<div className="map-frame">
<iframe loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Herts+Signs+%26+Graphics+Ltd,+6+Blenheim+Court,+Welwyn+Garden+City,+AL7+1AD&amp;output=embed" title="Map showing Herts Signs Group, 6 Blenheim Court, Welwyn Garden City">
</iframe>
</div>
</div>
</div>
</section>

    </main>
  );
}
