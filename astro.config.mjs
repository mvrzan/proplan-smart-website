import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "hr_HR",
    locales: ["en", "hr_HR"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
