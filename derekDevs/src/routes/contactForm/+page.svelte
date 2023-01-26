<script>
// @ts-nocheck

    const openSourceLibraryPic = new URL('/static/images/opensource.png', import.meta.url).href
    const meetingPic = new URL('../images/meeting.png', import.meta.url).href
    const aboutMePic = new URL('../images/computerPic.png', import.meta.url).href
    const thisSitePic = new URL('../images/thissite.png', import.meta.url).href
    const farewellPic = new URL('../images/goodbye.png', import.meta.url).href



</script>

<div class="grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 sm:grid-row-1 md:grid-row-2 lg:grid-row-3 p-2 gap-4">
  
<div class="card lg:card-side bg-base-100 shadow-xl card-body image-full">
    <figure>
      <img src="{meetingPic}" alt="Album"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">Let's get in touch</h2>
<ul class="list-disc">
  <li>Email: derek@derekdevs.com</li>
  <li>Phone: 940-594-6143</li>
</ul>
</div>
</div>
  <div class="card lg:card-side bg-base-100 shadow-xl card-body image-full">
    <figure>
      <img src="{aboutMePic}" alt="Album"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">About Me</h2>
      <p>I am a Full-Stack Web Developer looking to improve my community and workplace every day. I enjoy taking on new challenges and staying on the bleeding edge of technology. I work with the following languages:</p>
      <ul class="list-disc">
        <li>
        Javascript
        </li>
        <li>
        Typescript
        </li>
        <li>
        HTML
        </li>
        <li>
        CSS
        </li>
        <li>
        Tailwind CSS
        </li>
        <li>
        Svelte
        </li>
        <li>
        Sveltekit
        </li>
        <li>
        React
        </li>
      </ul>
    </div>
  </div>
    <div class="card lg:card-side bg-base-100 shadow-xl card-body image-full">
      <figure>
        <img src="{thisSitePic}" alt="Album"/>
      </figure>
    <div class="card-body">
      <h2 class="card-title">About This Site</h2>
      <p>This site was built using a lean tech stack, and uses 100% AI generated artwork, working with the stable diffusion model Midjourney. Daisy UI is the Tailwind CSS UI Library used, and Sveltekit also makes an appearance.</p>
    </div>
  </div>
</div>
<div class="divider p-5">Thank you!</div>

<div class="p-2">
  <div class="card card-side bg-base-100 shadow-xl">
    <figure><img src="{farewellPic}" alt="Movie"/></figure>
    <div class="card-body">
      <h2 class="card-title">Thank you for visiting.</h2>
      <p>Click the button below to return to the homepage.</p>
      <div class="card-actions justify-start">
        <button class="btn btn-primary" onclick="location.href='/';">Home</button>      
      </div>
    </div>
  </div>
</div>
