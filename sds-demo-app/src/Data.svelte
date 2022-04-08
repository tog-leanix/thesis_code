<script lang="ts">
import { Navigate } from "svelte-router-spa";


const header = {
        id: '#',
        title: 'Title',
    }
    const myArray =[{title: 'Hello World', id:1}];

</script>
<h1>Please put in data here:</h1>
<p>
    <saas-table header={header} data={myArray}></saas-table>
</p>
<Navigate to="/">Back</Navigate>