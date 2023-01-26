import adapter from '@sveltejs/adapter-netlify';
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
    adapter: adapter({
      // if true, will create a Netlify Edge Function rather
      // than using standard Node-based functions
      edge: false,
 
      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app.
      // if `edge` is true, this option cannot be used
      split: false
    })
  },
  preprocess: vitePreprocess()
};

export default config;
