import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.chikitsamitra.com";

  return [
    "",
    "/telemedicine",
    "/patients",
    "/partnership",
    "/insurance",
    "/about",
    "/contact",
    "/design-system"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
