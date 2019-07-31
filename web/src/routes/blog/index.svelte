<script context="module">
  import PostPreview from "../../components/PostPreview.svelte";
  import client from "../../sanityClient";
  export function preload({ params, query }) {
    return client
      .fetch(
        `*[_type == "post" && defined(slug.current) && publishedAt < now()]
				{
					title,
					"types": categories[]->title,
					"slug": slug.current,
					"image": mainImage.asset->url,
					"author": authors[0].author->
						{
							"alt": image.alt, 
							"image": image.asset->url
						}
				}
				| order(publishedAt desc)`
      )
      .then(posts => {
        return { posts };
      })
      .catch(err => this.error(500, err));
  }
</script>

<script>
  export let posts;

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
  }

  li {
    list-style: none;
    height: 300px;
    width: 300px;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <li>
      <PostPreview {post} />
    </li>
  {/each}
</ul>
