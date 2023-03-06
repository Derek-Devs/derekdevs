<script lang="ts">
  const openSourceLibraryPic = new URL('/static/images/heropatterns.PNG', import.meta.url).href
  const unarchivedClothingPic = new URL('/static/images/website.PNG', import.meta.url).href
  const portfolioPic = new URL('/static/images/screenshotcontact.PNG', import.meta.url).href
  const webDevTeam = new URL('/static/images/webdevteam.png', import.meta.url).href
</script>
<svelte:head>
    <title>Web Development Portfolio</title> 
</svelte:head>

<div class="divider p-2">Portfolio Overview</div>

<div class="p-5 rounded-lg">
    <div class="hero-content flex-col lg:flex-row">
      <img src="{webDevTeam}" alt="A team working on a project together in a warm color pallet" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold bg-gradient-to-tr from-primary to-secondary bg-clip-text">Check out these Web Dev Projects!</h1>
          <p class="py-6">From full-stack website development to smaller scale, niche plugins</p>
          <button class="btn btn-primary" onclick="location.href='/contactForm';">Contact Information</button>
        </div>
    </div>
  </div>

  <div class="divider p-2">Projects</div>


<div class="grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 sm:grid-row-1 md:grid-row-2 lg:grid-row-3 p-2 gap-4">
    <!-- Portfolio Section-->
      <div class="card w-full bg-base-100 shadow-xl image-full card-body">
        <figure><img src="{portfolioPic}" alt="A screenshot of a portfolio website." /></figure>
        <div class="card-body">
          <h2 class="card-title justify-center">Open Development Portfolio Website</h2>
          <p>Developed an entirely open source portfolio website using Javascript, Typescript, CSS, HTML, Sveltekit, Vite, NodeJS and other technologies.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" onclick="location.href='https://github.com/Derek-Devs/derekdevs';">View the repository</button>
          </div>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl image-full card-body">
        <figure><img src="{openSourceLibraryPic}" alt="A screenshot of a CSS pattern framework plugin." /></figure>
        <div class="card-body">
          <h2 class="card-title justify-center">Tailwind CSS Library</h2>
          <p>Contributed to an Open Source Tailwind CSS Library for using the Hero Patterns you see on this website</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" onclick="location.href='https://github.com/svengau/tailwindcss-hero-patterns/pull/5';">View Pull Request</button>
          </div>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl image-full card-body">
        <figure><img src="{unarchivedClothingPic}" alt="A screenshot of a clothing webstore." /></figure>
        <div class="card-body">
          <h2 class="card-title justify-center">Clothing Webstore</h2>
          <p>Created a webstore for a local clothing brand built using a popular CMS and minimalist design features. Also utilized digital design software such as Photoshop.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" onclick="location.href='https://www.unarchived.us/';">Check it out</button>
          </div>
        </div>
      </div>
    </div>

