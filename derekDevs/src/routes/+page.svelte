<script lang="ts">
// @ts-nocheck
  const artistPic = new URL('/static/images/artist.png', import.meta.url).href
  const webDev = new URL('/static/images/webdev.png', import.meta.url).href
  const extras = new URL('/static/images/extras.png', import.meta.url).href
  const data = new URL('/static/images/data.png', import.meta.url).href
</script>

<svelte:head>
    <title>Home</title> 
</svelte:head>

<div class="divider p-2">Welcome</div>

<div class="p-5 rounded-lg">
  <div class="hero-content flex-col lg:flex-row">
    <img src="{artistPic}" alt="A man sitting at a desk painting near a window" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold bg-gradient-to-tr from-primary to-secondary bg-clip-text">Welcome to DerekDevs.com</h1>
        <p class="py-6">My name is Derek. Scroll down to select a portfolio, or click the button below to get my contact info.</p>
        <button class="btn btn-primary" onclick="location.href='/contactForm';">Contact Information</button>
      </div>
  </div>
</div>

<div class="divider p-5">Portfolio Overview</div>

<div class="grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 sm:grid-row-1 md:grid-row-2 lg:grid-row-3 p-2 gap-4">
<!-- Portfolio Section-->
  <div class="card w-full bg-base-100 shadow-xl image-full card-body">
    <figure><img src="{webDev}" alt="A man with curly hair programming on a computer." /></figure>
    <div class="card-body">
      <h2 class="card-title justify-center">Web Development Portfolio</h2>
      <p>Take a look at examples of full-stack devlelopment projects I have created.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick="location.href='/webdevelopment';">View</button>
      </div>
    </div>
  </div>
  <div class="card w-full bg-base-100 shadow-xl image-full card-body">
    <figure><img src="{data}" alt="A screenshot of a CSS pattern framework plugin." /></figure>
    <div class="card-body">
      <h2 class="card-title justify-center">Data Analysis Portfolio</h2>
      <p>Projects and tools developed to analyze, visualize, or manipulate data.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick="location.href='/dataanalytics';">View</button>
      </div>
    </div>
  </div>
  <div class="card w-full bg-base-100 shadow-xl image-full card-body">
    <figure><img src="{extras}" alt="A wizard stands in the midst of falling multiclored books." /></figure>
    <div class="card-body">
      <h2 class="card-title justify-center">Extras</h2>
      <p>Programming and data related personal projects pertaining to my hobbies and interests</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick="location.href='/extras';">View</button>
      </div>
    </div>
  </div>
</div>

<div class="divider p-5">Want to get in touch?</div>

  <!-- Code snippit section -->
<div class="p-2 rounded">
  <div class="container mx-auto bg-repeat heropattern-topography-inherit p-5 rounded-md max-w-full">
    <div class="mockup-code w-1/2 mx-auto max-w-s">
      <pre data-prefix="$"><code>pnpm i <a class="link link-secondary" href="/contactform">contactDeveloper</a></code></pre> 
      <!-- <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
      <pre data-prefix=">" class="text-success"><code>Done!</code></pre> -->
    </div>
</div>
</div>

