import type { MetadataRoute } from "next";

const BASE = "https://pktjapan.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/courses",
    "/news",
    "/contact",
    "/login",
    "/register",
    "/privacy-policy",
  ];
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
