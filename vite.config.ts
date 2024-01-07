import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({
      emitCssInSsr: true,
      identifiers: ({ hash }) => `zoomies_${hash}`,
    }),
    dts({
      include: ["lib"],
      insertTypesEntry: true,
      exclude: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.spec.tsx", "src"],
      copyDtsFiles: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "ZoomiesUI",
      formats: ["es", "umd"],
      fileName: (format) => `zoomies-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    sourcemap: true,
  },
});
