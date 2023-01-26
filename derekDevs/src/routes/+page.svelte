<script lang="ts">
// @ts-nocheck
  const openSourceLibraryPic = new URL('images/opensource.png', import.meta.url).href
  const unarchivedClothingPic = new URL('images/wizards.png', import.meta.url).href
  const profilePic = new URL('images/pfp.png', import.meta.url).href
  const portfolioPic = new URL('images/portfolio.png', import.meta.url).href
  const artistPic = new URL('images/artist.png', import.meta.url).href


// import { request, gql } from 'graphql-request'

// const query = gql`
// {
//   username {
//     userProblemsSolved
//     allQuestionsCount
//     problemsSolvedBeatsStats
//     difficulty
//     percentage
//     itStatsGlobal
//     acSubmissionsNum
//   }
//   variables: {
//     username: DerekDevs
//   }
// }
// `
// request('https://leetcode.com/graphql', query).then((data) => console.log(data))


</script>

<div class="divider p-5">Welcome</div>
<div class="p-5 rounded-lg">
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="{artistPic}" alt="" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Welcome to DerekDevs.com</h1>
      <p class="py-6">My name is Derek. Scroll down to view my projects, or click the button below to get my contact info.</p>
      <button class="btn btn-primary" onclick="location.href='/contactForm';">Get Started</button>
    </div>
  </div>
</div>
</div>
<!-- <div class="grid-cols-2 grid-row-1 grid-flow-row-dense">
  <div class="p-5 rounded">
    <div class="hero min-h-screen p-5 rounded-md">
      <figure><img src="{artistPic}" alt="A man with curly hair creates artwork in a bedroom at night." /></figure>
      <div class="hero-overlay bg-opacity-60 rounded"></div>
      <div class="hero-content text-center text-neutral-content rounded">
        <div class="max-w-md rounded">
          <h1 class="mb-5 text-5xl font-bold">Welcome to my Portfolio Website</h1>
          <p class="mb-5">My name is Derek. Scroll down to view my projects, or click the button below to read more about me and get my contact info.</p>
          <button class="btn btn-primary">Contact.</button>
        </div>
      </div>
    </div>
  </div>
    <div class="p-5 rounded">
    <div class="hero min-h-screen p-5 rounded-md">
      <figure><img src="{artistPic}" alt="A man with curly hair creates artwork in a bedroom at night." /></figure>
      <div class="hero-overlay bg-opacity-60 rounded"></div>
      <div class="hero-content text-center text-neutral-content rounded">
        <div class="max-w-md rounded">
          <h1 class="mb-5 text-5xl font-bold">Welcome to my Portfolio Website</h1>
          <p class="mb-5">My name is Derek. Scroll down to view my projects, or click the button below to read more about me and get my contact info.</p>
          <button class="btn btn-primary">Contact.</button>
        </div>
      </div>
    </div>
  </div>
</div> -->
<div class="divider p-5">Portfolio</div>

<div class="grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 sm:grid-row-1 md:grid-row-2 lg:grid-row-3 p-2 gap-4">
<!-- Portfolio Section-->
  <div class="card w-full bg-base-100 shadow-xl image-full card-body">
    <figure><img src="{portfolioPic}" alt="A man with curly hair codes at a computer with his team" /></figure>
    <div class="card-body">
      <h2 class="card-title justify-center">Open Development Portfolio Website</h2>
      <p>Developed an entirely open source portfolio website using Javascript, Typescript, CSS, HTML, Sveltekit, Vite, NodeJS and other technologies.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick="location.href='https://github.com/Derek-Devs/derekdevs';">View the repository</button>
      </div>
    </div>
  </div>
  <div class="card w-full bg-base-100 shadow-xl image-full card-body">
    <figure><img src="{openSourceLibraryPic}" alt="A laptop sits next to a recently used paint brush kit" /></figure>
    <div class="card-body">
      <h2 class="card-title justify-center">Tailwind CSS Library</h2>
      <p>Contributed to an Open Source Tailwind CSS Library for using the Hero Patterns you see on this website</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick="location.href='https://github.com/svengau/tailwindcss-hero-patterns';">View the Repository</button>
      </div>
    </div>
  </div>
  <div class="card w-full bg-base-100 shadow-xl image-full card-body">
    <figure><img src="{unarchivedClothingPic}" alt="Three wizards are making clothing" /></figure>
    <div class="card-body">
      <h2 class="card-title justify-center">Clothing Webstore</h2>
      <p>Created a webstore for a local clothing brand built using a popular CMS and minimalist design features. Also utilized digital design software such as Photoshop.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick="location.href='https://www.unarchived.us/';">Check it out</button>
      </div>
    </div>
  </div>
</div>

<!-- <div class="divider">Statistics</div> -->

<!-- Stats Section-->
<!-- <div class="p-2">
<div class="stats shadow-xl stats-vertical lg:stats-horizontal p-2 grid">
  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
          </div>
    <div class="stat-title">Leetcode Problems Solved</div>
    <div class="stat-value text-primary">25.6K</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">Page Views</div>
    <div class="stat-value text-secondary">2.6M</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img src="{profilePic}" alt="The website owner in a suit."/>
        </div>
      </div>
    </div>
    <div class="stat-value">86%</div>
    <div class="stat-title">Tasks done</div>
    <div class="stat-desc text-secondary">31 tasks remaining</div>
  </div>
</div>
</div> -->

<div class="divider p-5">Want to get in touch?</div>

  <!-- Code snippit section -->
<div class="p-2 rounded">
  <div class="container mx-auto bg-repeat heropattern-topography-inherit p-5 rounded-md max-w-full">
    <div class="mockup-code w-1/2 mx-auto max-w-s">
      <pre data-prefix="$"><code>pnpm i <a class="link link-secondary" href="/contactForm">contactMyDeveloper</a></code></pre> 
      <!-- <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
      <pre data-prefix=">" class="text-success"><code>Done!</code></pre> -->
    </div>
</div>
</div>

