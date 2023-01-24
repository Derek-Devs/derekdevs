<script>
  const openSourceLibraryPic = new URL('/static/images/opensource.png', import.meta.url).href
  const unarchivedClothingPic = new URL('/static/images/wizards.png', import.meta.url).href
  const profilePic = new URL('/static/images/pfp.png', import.meta.url).href

  let scroll = 0;
</script>

<svelte:window bind:scrollY={scroll} />

<h1>{scroll}</h1>
<!-- Stats Section-->
<div class="stats stats-vertical lg:stats-horizontal shadow p-2">
  
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

<!-- Portfolio Section-->
</div>
<div class="grid grid-cols-3 gap-4 p-2">
  <div class="card w-96 bg-base-100 shadow-xl image-full card-body col-span-1">
    <figure><img src="{openSourceLibraryPic}" alt="A laptop sits next to a recently used paint brush kit" /></figure>
    <div class="card-body">
      <h2 class="card-title justify-center">Tailwind CSS Library</h2>
      <p>Contributed to an Open Source Tailwind CSS Library for using the Hero Patterns you see on this website</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick="location.href='https://github.com/svengau/tailwindcss-hero-patterns';">View the Repository</button>
      </div>
    </div>
  </div>
  <div class="card w-96 bg-base-100 shadow-xl image-full card-body col-span-1">
    <figure><img src="{unarchivedClothingPic}" alt="Three wizards are making clothing" /></figure>
    <div class="card-body">
      <h2 class="card-title justify-center">Clothing Webstore</h2>
      <p>A simple webstore for a local clothing brand built using a popular CMS and minimalist design features.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick="location.href='https://unarchived.us';">Check it out</button>
      </div>
    </div>
  </div>
</div>

<!-- Code snippit section -->
<div class="container mx-auto bg-repeat heropattern-topography-inherit p-5 rounded-md">
      <div class="mockup-code w-1/2 mx-auto max-w-s">
        <pre data-prefix="$"><code>pnpm i <a class="link" href="/contactForm">addDerekToTeam</a></code></pre> 
        <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
  </div>
</div>