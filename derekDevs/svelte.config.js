import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { onMount } from 'svelte'
import { themeChange } from 'theme-change'

/** @type {import('@sveltejs/kit').Config} */
onMount(() => {
	themeChange(false)
	// 👆 false parameter is required for svelte
  })
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};

export default config;
