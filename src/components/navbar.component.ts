import { LitElement, html, css, customElement } from "lit-element";
import { PREFIX } from "../constants";

@customElement(PREFIX + "navbar")
class NavbarComponent extends LitElement {
  static styles = css`
    nav {
      height: var(--navbar-height);
      background: var(--primary-color, #ccc);
      display: flex;
    }
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      line-height: var(--navbar-height);
      color: var(--text-color);
      margin: auto;
    }

    ul.left {
      margin-left: 10px;
    }

    ul.right {
      margin-right: 10px;
    }

    ::slotted(img) {
      padding: var(--sm-spacing);
    }
  `;
  render() {
    return html` <nav>
      <slot name="logo"></slot>
      <ul class="left">
        <slot></slot>
      </ul>
      <ul class="right">
        <slot name="right"></slot>
      </ul>
    </nav>`;
  }
}
