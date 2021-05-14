import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('pol-button')
export class PolButton extends LitElement {

  @property({ type: String })
  label = ''

  static styles = css`
    .label {
      display: block;
      padding: 8px 8px;
    }
    .button {
      padding: 11px 16px;
      width: 100%;
      cursor: pointer;
      font-weight: 500;
      font-size: 1.1rem;
      border-radius: 4px;
      border: 1px solid #e8e8e8;
    }
    .button:hover {
      background-color: #dddada;
    }
  `

  render() {
    return html`
      <div class="PolButton">
        <label class="label">${this.label}</label>
        <div class="box">
          <button class="button">
            <slot />
          </button>
        </div>
      </div>
    `
  }
}