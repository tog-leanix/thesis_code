<script lang="ts">
import { navigateTo } from "svelte-router-spa";
import { addMarker } from "../helpers/timing.helpers";



function startJourney(){
    addMarker('start');
    navigateTo('main/home')
}
</script>
<main>
    <h1>Thank you for participating!</h1>
    
    <p>Here will be the description what this test is about.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ad ducimus necessitatibus praesentium qui asperiores consectetur tempora ab similique nam autem beatae magnam quam id doloribus? Sint id explicabo exercitationem!

    </p>
    <button on:click={startJourney}>Start</button>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }
    p {
        white-space: pre-line;
    }

    p, h1 {
        width: 1000px;
        text-align: center;
    }

    button {
        font-weight: bolder;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
</style>