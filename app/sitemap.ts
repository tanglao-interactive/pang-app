import type { MetadataRoute } from "next";
import { products, siteUrl } from "../lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8
    }))
  ];
}
