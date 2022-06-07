import {
  LitElement,
  html,
  css,
  customElement,
  property,
  eventOptions,
} from "lit-element";
import { PREFIX } from "../constants";
@customElement(PREFIX + "input")
class InputComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: var(--md-spacing) 0;
    }
    input {
      border: none;
      border-bottom: solid thin var(--grey-20);
      padding: var(--sm-spacing);
      outline: none;
      line-height: var(--input-line-height);
      font-size: var(--input-line-height);
    }

    input:focus {
      border-bottom: var(--primary-color) 2px solid;
      padding-bottom: calc(var(--sm-spacing) - 1px);
    }
  `;
  @property() label = "";
  @property() for = "";
  @property() value = "";

  handleInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    this.dispatchEvent(new CustomEvent("value", { detail: input.value }));
  }

  render() {
    return html`
      <label for=${this.for}>
        ${this.label}
        <input value="${this.value}" @input=${this.handleInput} type="text" />
      </label>
    `;
  }
}
