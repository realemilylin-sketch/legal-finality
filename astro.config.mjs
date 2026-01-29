// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://legalfinality.com",
  trailingSlash: "ignore",

  integrations: [
    starlight({
      title: "Legal Finality",
      description:
        "A reference definition of legal finality as an irreversible state in legal and procedural systems.",

      plugins: [starlightThemeFlexoki()],

      sidebar: [
        { label: "Definition", link: "/" },
      ],
    }),

    sitemap(),
  ],
});
