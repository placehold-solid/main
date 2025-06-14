import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import vitePluginDevtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), vitePluginDevtoolsJson()],
  ssr: {
    noExternal: ["gsap", "@gsap/react"],
  },
  server: {
    allowedHosts: ["blockdev.reiyan.space"],
  },
});
