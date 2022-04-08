import type { Route } from "svelte-router-spa/types/components/router";
import Home from "./Home.svelte";
import Main from "./Main.svelte";
import Data from "./Data.svelte";
/**
 * https://www.npmjs.com/package/svelte-router-spa
 */
const routes: Route[] = [
  {
    name: "main",
    component: Main,
    nestedRoutes: [
      { name: "home", component: Home },
      { name: "data", component: Data },
      {
        name: "",
        redirectTo: "main/home",
      },
    ],
  },
  {
    name: "/",
    redirectTo: "main/home",
  },
];

export { routes };
