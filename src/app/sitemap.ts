import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hertssigns.co.uk";
  const lastModified = new Date();

  const routes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/signage`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/vehicle-graphics`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/window-films`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/printing`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/clothing`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/exhibitions`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/design`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/websites`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/work`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about-us`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact-us`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/ai-design-guide`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/catalogues`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/signage-questionnaire`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/logo-design-questionnaire`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/vehicle-livery-questionnaire`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified,
  }));
}
