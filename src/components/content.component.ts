import { LitElement, html, css, customElement, property } from "lit-element";
import { PREFIX } from "../constants";
@customElement(PREFIX + "content")
class ContentComponent extends LitElement {
  static styles = css`
    main {
      text-align: left;
      max-width: 1200px;
      margin: 0 auto;
      overflow-y: auto;
      height: calc(100vh - var(--navbar-height));
    }

    ::slotted(.title) {
      text-align: left;
      text-transform: uppercase;
      margin-top: var(--md-spacing);
      margin-bottom: var(--lg-spacing);
    }
  `;

  render() {
    return html`<main>
      <slot></slot>
    </main>`;
  }
}
