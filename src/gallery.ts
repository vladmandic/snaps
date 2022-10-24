import $ from 'jquery';
import type { Image } from './index';

export async function displayImage(image: Image | undefined) {
  const img = document.getElementById('image') as HTMLImageElement;
  img.src = image ? '/' + image.file : '';
  img.alt = image ? JSON.stringify(image) : '';
  img.title = img.alt;
  $('#image').width(($(document).width() || 0) - ($('#calendar').width() || 0));
  $('#image-time').html(`${image ? image.date.toLocaleTimeString() : ''}`);
  $('#image-date').html(`${image ? image.date.toDateString() : ''}`);
  $('#image-desc').html(`${image ? `sequence ${image?.seq} | file ${image?.file}` : ''}`);
}

function filterImages(images) {
  const source = $('#gallery-source').val() as string;
  const filtered = source.length > 0 ? images.filter((image) => image.input.name === source) : images;
  displayImages(filtered, true); // eslint-disable-line no-use-before-define
}

function getSources(images: Image[]) {
  $('#gallery-source').hide();
  $('#gallery-source').html('<option value="" selected>all</option>');
  if (images.length === 0) return;
  const sources: string[] = [];
  for (const image of images) {
    if (!sources.includes(image.input.name)) sources.push(image.input.name);
  }
  for (const source of sources) $('#gallery-source').append(`<option value="${source}">${source}</option>`);
  $('#gallery-source').show();
  $('#gallery-source').off('input');
  $('#gallery-source').on('input', () => filterImages(images));
}

export async function displayImages(images: Image[], filtered?: boolean) {
  $('#gallery').css('left', ($('#calendar').width() || 0) + 20);
  $('#gallery-title').html(`selected ${images.length} images`);
  $('#gallery-time').html('');
  $('#gallery-date').html('');
  const range = document.getElementById('gallery-range') as HTMLInputElement;
  range.style.visibility = 'hidden';
  if (!filtered) getSources(images);
  displayImage(images[0]);
  if (images.length === 0) return;
  $('#gallery-time').html(`${images[0].date.toLocaleTimeString()} - ${images[images.length - 1].date.toLocaleTimeString()}`);
  $('#gallery-date').html(`${images[0].date.toDateString()} - ${images[images.length - 1].date.toDateString()}`);
  range.max = `${images.length}`;
  range.value = '1';
  range.style.visibility = 'visible';
  range.oninput = () => displayImage(images[range.valueAsNumber - 1]);
}

class Gallery extends HTMLElement { // watch for attributes
  connectedCallback() { // triggered on insert
    this.innerHTML = `
      <div id="gallery" style="position: fixed; top: 0; left: 0; padding: 8px">
        <h1 id="gallery-title" style="margin: 10px 0 10px 0"></h1>
        <div style="color: #999">
          <h3 id="gallery-date" style="margin: 6px 0 0 0"></h3>
          <h3 id="gallery-time" style="margin: 6px 0 10px 0"></h3>
        </div>
        <div style="color: #999; position: fixed; top: 0; right: 0; padding: 8px">
          <select id="gallery-source" class="select"></select>
          <br>
          <input type="range" min="1" max="1" value="1" class="slider" id="gallery-range">
          <h3 id="image-date" style="margin: 6px 0 0 0"></h3>
          <h3 id="image-time" style="margin: 6px 0 10px 0"></h3>
        </div>
        <image id="image" syle="margin-top: 8px"></image>
        <div id="image-desc" style="padding: 8px; color: #999"></div>
      </div>
    `;
  }
}

customElements.define('component-gallery', Gallery);
