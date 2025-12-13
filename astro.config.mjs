// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.allout.hk", // ⚠️ 之後記得換成你正式 domain
  integrations: [sitemap()],
});