import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import postsData from "@/data/posts.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postsData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Herts Signs",
    };
  }

  return {
    title: `${post.title} | Herts Signs Group`,
    description: post.description,
    alternates: {
      canonical: `https://www.hertssigns.co.uk/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Herts Signs Group`,
      description: post.description,
      type: "article",
      url: `https://www.hertssigns.co.uk/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = postsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts from same category
  const related = postsData
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": "Herts Signs Group",
      "url": "https://www.hertssigns.co.uk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Herts Signs & Graphics Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hertssigns.co.uk/img/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.hertssigns.co.uk/blog/${post.slug}`
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="pad-lg" style={{ paddingBottom: "5rem" }}>
        <div className="wrap" style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Breadcrumbs */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "0.85rem", color: "var(--c-text-dim)", marginBottom: "2rem" }}>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Blog</Link>
            <span>/</span>
            <span style={{ color: "var(--c-accent)" }}>{post.category}</span>
          </div>

          <header style={{ marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--c-accent)", fontWeight: "bold" }}>
              {post.category} • {post.readTime}
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.15", margin: "1rem 0 1.2rem 0", color: "var(--c-text)", fontFamily: "var(--f-display)", fontWeight: 700 }}>
              {post.title}
            </h1>
            <p style={{ fontSize: "1.15rem", lineHeight: "1.6", color: "var(--c-text-dim)" }}>
              {post.description}
            </p>
          </header>

          <hr style={{ borderColor: "var(--c-border)", margin: "2rem 0" }} />

          {/* Article HTML Body */}
          <div
            className="article-content"
            style={{
              lineHeight: "1.8",
              fontSize: "1.05rem",
              color: "var(--c-text)",
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Lead Capture Banner */}
          <div style={{
            background: "var(--c-surface-2)",
            border: "1px solid var(--c-border)",
            borderLeft: "4px solid var(--c-accent)",
            padding: "2rem",
            borderRadius: "6px",
            marginTop: "3.5rem"
          }}>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: "var(--c-text)" }}>
              Need custom signage or vehicle graphics in Hertfordshire?
            </h3>
            <p style={{ color: "var(--c-text-dim)", marginBottom: "1.5rem" }}>
              Herts Signs Group has been designing, manufacturing, and installing commercial signs, vehicle wraps, and window graphics since 1993.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact-us" className="btn-primary">Get a free quote →</Link>
              <a href="tel:01707257575" className="btn-ghost">Call 01707 257 575</a>
            </div>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div style={{ marginTop: "4rem", borderTop: "1px solid var(--c-border)", paddingTop: "2.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "1.5rem" }}>Related Guides &amp; Insights</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
                {related.map((rel) => (
                  <div key={rel.slug} style={{ background: "var(--c-surface)", padding: "1.2rem", borderRadius: "6px", border: "1px solid var(--c-border)" }}>
                    <h4 style={{ fontSize: "1rem", lineHeight: "1.4", marginBottom: "0.5rem" }}>
                      <Link href={`/blog/${rel.slug}`} style={{ color: "var(--c-text)", textDecoration: "none" }}>
                        {rel.title}
                      </Link>
                    </h4>
                    <Link href={`/blog/${rel.slug}`} style={{ fontSize: "0.85rem", color: "var(--c-accent)", fontWeight: "bold", textDecoration: "none" }}>
                      Read article →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
