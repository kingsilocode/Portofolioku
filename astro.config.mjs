import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  
  image: {
    domains: ["avatars.githubusercontent.com"]
  },
});
