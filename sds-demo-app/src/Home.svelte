<script lang="ts">
import { navigateTo } from "svelte-router-spa";


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

<saas-button label={label} on:click={handleClick}></saas-button>

