// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { Call } from 'wasm-imagemagick/dist/magickApi';


class ImgMagick extends LitElement {

  static get properties() { return {
    cmd: { reflect: true },
    src: { reflect: true },
    convertedSrc: { reflect: true },
  };}

  constructor() {
    super();
    this.cmd='';
    this.convertedSrc='';
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
    if (name ==='cmd' || name === 'src') {
      this.convertImage();
    }
  }

  async convertImage() {
    const fetchedSourceImage = await fetch(this.src);
    const content = new Uint8Array(await fetchedSourceImage.arrayBuffer());
    const file = [{'name': this.src, content}];

    let processedFiles = await Call(file, [...this.cmd.split(" "), '%[filename:mysize]-%d.jpeg']);

    const convertedSrc = URL.createObjectURL(processedFiles[0]['blob']);
    this.setAttribute('convertedSrc', convertedSrc);
  }

  async connectedCallback() {
    super.connectedCallback();
    this.convertImage();
  }
  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
      <img src=${this.convertedSrc} />
    `;
  }
}
// Register the new element with the browser.
customElements.define('img-magick', ImgMagick);