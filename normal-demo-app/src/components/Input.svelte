<script lang="ts">
    export let value: any;
    export let label = '';
</script>
<label>
    {label}
    <input type="text" bind:value>
</label>
<style>
    label {
        display: block;
    }

    input {
        border-radius: 0;
        padding: 8px 4px;
        border: none;
        border-bottom: solid 1px black;
        background-color: white;
    }

    input:focus {
        padding-bottom: 7px;
        border-bottom: solid 2px var(--primary-color);
        background-color: white;
        outline: none;
    }

</style>