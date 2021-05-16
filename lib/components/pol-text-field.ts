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
  label: string = ''

  @property({ type: String })
  placeholder: string = 'Please input'

  @property({ type: String, reflect: true })
  value: string = ''

  render() {
    return html`
      <div class="PolTextField">
        <label class="label">${this.label}</label>
        <div class="box">
          <input
            type="text"
            class="input"
            placeholder="${this.placeholder}"
            value="${this.value}"
            @input="${(e: any) => this.value = e.target.value}"
          >
        </div>
      </div>
    `
  }

  handleInput() {
    // TODO handle input event
  }

  
}
