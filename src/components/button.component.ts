import {
  LitElement,
  html,
  css,
  customElement,
  property,
  eventOptions,
} from "lit-element";
import { PREFIX } from "../constants";
@customElement(PREFIX + "button")
class ButtonComponent extends LitElement {
  static styles = css`
    button {
      padding: var(--md-spacing) var(--lg-spacing);
      color: var(--text-color);
      background: var(--primary-color, #ccc);
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `;
  @property() label: string = "";

  render() {
    return html`<button><slot> ${this.label} </slot></button>`;
  }
}
