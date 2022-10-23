import $ from 'jquery';
import type { Image } from './index';

export async function displayImages(images: Image[]) {
  $('#gallery-title').html(`selected ${images.length} images`);
  $('#gallery-time').html(`${images[0].date.toLocaleTimeString()} - ${images[images.length - 1].date.toLocaleTimeString()}`);
  $('#gallery-date').html(`${images[0].date.toDateString()} - ${images[images.length - 1].date.toDateString()}`);
}

class Gallery extends HTMLElement { // watch for attributes
  connectedCallback() { // triggered on insert
    this.innerHTML = `
      <div style="position: fixed; top: 0; right: 0; padding: 8px">
        <h1 id="gallery-title"></h1>
        <h3 id="gallery-time"></h3>
        <h3 id="gallery-date"></h3>
      </div>
    `;
  }
}

customElements.define('component-gallery', Gallery);
