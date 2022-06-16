<script lang="ts">
    export let header: any = {};
    export let data: any [] = [];
</script>

<table>
    <thead>
        <tr>
        {#each Object.keys(header) as key}
        <th>{header[key]}</th>
        {/each}
        </tr>
    </thead>
    <tbody>
        {#each data as entry}
        <tr>
        {#each  Object.keys(header) as key}
        <td>{entry[key]}</td>
        {/each}
        </tr>        
        {/each}
</tbody>
</table>

<style>
    table {
        border-collapse: collapse;
    }

    thead {
        background-color: var(--primary-color);
        height: 32px;
    }

    tbody tr:nth-child(2n) {
        background-color: #eee;
    }

    tbody tr:nth-child(2n+1) {
        background-color: white;
    }

    td {
        padding: 0 8px;
    }
</style>