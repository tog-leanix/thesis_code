<script lang="ts">
	import { Navigate,Route } from "svelte-router-spa";
	export let currentRoute: any;
    
</script>
<nav>
	<img src="https://avatars3.githubusercontent.com/u/2159051?v=4" alt="Logo">
	<ul>
		<li><Navigate styles="nav-item"  to="/main/home">Home</Navigate></li>
		<li><Navigate styles="nav-item" to="/main/data">Companies</Navigate></li>
	</ul>
</nav>
<div class="content">
	<main>
		<Route {currentRoute}></Route>
	</main>
</div>
<style>
	nav {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		background: var(--primary-color);
		height: 40px;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	ul li {
		padding: 0 8px;
		line-height: 40px;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	main {
		max-width: 800px;
		width: 100%;
		padding: 8px;
	}
	
</style>