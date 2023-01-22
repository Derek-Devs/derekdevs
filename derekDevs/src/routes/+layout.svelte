<script>
    import "../app.css";
  </script>
    <div class="navbar bg-base-100">
      <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/routes">DerekDevs</a>
    </div>
    <div class="flex-none">
      <label class="swap swap-flip text-xl justify-end">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" />
        <div class="swap-on">🌞</div>
        <div class="swap-off">🌑</div>
      </label>
    </div>
  </div>
  <slot />
