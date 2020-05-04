import { LitElement, html } from 'lit-element';
import '@material/mwc-slider'

/** Example demo element for testing element loading
*/
class MwcSliderDemo extends LitElement {
  render(){
    return html`
      <style>
      div[hidden] {
        display: none;
      }
      </style>
      <div ?hidden="${!this.view}">
        <mwc-slider pin markers step="1" min="2" max="5"></mwc-slider>
        <button @click="${this.setTo}">2</button>
        <button @click="${this.setTo}">3</button>
        <button @click="${this.setTo}">4</button>
        <button @click="${this.setTo}">5</button>
      </div>
      <button @click="${this.show}">Show/Hide</button>
    `;
  }

  static get properties() {
    return {
      view: { type: Boolean }
    }
  }

  constructor() {
    super();
    this.view = false;
  }

  get slider() {
    return this.shadowRoot.querySelector("mwc-slider");
  }

  show() {
    this.view = !this.view;
  }

  setTo(e) {
    this.slider.value = Number(e.target.textContent);
  }
}
customElements.define('mwc-slider-demo', MwcSliderDemo);
