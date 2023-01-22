/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage:
      {

      }
    },
  },
  daisyui: {
    themes: ["light", "night"]
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
    require("daisyui")
  ],
}
