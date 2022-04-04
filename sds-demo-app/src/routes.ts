import type { Route } from "svelte-router-spa/types/components/router";
import Home from "./Home.svelte";
/**
 * https://www.npmjs.com/package/svelte-router-spa
 */
const routes: Route[] = [{ name: "/", component: Home }];

export { routes };
