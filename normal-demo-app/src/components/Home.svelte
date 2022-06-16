<script lang="ts">


    let label = 'My Label';
    const header = {
        id: '#',
        title: 'Title',
    }
    const myArray =[{title: 'Hello World', id:1}];

    const handleClick = ()=>{
        label = 'You clicked this button';
    }
</script>
<h1 class="title">Hello welcome to my demo!</h1>
<p>This demo helps to identify differneces in user experiences when having a design system in place. As a user you won't knwo if this system is supported by one or not. The goal for me is to watch closely how the user is interacting with this demo. But no worries there isn' a right and wrong way. With the gathered data I plan to evaluate the hypothesis of my thesis. So thank you for helping me and hvae fun.</p>
<p>To distract the user a bit I've created this landing page which doesn't help in any case but looks nicely and has a wall of text and some random images. This might distract users and creates different interaction patterns. Because I am out of ideas what I could put at thsi landing page more you will see random images of cats and paragraphs consisting of lorem ipsum.</p>
<img class="right" src="https://cataas.com/cat/cute?type=md" alt="cat">
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro vero hic, ipsa dolorum qui eveniet, mollitia enim dicta dolores reprehenderit fuga asperiores at repellendus aliquam iusto quas voluptatem debitis. Tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores commodi hic cum facilis ea placeat voluptas magni, suscipit nemo tenetur dignissimos, nihil debitis praesentium libero dicta natus dolorum in?</p>
<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ut officiis inventore quae expedita sunt laudantium ab. Voluptatibus beatae, culpa labore neque assumenda recusandae. Rerum nesciunt laborum mollitia perspiciatis quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores commodi hic cum facilis ea placeat voluptas magni, suscipit nemo tenetur dignissimos, nihil debitis praesentium libero dicta natus dolorum in?</p><p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ut officiis inventore quae expedita sunt laudantium ab. Voluptatibus beatae, culpa labore neque assumenda recusandae. Rerum nesciunt laborum mollitia perspiciatis quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores commodi hic cum facilis ea placeat voluptas magni, suscipit nemo tenetur dignissimos, nihil debitis praesentium libero dicta natus dolorum in?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores commodi hic cum facilis ea placeat voluptas magni, suscipit nemo tenetur dignissimos, nihil debitis praesentium libero dicta natus dolorum in?</p>
<img src="https://cataas.com/cat/nice?type=md" alt="cat">
<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ut officiis inventore quae expedita sunt laudantium ab. Voluptatibus beatae, culpa labore neque assumenda recusandae. Rerum nesciunt laborum mollitia perspiciatis quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores commodi hic cum facilis ea placeat voluptas magni, suscipit nemo tenetur dignissimos, nihil debitis praesentium libero dicta natus dolorum in?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores commodi hic cum facilis ea placeat voluptas magni, suscipit nemo tenetur dignissimos, nihil debitis praesentium libero dicta natus dolorum in?</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora libero maiores fugit nisi omnis quisquam illum iusto esse ab, beatae voluptatem ipsum iste modi, quas rerum placeat blanditiis repellat odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores commodi hic cum facilis ea placeat voluptas magni, suscipit nemo tenetur dignissimos, nihil debitis praesentium libero dicta natus dolorum in?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores commodi hic cum facilis ea placeat voluptas magni, suscipit nemo tenetur dignissimos, nihil debitis praesentium libero dicta natus dolorum in?</p>
<img  class="right"  src="https://cataas.com/cat/fluffy?type=md" alt="cat">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita obcaecati consequatur et saepe sequi tempore maiores est. Praesentium explicabo id ullam voluptates excepturi dicta rem minima nam magni, neque laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sint expedita iure recusandae necessitatibus aspernatur quos dolores atque consequatur? Et illo ad nemo adipisci aperiam possimus placeat necessitatibus dolores dignissimos. Quam dolores commodi hic cum facilis ea placeat voluptas magni, suscipit nemo tenetur dignissimos, nihil debitis praesentium libero dicta natus dolorum in?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores commodi hic cum facilis ea placeat voluptas magni, suscipit nemo tenetur dignissimos, nihil debitis praesentium libero dicta natus dolorum in?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores commodi hic cum facilis ea placeat voluptas magni, suscipit nemo tenetur dignissimos, nihil debitis praesentium libero dicta natus dolorum in?</p>
<!-- <SvelteButton on:click={handleClick}>{label}</SvelteButton> -->

<style>
    p {
        font-size: 1.5rem;
        margin: 1.5rem 0;
    }
    img {
        margin: 0 1.5rem;
        height: 300px;
        float: left;
    }


    img.right {
        float: right;

    }
</style>