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

<p>
    The purpose of this demo is to determine whether or not the use of a design system helps to improve the user experience for the end user.
    Before the experiment, the users do not know which demo they are using. So they are not influenced in advance. 
</p>
<p>
    To test the demo properly, I ask you to do the following task:
</p>
<ol>
    <li>
        Navigate to the data table with records from different companies.
    </li>
    <li>
        Find the action to create a new data entry
    </li>
    <li>
        Fill out the form and submit a new entry.
    </li>
</ol>
<p>
    When the record is successfully added, the browser will automatically download a file. Please send me this file via email or Slack.
</p>
<p>
    When you are ready to start the test and have no further questions, click on "Start" to begin the test.
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

    ol {
        font-weight: bold;
    }
</style>