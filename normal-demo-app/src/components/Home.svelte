<script lang="ts">
import { navigateTo } from "svelte-router-spa";
import SvelteButton from "./Button.svelte";


    let label = 'My Label';
    const header = {
        id: '#',
        title: 'Title',
    }
    const myArray =[{title: 'Hello World', id:1}];

    const handleClick = (event)=>{
        console.log(event);
        navigateTo('/data')
        label = 'Clicked';
    }
</script>
<h1 class="title">Hello!</h1>

<SvelteButton on:click={handleClick}>{label}</SvelteButton>

