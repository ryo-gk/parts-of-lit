import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('pol-text-field')
export class PolTextField extends LitElement {
  constructor() {
    super()
    this.handleInput()
  }

  static styles = css`
    .label {
      display: block;
      padding: 8px 8px;
    }
    .input {
      padding: 11px 16px;
      width: 100%;
      border: 1px solid #e8e8e8;
      border-radius: 4px;
      outline: none;
    }
    .input:hover, .input:focus {
      border: 1px solid #333333;
    }
  `

  @property({ type: String })
  label = ''

  @property({ type: String })
  placeholder = 'Please input'

  render() {
    return html`
      <div class="PolTextField">
        <label class="label">${this.label}</label>
        <div class="box">
          <input
            type="text"
            class="input"
            placeholder="${this.placeholder}"
          >
        </div>
      </div>
    `
  }

  handleInput() {
    // TODO handle input event
  }

  
}
