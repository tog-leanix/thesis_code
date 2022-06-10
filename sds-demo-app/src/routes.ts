import type { Route } from "svelte-router-spa/types/components/router";
import Home from "./components/Home.svelte";
import Main from "./components/Main.svelte";
import Data from "./components/Data.svelte";
import Start from "./components/Start.svelte";
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
    component: Start,
  },
];

export { routes };
