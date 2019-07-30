<script>
  import { fly } from "svelte/transition";
  import { getRandomBackground } from "../utils/backgroundUtil.js";

  export let post;
  let visible = false;

  function onMouseOver() {
    visible = true;
  }

  function onMouseOut() {
    visible = false;
  }
</script>

<style>
  .card {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .post-info {
    color: white;
    background: #111111cc;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
  }

  .card:hover > .post-image {
    animation: image-up 1000ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }

  .post-image {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    animation: image-down 500ms ease-out forwards;
  }

  @keyframes image-up {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-50px);
    }
  }

  @keyframes image-down {
    from {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>

<a
  on:mouseover={onMouseOver}
  on:mouseout={onMouseOut}
  rel="prefetch"
  href="blog/{post.slug}"
  title={post.title}>
  <div class="card" style="background: {getRandomBackground()}">
    <img class="post-image" src={post.image} alt={post.title} />

    {#if visible}
      <div transition:fly={{ y: 100, duration: 1000 }} class="post-info">
        {post.title}
      </div>
    {/if}
  </div>
</a>
