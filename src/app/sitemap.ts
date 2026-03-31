import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { locationPages } from "@/lib/location-data";
import { servicePages } from "@/lib/service-data";
import { resourcePages } from "@/lib/resource-data";

const SITE_URL = "https://tamerlanmusayev.com";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/work`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/work/peptideleads`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/press`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationPgs = locationPages.map((loc) => ({
    url: `${SITE_URL}/location/${loc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const servicePgs = servicePages.map((svc) => ({
    url: `${SITE_URL}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourcePgs = resourcePages.map((res) => ({
    url: `${SITE_URL}/resources/${res.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...corePages,
    ...blogPages,
    ...locationPgs,
    ...servicePgs,
    ...resourcePgs,
  ];
}
