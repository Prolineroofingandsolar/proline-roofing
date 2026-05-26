import type { MetadataRoute } from "next";

const base = "https://www.prolineroofingandsolar.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/roofing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solar`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/reviews`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/quote`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
