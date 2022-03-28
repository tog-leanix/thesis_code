import { LitElement, html, css, customElement, property } from "lit-element";
@customElement("saas-button")
class ButtonComponent extends LitElement {
  static styles = css`
    button {
      padding: var(--md-spacing) var(--lg-spacing);
      color: var(--text-color);
      background: var(--primary-color, #ccc);
      border: none;
      border-radius: 5px;
    }
  `;
  @property() myLabel: string = "";
  render() {
    return html`<button>${this.myLabel}</button>`;
  }
}
