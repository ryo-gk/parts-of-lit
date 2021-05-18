import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('pol-text-field')
export class PolTextField extends LitElement {
  @property({ type: String })
  label: string = ''

  @property({ type: String })
  placeholder: string = 'Please input'

  @property({ type: String, reflect: true })
  value: string = ''

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
            @input=${this.handleInput}
          >
        </div>
      </div>
    `
  }
  
  handleInput(e: Event) {
    if (!e) { return }
    this.value = (e.target as HTMLInputElement).value
    const event = new CustomEvent('on-input', { detail: { value: this.value } })
    this.dispatchEvent(event)
  }
}
