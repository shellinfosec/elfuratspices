import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    tanstackStart(),
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    viteReact(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { lossless: true },
    }),
    nitro({ 
      preset: 'node-server',
      prerender: {
        crawlLinks: true,
        routes: ['/']
      },
      output: {
        dir: './dist',
        serverDir: './dist/server',
        publicDir: './dist/public'
      }
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
