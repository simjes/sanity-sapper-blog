<script>
  import { fly } from "svelte/transition";
  import { getRandomBackground } from "../utils/backgroundUtil.js";

  export let post;
  let visible = false;
  const backgroundColor = getRandomBackground();

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

  .title {
    font-size: 26px;
    margin-bottom: 6px;
  }

  .types {
    font-size: 14px;
    color: #e3e3e3;
  }

  .author {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  .type-icon {
    margin-right: 10px;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 15px;
    background: #111111cc;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    min-height: 70px;
  }

  .post-info > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card:hover > .post-image {
    animation: image-up 1000ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }

  .post-image {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* animation: image-up 1000ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards; */

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
  <div class="card" style="background: {backgroundColor}">
    <img class="post-image" src={post.image} alt={post.title} />

    {#if visible}
      <div transition:fly={{ y: 100, duration: 1000 }} class="post-info">
        <div>
          <h2 class="title">{post.title}</h2>

          <h3 class="types">
            {#each post.types as type}
              <img class="type-icon" src="/{type}.gif" alt="{type} icon" />
            {/each}

          </h3>
        </div>

        <div>
          <img class="author" src={post.author.image} alt={post.author.alt} />
        </div>
      </div>
    {/if}
  </div>
</a>
