import { LitElement, html, customElement } from "lit-element";

@customElement("saas-button")
class ButtonComponent extends LitElement {
  render() {
    return html`<button>Hello World</button>`;
  }
}
