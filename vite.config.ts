import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";


import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
    }),
  ],
  resolve: {
    extensions: [".vue", ".js", ".json", ".ts"],
    alias: {"@": resolve(__dirname, "src")},
  },
});
