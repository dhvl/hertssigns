import { MetadataRoute } from "next";
import postsData from "@/data/posts.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hertssigns.co.uk";
  const lastModified = new Date();

  // 1. Core Service & Company Pages
  const coreRoutes = [
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
    { url: `${baseUrl}/blog`, priority: 0.85, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/ai-design-guide`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/catalogues`, priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/signage-questionnaire`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/logo-design-questionnaire`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/vehicle-livery-questionnaire`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  // 2. All 51 Migrated Articles & Knowledge Guides
  const postRoutes = postsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  const allRoutes = [...coreRoutes, ...postRoutes];

  return allRoutes.map((route) => ({
    ...route,
    lastModified,
  }));
}
