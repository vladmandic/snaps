import $ from 'jquery';
import { clearImage } from './gallery';
import type { DeviceConfig } from './index';

const log = (...msg) => console.log(...msg); // eslint-disable-line no-console

export async function displayLive(device: DeviceConfig | undefined) {
  if (!device) return;
  log('live', device);
  clearImage();
  const img = document.getElementById('image') as HTMLImageElement;
  img.src = `/snapshot&device=${device.label}`;
  $('#image').width(($(document).width() || 0) - ($('#calendar').width() || 0));
  $('#gallery-title').html('live');
}
