import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import activeHandout from "@toshikurauchi/active-handout";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [
    activeHandout({
      title: "Computação Embarcada",
      description:
        "Sistemas que movem o mundo!",
      auth: true,
      useEmailAuth: false,
      useGoogleAuth: true,
      useGitHubAuth: false,
      telemetry: true,
      lang: "pt",
      authPageImage: "/img/insper.png",
    }),
  ],
  vite: {
    server: {
      fs: {
        // We use this for development
        allow: ["../.."],
      },
    },
  },
});
