import App from "./components/App.svelte";
import "../../dist/main.js";
import "./styles.css";

const app = new App({
  target: document.body,
});

export default app;
