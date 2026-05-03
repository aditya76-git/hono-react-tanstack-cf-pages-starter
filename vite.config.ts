import build from "@hono/vite-build/cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import tanstackRouter from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  // Server build only — generates _worker.js
  if (mode === "server") {
    return {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
          // TanStack Router infers isServer from the environment but defaults to the
          // browser variant in server builds, causing createBrowserHistory() to run
          // and crash on `window` (no DOM in Cloudflare Workers).
          // Alias to the explicit server variant which sets isServer = true (non-test)
          // so createMemoryHistory() is used instead.
          "@tanstack/router-core/isServer": path.resolve(
            __dirname,
            "node_modules/@tanstack/router-core/dist/esm/isServer/server.js",
          ),
        } as Record<string, string>,
      },
      ssr: {
        noExternal: [
          "react",
          "react-dom",
          "react/jsx-runtime",
          "@tanstack/react-router",
        ],
      },
      plugins: [
        build({
          entry: "src/server/app.ts",
          outputDir: "./dist",
        }),
      ],
    };
  }

  // Dev + client build — React client bundle + TanStack Router + Hono dev server middleware
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "./dist",
      emptyOutDir: true,
      rollupOptions: {
        input: path.resolve(__dirname, "src/client/main.tsx"),
        output: {
          entryFileNames: "assets/client.js",
          chunkFileNames: "assets/chunks/[name]-[hash].js",
          assetFileNames: "assets/[name][extname]",
        },
      },
    },
    plugins: [
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
        routesDirectory: "src/client/routes",
        generatedRouteTree: "src/client/routeTree.gen.ts",
      }),
      react(),
      tailwindcss(),
      devServer({
        adapter,
        entry: "src/server/app.ts",
        exclude: [
          /.*\.tsx?($|\?)/,
          /.*\.(s?css|less)($|\?)/,
          /.*\.(svg|png|jpe?g|gif|ico|webp)($|\?)/,
          /^\/@.+$/,
          /^\/node_modules\/.*/,
          /^\/index\.html$/,
          /^\/src\/.*/,
        ],
      }),
    ],
  };
});
