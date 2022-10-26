import $ from 'jquery';
import type { Image } from './index';

const log = (...msg) => console.log(...msg); // eslint-disable-line no-console

export function displayImage(image: Image | undefined) {
  if (image) log('image', image);
  const img = document.getElementById('gallery-image') as HTMLImageElement;
  img.src = image ? '/' + image.file : '';
  img.alt = image ? JSON.stringify(image) : '';
  img.title = img.alt;
  $('#gallery-image').width(($(document).width() || 0) - ($('#calendar').width() || 0));
  $('#gallery-image-date-time').html(`${image ? image.date.toDateString() + ' ' + image.date.toLocaleTimeString() : ''}`);
  $('#gallery-image-desc').html(`${image ? `sequence ${image?.seq} | file ${image?.file}` : ''}`);
}

export function clearImage() {
  $('#gallery').css('left', ($('#calendar').width() || 0) + 8);
  $('#gallery-title').html('');
  $('#gallery-time').html('');
  $('#gallery-date').html('');
  $('#gallery-range').hide();
  displayImage(undefined);
}

export function displayImages(images: Image[]) {
  $('#gallery').show();
  clearImage();
  displayImage(images[0]);
  if (images.length === 0) return;
  $('#gallery-title').html(`selected ${images.length} images`);
  $('#gallery-time').html(`${images[0].date.toLocaleTimeString()} - ${images[images.length - 1].date.toLocaleTimeString()}`);
  $('#gallery-date').html(`${images[0].date.toDateString()} - ${images[images.length - 1].date.toDateString()}`);
  const range = document.getElementById('gallery-range') as HTMLInputElement;
  range.max = `${images.length}`;
  range.value = '1';
  $('#gallery-range').show();
  range.oninput = () => displayImage(images[range.valueAsNumber - 1]);
}

class Gallery extends HTMLElement { // watch for attributes
  connectedCallback() { // triggered on insert
    this.innerHTML = `
      <div id="gallery" style="position: fixed; top: 0; left: 0; padding: 8px">
        <h1 id="gallery-title" style="margin: 10px 0 10px 10px"></h1>
        <div style="color: #999; margin-left: 10px">
          <h3 id="gallery-date" style="margin: 6px 0 0 0"></h3>
          <h3 id="gallery-time" style="margin: 6px 0 10px 0"></h3>
        </div>
        <div style="color: #999; position: fixed; bottom: 32px; right: 0; padding: 8px">
          <h3 id="gallery-image-date-time" style="margin: 0; margin-left: 4px"></h3>
          <input type="range" min="1" max="1" value="1" class="slider" id="gallery-range">
        </div>
        <image id="gallery-image" syle="margin-top: 8px"></image>
        <div id="gallery-image-desc" style="padding: 8px; color: #999"></div>
      </div>
    `;
  }
}

customElements.define('component-gallery', Gallery);
