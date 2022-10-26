const log = (...msg) => console.log(...msg); // eslint-disable-line no-console

export async function initControls() {
  log('initControls');
}

class Controls extends HTMLElement { // watch for attributes
  connectedCallback() { // triggered on insert
    this.innerHTML = `
      <div id="controls" style="position: absolute; top: 20px; right: 20px; z-index: 99">
        <select id="devices"></select><br>
        <button id="button-live" type="button">live</button><button id="button-calendar" type="button">calendar</button><br>
      </div>
    `;
  }
}

customElements.define('component-controls', Controls);
