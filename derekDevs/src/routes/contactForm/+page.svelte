<script>
      const openSourceLibraryPic = new URL('/static/images/opensource.png', import.meta.url).href
</script>

<div class="grid grid-rows-4 gap-4 justify-center">
    <div class="form-control w-full max-w-xs">
        <label class="label">
        </label>
        <span class="indicator-item indicator-top indicator-end badge badge-secondary">Name</span>
        <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
        <label class="label">
        </label>
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
        <label class="label">
        </label>
      </div>
    <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">What's up?</span>
        </label>
        <input type="text" placeholder="What's up?" class="input input-bordered w-full max-w-xs" />
        <label class="label">
        </label>
      </div>
      <button class="btn btn-primary">Submit</button>

</div>
