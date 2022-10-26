import $ from 'jquery';
import { clearImage } from './gallery';
import type { DeviceConfig } from './index';

const log = (...msg) => console.log(...msg); // eslint-disable-line no-console

async function pan(device: DeviceConfig, direction: 'up' | 'down' | 'left' | 'right') {
  log('pan', device, direction);
  const duration = 1500;
  switch (direction) {
    case 'up': fetch(`/pan&x=0&y=1&z=1&duration=${duration}&device=${device.label}`); break;
    case 'down': fetch(`/pan&x=0&y=-1&z=1&duration=${duration}&device=${device.label}`); break;
    case 'left': fetch(`/pan&x=-1&y=0&z=1&duration=${duration}&device=${device.label}`); break;
    case 'right': fetch(`/pan&x=1&y=0&z=1&duration=${duration}&device=${device.label}`); break;
    default:
  }
  setTimeout(() => displayLive(device), duration); // eslint-disable-line no-use-before-define
}

export async function displayLive(device: DeviceConfig | undefined) {
  if (!device) return;
  log('live', device);
  clearImage();
  $('#calendar').hide();
  $('#live').show();
  const img = document.getElementById('live-image') as HTMLImageElement;
  img.src = `/snapshot&device=${device.label}`;
  $('#arrow-up').off();
  $('#arrow-up').on('click', () => pan(device, 'up'));
  $('#arrow-down').off();
  $('#arrow-down').on('click', () => pan(device, 'down'));
  $('#arrow-left').off();
  $('#arrow-left').on('click', () => pan(device, 'left'));
  $('#arrow-right').off();
  $('#arrow-right').on('click', () => pan(device, 'right'));
}

class Live extends HTMLElement { // watch for attributes
  arrowSize = 50;
  svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 487 487" style="enable-background:new 0 0 487 487;" xml:space="preserve">
      <path d="M397.7,376.1c20.4,20.4,53.6,20.4,74,0s20.4-53.6,0-74L280.5,110.9c-20.4-20.4-53.6-20.4-74,0L15.3,302.1 c-20.4,20.4-20.4,53.6,0,74s53.6,20.4,74,0l154.2-154.2L397.7,376.1z"/>
    </svg>
  `;

  arrow(name, offset: [number, number], rotation: number): string {
    return `<div id="${name}" style="position: absolute; top: ${offset[0]}px; left: ${offset[1]}px; width: ${this.arrowSize}px; height: ${this.arrowSize}px; background: none; transform: rotate(${rotation}deg)">${this.svg}</div>\n`;
  }

  connectedCallback() { // triggered on insert
    const arrows = this.arrow('arrow-up', [-50, 0], 0) + this.arrow('arrow-down', [50, 0], 180) + this.arrow('arrow-left', [0, -50], -90) + this.arrow('arrow-right', [0, 50], 90);
    this.innerHTML = `
      <div id="live" style="position: fixed; top: 0; left: 0; width: 100vw; display: none">
        <div id="live-arrows" style="position: fixed; top: 50px; left: 50px">${arrows}</div>
        <image id="live-image" style="width: -webkit-fill-available"></image>
      </div>`;
  }
}

customElements.define('component-live', Live);
