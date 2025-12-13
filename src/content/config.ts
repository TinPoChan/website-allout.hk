import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(), // 先用 string，之後可以改 z.date()
    summary: z.string(),
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
    location: z.string().optional(),
    size: z.string().optional(),
    type: z.array(z.string()).default([]),
    coverImage: z.string().url().optional(),
    gallery: z.array(z.string().url()).default([]),
  }),
});

export const collections = { blog, projects };
