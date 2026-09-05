import Link from "next/link";
import { Metadata } from "next";
import postsData from "@/data/posts.json";

export const metadata: Metadata = {
  title: "Signage & Vehicle Wrapping Blog & Guides | Herts Signs",
  description:
    "Expert advice, buying guides, signage design trends, and vehicle wrapping tips from Hertfordshire's premier sign makers since 1993.",
  alternates: {
    canonical: "https://www.hertssigns.co.uk/blog",
  },
};

export default function BlogIndexPage() {
  const posts = postsData;

  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <main>
      <section className="service-hero">
        <div className="wrap service-hero-grid">
          <div className="reveal-up">
            <span className="hero-est">INSIGHTS & GUIDES</span>
            <h1 className="hero-h1">
              Signage, Graphics &amp; <span className="accent">Wrapping Knowledge</span>
            </h1>
            <p className="lede">
              In-depth articles, industry regulations, material comparisons, and design tips from our team in Welwyn Garden City.
            </p>
          </div>
        </div>
      </section>

      <section className="pad-lg">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {posts.map((post) => (
              <article
                key={post.slug}
                className="cap-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "2rem",
                  background: "var(--c-surface)",
                  border: "1px solid var(--c-border)",
                  borderRadius: "6px",
                  transition: "transform 0.2s, border-color 0.2s"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--c-accent)", fontWeight: "bold" }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--c-text-dim)" }}>
                      {post.readTime}
                    </span>
                  </div>
                  <h2 style={{ fontSize: "1.25rem", lineHeight: "1.4", marginBottom: "0.8rem", color: "var(--c-text)" }}>
                    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                      {post.title}
                    </Link>
                  </h2>
                  <p style={{ color: "var(--c-text-dim)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                    {post.description.length > 140 ? `${post.description.substring(0, 140)}...` : post.description}
                  </p>
                </div>
                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="view-link"
                    style={{ fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    Read guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="cta-strip pad-lg" style={{ background: "var(--c-surface-2)", borderTop: "1px solid var(--c-border)" }}>
        <div className="wrap" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
          <span className="eyebrow" style={{ color: "var(--c-accent)" }}>READY TO START A PROJECT?</span>
          <h2 style={{ fontSize: "2rem", margin: "0.8rem 0" }}>Get an exact, no-obligation quote</h2>
          <p style={{ color: "var(--c-text-dim)", marginBottom: "2rem", lineHeight: "1.6" }}>
            Speak directly with our technical production team in Welwyn Garden City or request a fast estimate.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact-us" className="btn-primary">Request a quote →</Link>
            <a href="tel:01707257575" className="btn-ghost">Call 01707 257 575</a>
          </div>
        </div>
      </section>
    </main>
  );
}
