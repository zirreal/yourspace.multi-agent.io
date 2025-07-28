// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/yourspace.multi-agent.io/' : '/',
  integrations: [vue()],
})
