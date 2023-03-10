<script lang="ts">
  const collage = new URL('/static/images/collage.png', import.meta.url).href
  const originStateData = new URL('/static/images/originstatedata.PNG', import.meta.url).href
  const codesample = new URL('/static/images/codesample.png', import.meta.url).href
  const sqlExample = new URL('/static/images/sqlexample.png', import.meta.url).href



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
        <button class="btn btn-primary" onclick="location.href='/contactForm';">Contact Me</button>
      </div>
  </div>
</div>

<div class="divider p-2">Data Analytics Projects</div>

<div class="grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 sm:grid-row-1 md:grid-row-2 lg:grid-row-3 p-2 gap-4">

  <div class="card lg:card-side bg-base-100 shadow-xl card-body image-full">
        <figure>
          <img src="{codesample}" alt="A sample of code"/>
        </figure>
      <div class="card-body">
        <h2 class="card-title">Calculating Miles & Travel Time</h2>
        <p>When working with logistics data, it would often become neccessary to quickly and effectively calculate the mileage or time to travel between two points. This automates those two functions, performing them by using Javascript within Google Sheet's Script Feature</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" onclick="location.href='https://github.com/Derek-Devs/google-maps-sheets';">View the repository</button>
        </div>
      </div>
  </div>

  <div class="card lg:card-side bg-base-100 shadow-xl card-body image-full">
    <figure>
      <img src="{originStateData}" alt="A graph showing logistics data"/>
    </figure>
  <div class="card-body">
    <h2 class="card-title">Power BI Data Visualization</h2>
    <p>A snapshot of a PDF export of a data visualization for a logistics client. This data has been altered to protect the client's privacy.</p>
    <div class="card-actions justify-end">
    <button class="btn btn-primary" onclick="location.href='https://i.imgur.com/sfTsUdh.png';">View the snippet</button>
    </div>
  </div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl card-body image-full">
  <figure>
    <img src="{sqlExample}" alt="An SQL Query example"/>
  </figure>
<div class="card-body">
  <h2 class="card-title">SQL Query Example</h2>
  <p>Without revealing customer data, this example shows the kind of SQL Queries I  use on a daily basis. More advanced queries can be completed with a little elbow grease.</p>
  <div class="card-actions justify-end">
  <button class="btn btn-primary" onclick="location.href='https://derekdevs.com/images/sqlexample.png';">View Example</button>
  </div>
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
        <div class="stat-title">Project Success Rate</div>
        <div class="stat-value">98%+</div>
        <div class="stat-desc">Up 3% from 2020</div>
        </div>
    </div>
</div>

