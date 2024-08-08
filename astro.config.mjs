import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: "https://proplansmart.hr",
  i18n: {
    defaultLocale: "hr_HR",
    locales: ["en", "hr_HR"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
