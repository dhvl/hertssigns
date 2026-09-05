import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 301 Permanent Redirects for legacy SEO URLs to recover ranking authority
      {
        source: "/signage-manufacturers-in-hertfordshire.html",
        destination: "/signage",
        permanent: true,
      },
      {
        source: "/vehicle-graphics-in-hertfordshire.html",
        destination: "/vehicle-graphics",
        permanent: true,
      },
      {
        source: "/shop-signage-in-hertfordshire.html",
        destination: "/signage",
        permanent: true,
      },
      {
        source: "/vehicles-sign-writing-in-hertfordshire.html",
        destination: "/vehicle-graphics",
        permanent: true,
      },
      {
        source: "/large-format-printing-in-hertfordshire.html",
        destination: "/printing",
        permanent: true,
      },
      {
        source: "/tshirt-printing-hertfordshire.html",
        destination: "/clothing",
        permanent: true,
      },
      {
        source: "/window-films.html",
        destination: "/window-films",
        permanent: true,
      },
      {
        source: "/design.html",
        destination: "/design",
        permanent: true,
      },
      {
        source: "/websites.html",
        destination: "/websites",
        permanent: true,
      },
      {
        source: "/about-us.html",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact-us.html",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/exhibitions.html",
        destination: "/exhibitions",
        permanent: true,
      },
      {
        source: "/work.html",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/catalogues.html",
        destination: "/catalogues",
        permanent: true,
      },
      {
        source: "/ai-design-guide.html",
        destination: "/ai-design-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
