import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catalogues | Herts Signs Group",
  description: "Browse Herts Signs Group product catalogues by sector — schools, shopping centres, large format print, signage, print and vehicle graphics. View online or download as PDF.",
};

export default function Page() {
  return (
    <main>
      
<section className="subhero">
<div className="wrap">
<span className="breadcrumb"><a href="/">Home</a> / Catalogues</span>
<span className="eyebrow">Catalogues</span>
<h1 style={{marginTop: "0.6rem", maxWidth: "760px"} as React.CSSProperties}>Our ranges, gathered by sector.</h1>
<p className="lede" style={{marginTop: "1.2rem", maxWidth: "640px"} as React.CSSProperties}>Product ranges, materials and specifications, collected into catalogues by the kind of work they cover. Open any one in your browser, or download it to keep.</p>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head reveal-up">
<span className="eyebrow">Available catalogues</span>
<h2>Six catalogues to browse.</h2>
</div>
{/*  PLACEHOLDER LINKS: drop the real PDFs into an /catalogues/ folder
           with these filenames and the links below will work as-is. Each
           opens in a new tab (browser-viewable; downloadable from there).  */}
<div className="cap-grid">
<div className="cap-card reveal-up">
<span className="code">CAT-01</span>
<h3>Schools Signage</h3>
<p>Wayfinding, external signage and interior boards specified for education settings.</p>
<a className="view-link" href="catalogues/schools-signage.pdf" rel="noopener" target="_blank">View PDF →</a>
</div>
<div className="cap-card reveal-up">
<span className="code">CAT-02</span>
<h3>Shopping Centre Signage</h3>
<p>Centre-wide signage, from unit fascias to directories and large-scale wayfinding.</p>
<a className="view-link" href="catalogues/shopping-centre-signage.pdf" rel="noopener" target="_blank">View PDF →</a>
</div>
<div className="cap-card reveal-up">
<span className="code">CAT-03</span>
<h3>Large Format Print</h3>
<p>Banners, hoardings, posters and display graphics, with material and finish options.</p>
<a className="view-link" href="catalogues/large-format-print.pdf" rel="noopener" target="_blank">View PDF →</a>
</div>
<div className="cap-card reveal-up">
<span className="code">CAT-04</span>
<h3>General Signage</h3>
<p>Our core signage range — fascias, lettering, plaques and post-mounted signs.</p>
<a className="view-link" href="catalogues/general-signage.pdf" rel="noopener" target="_blank">View PDF →</a>
</div>
<div className="cap-card reveal-up">
<span className="code">CAT-05</span>
<h3>General Print</h3>
<p>Everyday print, from stationery and brochures to point-of-sale and short-run jobs.</p>
<a className="view-link" href="catalogues/general-print.pdf" rel="noopener" target="_blank">View PDF →</a>
</div>
<div className="cap-card reveal-up">
<span className="code">CAT-06</span>
<h3>Vehicle Graphics</h3>
<p>Wraps, fleet livery and cut decals, with vinyl and finish specifications.</p>
<a className="view-link" href="catalogues/vehicle-graphics.pdf" rel="noopener" target="_blank">View PDF →</a>
</div>
</div>
<p className="lede" style={{marginTop: "2.4rem", maxWidth: "640px", color: "var(--c-text-dim)"} as React.CSSProperties}>Each catalogue opens as a PDF in a new tab — view it online or save it to your device. Need something not listed here? Ask us and we'll point you to the right range.</p>
</div>
</section>
<section className="page-cta">
<div className="wrap">
<h2>Seen something you need?</h2>
<p className="lede">Tell us the job and we'll quote it — or talk it through first if you're still working out the spec.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Get a quote →</a>
<a className="btn-ghost" href="tel:01707257575">Call 01707 257 575</a>
</div>
</div>
</section>

    </main>
  );
}
