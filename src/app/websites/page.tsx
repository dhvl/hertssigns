import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Design & SEO Services Hertfordshire | Herts Signs & UiX",
  description: "High-performance website design, Next.js web development, and Google SEO services in Hertfordshire. Built in partnership with UiX Studios for local businesses looking to dominate search.",
  keywords: ['website design hertfordshire', 'web development welwyn garden city', 'seo agency hertfordshire', 'local seo hatfield', 'business websites st albans'],
  alternates: {
    canonical: "https://www.hertssigns.co.uk/websites",
  },
  openGraph: {
    title: "Website Design & SEO Services Hertfordshire | Herts Signs & UiX",
    description: "High-performance website design, Next.js web development, and Google SEO services in Hertfordshire. Built in partnership with UiX Studios for local businesses looking to dominate search.",
    url: "https://www.hertssigns.co.uk/websites",
  },
};

export default function Page() {
  return (
    <main>
      
<section className="subhero">
<div className="wrap">
<span className="breadcrumb"><a href="/">Home</a> / Websites &amp; SEO</span>
<div className="subhero-grid">
<div>
<span className="eyebrow">Websites &amp; SEO — with UiX Studios</span>
<h1 style={{marginTop: "0.6rem"} as React.CSSProperties}>A website that reflects a premium brand.</h1>
<p className="lede" style={{marginTop: "1.2rem"} as React.CSSProperties}>Herts Signs Group has been a pioneer in branding and understands your strategic brand positioning. Our digital experts collaborate with you to build a striking online presence that reflects your premium brand.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Start a project →</a>
<a className="btn-ghost" href="tel:01707257575">Call 01707 257 575</a>
</div>
</div>
<div className="subhero-image">

<img alt="Website design work, placeholder image" src="/img/signage-cut-viny.png"/>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">What we do</span>
<h2>More than a good-looking site.</h2>
</div>
<p className="lede" style={{maxWidth: "720px", marginBottom: "1.2rem"} as React.CSSProperties}>We don't just build visually stunning, mobile-responsive websites; we implement technical SEO and UI/UX excellence to increase engagement and drive qualified inquiries for your business.</p>
<p className="lede" style={{maxWidth: "720px"} as React.CSSProperties}>We help with your social media strategy, search engine optimisation of your domain, and online advertising campaigns — delivered with our digital partners, UiX Studios.</p>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">What's covered</span>
<h2>Design, build and visibility.</h2>
</div>
<div className="subservice-list">
<div className="subservice-item">
<span className="code">WEB.1</span>
<h3>UI/UX Design</h3>
<p>It all starts with a great User Interface and a perfect User Experience — visually striking, intuitive layouts that are easy to use.</p>
</div>
<div className="subservice-item">
<span className="code">WEB.2</span>
<h3>Technical SEO</h3>
<p>We optimise your website code, load speeds, metatags and local schema data, so the right people find you in search.</p>
</div>
<div className="subservice-item">
<span className="code">WEB.3</span>
<h3>Custom Development</h3>
<p>Responsive frontends, custom CMS databases, e-commerce stores, client portals and bespoke database integrations.</p>
</div>
<div className="subservice-item">
<span className="code">WEB.4</span>
<h3>Digital Strategy</h3>
<p>Social media strategy, domain-level search optimisation and online advertising, planned around how your business actually wins work.</p>
</div>
</div>
</div>
</section>
<section>
<div className="wrap">
<div className="section-head">
<span className="eyebrow">Our digital projects</span>
<h2>Recent work.</h2>
</div>
<div className="subservice-list">
<div className="subservice-item">
<span className="code">01</span>
<h3>Care Home</h3>
<p>A warm, accessible site built to reassure families and make enquiries simple.</p>
</div>
<div className="subservice-item">
<span className="code">02</span>
<h3>Health Barn Clinic</h3>
<p>A clean clinical brand online, with booking and service information front and centre.</p>
</div>
<div className="subservice-item">
<span className="code">03</span>
<h3>The Galleria</h3>
<p>A high-traffic retail destination presented with the polish the brand expects.</p>
</div>
</div>
</div>
</section>
<section className="page-cta">
<div className="wrap">
<h2>Ready to talk about your website?</h2>
<p className="lede">Tell us where you are now — live site, half-built, or starting from nothing — and we'll take it from there.</p>
<div className="hero-actions">
<a className="btn-primary" href="/contact-us">Start a project →</a>
<a className="btn-ghost" href="tel:01707257575">Call 01707 257 575</a>
</div>
</div>
</section>

    </main>
  );
}
