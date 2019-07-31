<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 1200px;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    padding: 20px;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<footer>
  <small>
    Content and images by
    <a
      href="https://bulbapedia.bulbagarden.net"
      target="_blank"
      rel="noopener noreferrer">
      Bulbapedia
    </a>
  </small>
</footer>
