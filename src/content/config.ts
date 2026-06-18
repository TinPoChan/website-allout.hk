import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogs = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blogs",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      summary: z.string(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      coverImage: image().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      summary: z.string(),
      draft: z.boolean().default(false),
      location: z.string().optional(),
      size: z.string().optional(),
      type: z.array(z.string()).default([]),
      // videoUrl: z.string().url().optional(),
      youtubeId: z.string().optional(),
      coverImage: image().optional(),
      gallery: z.array(image()).default([]),
      details: z
        .array(
          z.object({
            title: z.string(),
            items: z.array(z.string()),
          })
        )
        .default([]),
    }),
});

export const collections = { blogs, projects };
