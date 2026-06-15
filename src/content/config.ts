import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(), // 先用 string，之後可以改 z.date()
    summary: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    draft: z.boolean().default(false),
    location: z.string().optional(),
    size: z.string().optional(),
    type: z.array(z.string()).default([]),
    videoUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
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

export const collections = { blog, projects };
