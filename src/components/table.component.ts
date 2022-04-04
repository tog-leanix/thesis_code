import { customElement, LitElement, html, property } from "lit-element";
import { PREFIX } from "../constants";
@customElement(PREFIX + "table")
class TableComponent extends LitElement {
  @property({ type: Array }) data: any[] = [];
  render() {
    return html`
      <table>
        <thead></thead>
        <tbody>
          ${this.data ? this.data.map(this.renderRow) : ""}
          <tr></tr>
        </tbody>
      </table>
    `;
  }

  renderRow(data: Record<string, string | number> | string | number) {
    if (typeof data !== "object") {
      return html`<tr>
        <td>${data}</td>
      </tr>`;
    } else {
      const keys = Object.keys(data);
      return html`<tr>
        ${keys.map((key) => {
          const value = data[key];
          return html`<td>${value}</td>`;
        })}
      </tr>`;
    }
  }
}
