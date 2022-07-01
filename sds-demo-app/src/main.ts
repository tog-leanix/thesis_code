import App from "./components/App.svelte";
import "../../dist/main.js";
import "../../dist/main.css";
import "./styles.css";

const app = new App({
  target: document.body,
});

export default app;
