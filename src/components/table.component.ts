import { customElement, LitElement, html, property, css } from "lit-element";
import { PREFIX } from "../constants";

interface TableHeader {
  [key: string]: string;
}

@customElement(PREFIX + "table")
class TableComponent extends LitElement {
  static styles = css`
    table {
      color: var(--text-color);
      width: 100%;
      border-collapse: collapse;
    }

    tr {
      height: var(--table-row-height);
    }

    thead {
      color: var(--text-color);
      background: var(--primary-color);
      border-bottom: solid 2px var(--grey-90);
    }

    tbody > tr {
      border-bottom: solid 1px var(--grey-30);
    }

    tbody > tr:nth-child(2n + 1) {
      background: var(--grey-90);
    }

    td {
      padding: var(--sm-spacing) var(--md-spacing);
    }
  `;
  @property({ type: Object }) header: TableHeader = {};
  @property({ type: Array }) data: any[] = [];
  render() {
    return html`
      <table>
        <thead>
          <tr>
            ${this.header ? this.renderHeader(this.header) : null}
          </tr>
        </thead>
        <tbody>
          ${this.data
            ? this.data.map((d) => this.renderRow(d, this.header))
            : ""}
        </tbody>
      </table>
    `;
  }

  renderHeader(header: TableHeader) {
    const headerLabels = Object.values(header);
    return headerLabels.map((label) => html`<th>${label}</th>`);
  }

  renderRow(
    data: Record<string, string | number> | string | number,
    header: TableHeader
  ) {
    if (typeof data !== "object") {
      return html`<tr>
        <td>${data}</td>
      </tr>`;
    } else {
      const keys = Object.keys(header);
      return html`<tr>
        ${keys.map((key) => {
          const value = data[key];
          return html`<td>${value}</td>`;
        })}
      </tr>`;
    }
  }
}
