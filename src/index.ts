import "@components/button.component";
import { html, render } from "lit-element";

const template = html`<div>
  <saas-button myLabel="Test"></saas-button>
</div>`;

render(template, document.body);
