// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  base: '/yourspace.multi-agent.io/',
  integrations: [vue()],
})
