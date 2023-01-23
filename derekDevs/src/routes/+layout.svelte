<script>
    import "../app.css";
    import { onMount } from 'svelte';
    import {themeChange} from "theme-change"
      onMount(async () => {
        themeChange(false)
})
// must use onMount because we don't want it on SSR.
  </script>
    <div class="navbar bg-base-inherit heropattern-topography-inherit">
      <div class="flex-1">
      <a class="btn btn-primary normal-case text-xl" href="/routes">DerekDevs</a>
    </div>
    <div class="flex-none">
      <label class="swap swap-flip text-3xl justify-end">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" data-toggle-theme="night,light" data-act-class="ACTIVECLASS" />
        <div class="swap-on">🌑</div>
        <div class="swap-off">🌞</div>
      </label>
    </div>
  </div>
  
  <slot />
