<script lang="ts">
  const collage = new URL('/static/images/collage.png', import.meta.url).href

</script>

<svelte:head>
    <title>Data Analytics Portfolio</title> 
</svelte:head>

<div class="divider p-2">Data Analysis Portfolio Overview</div>

<div class="p-5 rounded-lg">
  <div class="hero-content flex-col lg:flex-row">
    <img src="{collage}" alt="Many different brands logos such as Nestle and Bodyarmor grouped together" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold bg-gradient-to-tr from-primary to-secondary bg-clip-text">Data Analysis Clients</h1>
        <div class="pt-2 pb-2 pl-7">
            <ul class="list-disc">
                <li>Nestle</li>
                <li>Body Armor</li>
                <li>Park West Gallery</li>
                <li>Altium Packaging</li>
                <li>Solo Stove</li>
                <li>Fortress Building Products</li>
                <li>Geary Pacific Supply</li>
                <li>Big Easy Bucha</li>
                <li>CL Industries</li>
                <li>Z Grills</li>
                <li>And more!</li>

            </ul>
        </div>
        <button class="btn btn-primary" onclick="location.href='/contactForm';">Contact Information</button>
      </div>
  </div>
</div>

<div class="divider p-2">Logistics Quoting Statistics</div>

<div class="grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 sm:grid-row-1 md:grid-row-2 lg:grid-row-3 p-2 gap-4">
    <div class="stats stats-vertical lg:stats-horizontal shadow col-span-3">
        <div class="stat">
        <div class="stat-title">Quotes</div>
        <div class="stat-value">~27,500</div>
        <div class="stat-desc">June 2020 - Present</div>
        </div>
                
        <div class="stat">
        <div class="stat-title">Average Quote Return Time</div>
        <div class="stat-value">7 Minutes</div>
        <div class="stat-desc">Down 3 Minutes from 2021 (42.86%)</div>
        </div>
                
         <div class="stat">
        <div class="stat-title">On-Time Delivery Percentage</div>
        <div class="stat-value">95%+</div>
        <div class="stat-desc">Up 3% from 2020</div>
        </div>
    </div>   
</div>

<div class="divider p-2">More projects coming soon!</div>
