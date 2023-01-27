import { c as create_ssr_component, b as add_attribute } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const openSourceLibraryPic = new URL("images/opensource.png", import.meta.url).href;
  const unarchivedClothingPic = new URL("images/wizards.png", import.meta.url).href;
  new URL("images/pfp.png", import.meta.url).href;
  const portfolioPic = new URL("images/portfolio.png", import.meta.url).href;
  const artistPic = new URL("images/artist.png", import.meta.url).href;
  return `<div class="${"divider p-5"}">Welcome</div>
<div class="${"p-5 rounded-lg"}"><div class="${"hero min-h-screen bg-base-200"}"><div class="${"hero-content flex-col lg:flex-row"}"><img${add_attribute("src", artistPic, 0)} alt="${""}" class="${"max-w-sm rounded-lg shadow-2xl"}">
    <div><h1 class="${"text-5xl font-bold"}">Welcome to DerekDevs.com</h1>
      <p class="${"py-6"}">My name is Derek. Scroll down to view my projects, or click the button below to get my contact info.</p>
      <button class="${"btn btn-primary"}" onclick="${"location.href='/contactForm';"}">Get Started</button></div></div></div></div>

<div class="${"divider p-5"}">Portfolio</div>

<div class="${"grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 sm:grid-row-1 md:grid-row-2 lg:grid-row-3 p-2 gap-4"}">
  <div class="${"card w-full bg-base-100 shadow-xl image-full card-body"}"><figure><img${add_attribute("src", portfolioPic, 0)} alt="${"A man with curly hair codes at a computer with his team"}"></figure>
    <div class="${"card-body"}"><h2 class="${"card-title justify-center"}">Open Development Portfolio Website</h2>
      <p>Developed an entirely open source portfolio website using Javascript, Typescript, CSS, HTML, Sveltekit, Vite, NodeJS and other technologies.</p>
      <div class="${"card-actions justify-end"}"><button class="${"btn btn-primary"}" onclick="${"location.href='https://github.com/Derek-Devs/derekdevs';"}">View the repository</button></div></div></div>
  <div class="${"card w-full bg-base-100 shadow-xl image-full card-body"}"><figure><img${add_attribute("src", openSourceLibraryPic, 0)} alt="${"A laptop sits next to a recently used paint brush kit"}"></figure>
    <div class="${"card-body"}"><h2 class="${"card-title justify-center"}">Tailwind CSS Library</h2>
      <p>Contributed to an Open Source Tailwind CSS Library for using the Hero Patterns you see on this website</p>
      <div class="${"card-actions justify-end"}"><button class="${"btn btn-primary"}" onclick="${"location.href='https://github.com/svengau/tailwindcss-hero-patterns';"}">View the Repository</button></div></div></div>
  <div class="${"card w-full bg-base-100 shadow-xl image-full card-body"}"><figure><img${add_attribute("src", unarchivedClothingPic, 0)} alt="${"Three wizards are making clothing"}"></figure>
    <div class="${"card-body"}"><h2 class="${"card-title justify-center"}">Clothing Webstore</h2>
      <p>Created a webstore for a local clothing brand built using a popular CMS and minimalist design features. Also utilized digital design software such as Photoshop.</p>
      <div class="${"card-actions justify-end"}"><button class="${"btn btn-primary"}" onclick="${"location.href='https://www.unarchived.us/';"}">Check it out</button></div></div></div></div>






<div class="${"divider p-5"}">Want to get in touch?</div>

  
<div class="${"p-2 rounded"}"><div class="${"container mx-auto bg-repeat heropattern-topography-inherit p-5 rounded-md max-w-full"}"><div class="${"mockup-code w-1/2 mx-auto max-w-s"}"><pre data-prefix="${"$"}"><code>pnpm i <a class="${"link link-secondary"}" href="${"/contactForm"}">contactMyDeveloper</a></code></pre> 
      </div></div></div>`;
});
export {
  Page as default
};
