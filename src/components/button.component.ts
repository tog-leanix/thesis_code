import { LitElement, html, css, customElement, property } from "lit-element";
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

    button:disabled {
      background: var(--grey-90);
    }
  `;
  @property() label: string = "";
  @property({ type: Boolean }) disabled: boolean = false;

  render() {
    return html` <button ?disabled=${this.disabled}>
      <slot> ${this.label} </slot>
    </button>`;
  }
}
