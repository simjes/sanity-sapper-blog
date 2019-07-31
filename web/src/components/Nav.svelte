<script>
  export let segment;
</script>

<style>
  nav {
    display: flex;
    justify-content: flex-end;
    font-size: 11px;
    padding: 16px 20px;
    background: #24243e;
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    margin: 0;
    margin-left: 10px;
    transition: color 250ms ease-in-out, transform 150ms ease;
  }

  .selected,
  a:hover,
  a:focus {
    color: #24d8ff;
  }
</style>

<nav>
  <ul>
    <li>
      <a href="https://simjes.dev" target="_blank" rel="noopener noreferrer">
        Home
      </a>
    </li>

    <li>
      <a
        href="https://simjes.dev/toolbox"
        target="_blank"
        rel="noopener noreferrer">
        Toolbox
      </a>
    </li>

    <li>
      <a
        href="https://simjes.dev/playground"
        target="_blank"
        rel="noopener noreferrer">
        Playground
      </a>
    </li>

    <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="blog">
        Blog
      </a>
    </li>
  </ul>
</nav>
