<script>
// @ts-nocheck

      const openSourceLibraryPic = new URL('/static/images/opensource.png', import.meta.url).href;
      let submitStatus = "browsing";

      const submitForm = async (/** @type {{ currentTarget: HTMLFormElement | undefined; }} */ data) => {
        submitStatus = "submitting";
        const formData = new FormData(data.currentTarget);

        const res = await fetch("contact.json.ts", {
          method: "POST",
          body: formData,
        });

    const { message } = await res.json();
    submitStatus = message;
  };
</script>

{#if submitStatus == "submitting"}
  <div class="justify center">
    <progress class="progress w-56"> Submitting...</progress>
  </div>

  {:else if submitStatus == "failed"}

  <div class="justify center">
    <div class="tooltip bg-error" data-tip="Sorry about that.">
      <button class="btn btn-error" onclick="location.href='/';">Home</button>
    </div>
  </div>

  {:else if submitStatus == "success"}

  <div class="justify center">
    <div class="tooltip bg-primary" data-tip="Thanks for reaching out!">
      <button class="btn btn-primary" onclick="location.href='/';">Home</button>
    </div>
  </div>

{:else}

  <div class="card lg:card-side bg-base-100 shadow-xl">
    <figure>
      <img src="https://placeimg.com/400/400/arch" alt="Album"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">Let's get in touch</h2>
    <form on:submit|preventDefault="{submitForm}">
      <div class="form-control w-full max-w-xs">
        <label for="" class="label">
          <span class="label-text">What is your name?</span>
        </label>
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" name="name" />
      </div>
      <div class="form-control w-full max-w-xs">
        <label for="" class="label">
          <span class="label-text">What is your email</span>
        </label>
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" name="email"  />
      </div>
      <div class="form-control w-full max-w-xs">
        <label for="" class="label">
          <span class="label-text">How can I help?</span>
        </label>
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" name="message" />
      </div>
      <div class="card-actions justify-start">
        <button class="btn btn-primary">Send</button>
      </div>
    </form>
    </div>
  </div>
{/if}

