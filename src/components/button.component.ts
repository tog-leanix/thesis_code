import { LitElement, html, customElement, property } from "lit-element";

@customElement("saas-button")
class ButtonComponent extends LitElement {
  @property() myLabel: string = "";
  render() {
    return html`<button>${this.myLabel}</button>`;
  }
}
