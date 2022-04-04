<script lang="ts">
    let label = 'My Label';
    const handleClick = (event)=>{
        console.log(event);
        label = 'Clicked';
    }
</script>
<h1>Hello!</h1>
<saas-button label={label} on:click={handleClick}></saas-button>
