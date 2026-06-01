import type { MetadataRoute } from "next";

const base = "https://www.prolineroofingandsolar.co.uk";

const cities = [
  "taunton", "bridgwater", "bath", "weston-super-mare", "bristol",
  "exeter", "yeovil", "wellington", "burnham-on-sea", "glastonbury",
];

const servicePages = [
  "roof-repairs", "flat-roofing", "slate-roofing", "tile-roofing",
  "chimney-repairs", "leadwork", "fascias-soffits", "guttering",
  "emergency-roofing", "commercial-roofing",
];

const blogSlugs = [
  "roof-repair-costs-somerset-2024",
  "signs-you-need-a-new-roof",
  "tile-vs-slate-roofing-somerset",
  "flat-roofing-guide-somerset",
  "chimney-repair-guide",
  "gutter-maintenance-guide",
  "emergency-roof-repair-guide",
  "solar-panel-installation-guide-somerset",
  "solar-panel-costs-somerset-2024",
  "solar-roi-calculator-somerset",
  "solar-grants-uk-2024",
  "best-solar-panels-uk",
  "how-long-does-roof-last",
  "roof-insulation-guide-somerset",
  "choose-roofer-somerset",
  "storm-damage-roof-repair",
  "moss-removal-roof-somerset",
  "planning-permission-roof-somerset",
  "fascias-soffits-replacement-guide",
  "battery-storage-solar-guide",
  "commercial-solar-somerset",
  "epdm-flat-roofing-guide",
  "lead-flashing-repair-guide",
  "new-roof-complete-guide",
  "solar-panels-old-house",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/roofing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/solar`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/quote`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const locationRooferPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/roofer/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationRoofRepairPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/roof-repair/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locationSolarPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/solar-panels/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locationEmergencyPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/emergency-roofer/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviceDetailPages: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: `${base}/services/${service}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPostPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [
    ...corePages,
    ...locationRooferPages,
    ...locationRoofRepairPages,
    ...locationSolarPages,
    ...locationEmergencyPages,
    ...serviceDetailPages,
    ...blogPostPages,
  ];
}
