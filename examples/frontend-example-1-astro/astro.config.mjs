import { loadEnv } from "vite";
// @ts-check
import { defineConfig } from 'astro/config';

const { BASE_PATH } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  base: BASE_PATH,
});
