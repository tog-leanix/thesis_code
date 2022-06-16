<script lang="ts">
    export let disabled = false;
</script>
<button on:click {disabled}>
    <slot></slot>
</button>
<style>
    button {
      padding: 8px 16px;
      color: var(--text-color);
      background: var(--primary-color, #ccc);
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:focus-visible {
        outline: auto;
    }

    button:disabled {
        background: #ccc;
        
    }
</style>