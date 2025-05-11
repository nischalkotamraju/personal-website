import { projects } from "@/data/projects";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap = [
    {
      url: "https://nischalkotamraju.netlify.app/",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
  ] as MetadataRoute.Sitemap;

  sitemap.push(
    ...projects.map((project) => ({
      url: `https://nischalkotamraju.netlify.app/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  );

  return sitemap;
}
