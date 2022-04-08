<script lang="ts">
import { Navigate,Route } from "svelte-router-spa";
export let currentRoute;

    
</script>
<saas-navbar>
	<saas-navbar-item><Navigate to="/main/home">Home</Navigate></saas-navbar-item>
    <saas-navbar-item><Navigate to="/main/data">Table</Navigate></saas-navbar-item> 
</saas-navbar>
<main>
    <Route {currentRoute}></Route>
</main>
<style>
	
	
	main {
		text-align: center;
		max-width: 1200px;
		margin: 0 auto;
        overflow-y: auto;
        height: calc(100vh - var(--navbar-height));
	}

	
	
</style>