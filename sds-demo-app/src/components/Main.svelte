<script lang="ts">
import { Navigate,Route } from "svelte-router-spa";
export let currentRoute;

    
</script>
<saas-navbar>
	<img src="https://avatars3.githubusercontent.com/u/2159051?v=4" slot="logo" alt="Logo">
	<saas-navbar-item><Navigate to="/main/home">Home</Navigate></saas-navbar-item>
    <saas-navbar-item><Navigate to="/main/data">Companies</Navigate></saas-navbar-item> 
</saas-navbar>
<saas-content>
		<Route {currentRoute}></Route>
</saas-content>