import { defineConfig } from "vite";

export default defineConfig({
  test: {
    sequence: {
      shuffle: true,
    },
    setupFiles: ["vitest.setup.ts"],
  },
});
