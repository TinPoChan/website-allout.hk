// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://allout.hk",
  output: "server",

  adapter: cloudflare({
    imageService: "compile",
    prerenderEnvironment: "node",
  }),

  image: {
    domains: ["i.ytimg.com"],
  },

  integrations: [sitemap()],
});
