<script context="module">
  import blocksToHtml from "@sanity/block-content-to-html";
  import client from "../../sanityClient";
  import serializers from "../../components/serializers";

  export async function preload({ params }) {
    const { slug } = params;
    const filter = '*[_type == "post" && slug.current == $slug][0]';
    const projection = `{
      ...,
      "image": mainImage.asset -> url,
      "authors": authors[].author -> {
        name,
        "alt": image.alt, 
        "image": image.asset -> url,
      },
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            author->
          }
        }
      }
    }`;

    const query = filter + projection;
    const post = await client
      .fetch(query, { slug })
      .catch(err => this.error(500, err));
    return {
      post: {
        ...post,
        body: blocksToHtml({
          blocks: post.body,
          serializers,
          ...client.clientConfig
        })
      }
    };
  }
</script>

<script>
  export let post;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/

  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
    position: relative;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(pre::after) {
    content: attr(data-language);
    top: 0;
    position: absolute;
    right: 0;
    background: #ff3e00;
    color: #fff;
    padding: 2px;
    border-radius: 2px;
  }

  .content :global(img) {
    display: block;
    max-width: 100%;
  }

  .content :global(figure) {
    margin: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .post-icon {
    height: 300px;
    width: 300px;
  }

  .authors {
    display: flex;
  }

  .authors > *:not(:first-child) {
    margin-left: 40px;
  }

  .author {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .author-name {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  .author-icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
    }

    .authors {
      flex-direction: column;
    }

    .authors > *:not(:first-child) {
      margin-left: 0;
    }

    .author-name {
      font-size: 12px;
    }
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="header">
  <div class="post-info">
    <h1>{post.title}</h1>

    <div class="authors">
      {#each post.authors as author}
        <div class="author">
          <img class="author-icon" src={author.image} alt={author.alt} />
          <span class="author-name">{author.name}</span>
        </div>
      {/each}
    </div>
  </div>
  <img class="post-icon" src={post.image} alt={post.title} />
</div>

<div class="content">
  {@html post.body}
</div>
