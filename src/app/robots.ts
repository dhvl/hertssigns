import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/wp-admin/",
          "/wp-content/",
          "/wp-includes/",
          "/*.php$",
          "/*?*p=*",
        ],
      },
    ],
    sitemap: "https://www.hertssigns.co.uk/sitemap.xml",
    host: "https://www.hertssigns.co.uk",
  };
}
