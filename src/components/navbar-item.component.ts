import { LitElement, html, css, customElement, property } from "lit-element";
import { PREFIX } from "../constants";

@customElement(PREFIX + "navbar-item")
class NavbarItemComponent extends LitElement {
  static styles = css`
    li {
      cursor: pointer;
      padding: 0px var(--sm-spacing);
    }

    ::slotted(a),
    a {
      display: block;
      text-decoration: none !important;
      color: var(--text-color) !important;
    }
  `;
  @property() label = "";
  @property() link = "";
  render() {
    return html`<li>
      <slot>
        <a href="${this.link}">${this.label}</a>
      </slot>
    </li>`;
  }
}
