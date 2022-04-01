import { LitElement, html, css, customElement, property } from "lit-element";
import { classMap } from "lit/directives/class-map.js";
import { PREFIX } from "../constants";

@customElement(PREFIX + "navbar-item")
class NavbarItemComponent extends LitElement {
  static styles = css`
    li {
      cursor: pointer;
      padding: 0px var(--sm-spacing);
    }

    a {
      display: block;
      text-decoration: none;
      color: var(--text-color);
    }
  `;
  @property() label = "";
  @property() link = "";
  render() {
    return html`<li>
      <a href="${this.link}">${this.label}</a>
    </li>`;
  }
}
