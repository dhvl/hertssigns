import React from "react";

export function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.hertssigns.co.uk/#organization",
    name: "Herts Signs Group (Herts Signs & Graphics Ltd)",
    alternateName: "Herts Signs",
    url: "https://www.hertssigns.co.uk",
    logo: "https://www.hertssigns.co.uk/img/logo.png",
    image: "https://www.hertssigns.co.uk/img/van-hero.png",
    description:
      "Hertfordshire's leading signage, vehicle wrapping, large format printing, and window film specialists since 1993. In-house design, manufacturing, and certified installation across Welwyn Garden City, Hatfield, St Albans, Stevenage, Hertford, and Greater London.",
    telephone: "+44-1707-257-575",
    email: "sales@hertssigns.co.uk",
    priceRange: "££",
    foundingDate: "1993",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Blenheim Court",
      addressLocality: "Welwyn Garden City",
      addressRegion: "Hertfordshire",
      postalCode: "AL7 1AD",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.8021,
      longitude: -0.1983,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:30",
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hertfordshire" },
      { "@type": "City", name: "Welwyn Garden City" },
      { "@type": "City", name: "Hatfield" },
      { "@type": "City", name: "St Albans" },
      { "@type": "City", name: "Stevenage" },
      { "@type": "City", name: "Hertford" },
      { "@type": "City", name: "London" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    sameAs: [
      "https://www.facebook.com/hertssigns",
      "https://www.instagram.com/HertsSigns/",
      "https://www.linkedin.com/company/herts-signs-&-graphics-limited/",
      "https://twitter.com/hertssigns",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "48",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Signage, Vehicle Graphics & Printing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vehicle Graphics & Van Wrapping",
            description: "Full colour commercial van wraps, fleet livery, car decals and magnetic vehicle signs in Hertfordshire.",
            url: "https://www.hertssigns.co.uk/vehicle-graphics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial & Shopfront Signage",
            description: "Illuminated fascias, architectural 3D lettering, monolith totems and exterior business signs in Hertfordshire.",
            url: "https://www.hertssigns.co.uk/signage",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Window Films & Manifestation",
            description: "Frosted manifestation films, solar UV control, privacy tinting and etched glass graphics for offices and commercial retail.",
            url: "https://www.hertssigns.co.uk/window-films",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Large Format Printing",
            description: "PVC banners, mesh banners, exhibition pop-up stands, posters, fine art prints and corporate stationery.",
            url: "https://www.hertssigns.co.uk/printing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Branded Workwear & Clothing Merchandise",
            description: "Embroidery, screen printing, corporate uniform supply, high-vis workwear and promotional event gifts.",
            url: "https://www.hertssigns.co.uk/clothing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand & Logo Design Studio",
            description: "Complete visual identity design, logo creation, vector redrawing and 3D architectural mockups.",
            url: "https://www.hertssigns.co.uk/design",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
