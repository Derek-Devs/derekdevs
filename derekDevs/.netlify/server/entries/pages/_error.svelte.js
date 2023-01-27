import { c as create_ssr_component } from "../../chunks/index.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"hero min-h-screen bg-base-200"}"><div class="${"hero-content text-center"}"><div class="${"max-w-md"}"><h1 class="${"text-5xl font-bold"}">Error 404</h1>
        <p class="${"py-6"}">Page not found.</p>
        <a href="${"/"}"><button class="${"btn btn-primary"}">Take me home!</button></a></div></div></div>`;
});
export {
  Error as default
};
