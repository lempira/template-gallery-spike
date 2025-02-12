/// <reference types="vite/client" />
// @ts-check
import { defineConfig } from 'astro/config';

// Get BASE_PATH from environment variable, fallback to empty string
const basePath = import.meta.env.BASE_PATH || ''

// https://astro.build/config
export default defineConfig({
  base: basePath,
});
