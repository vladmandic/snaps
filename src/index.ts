import $ from 'jquery';
import { renderCalendar, addNote } from './calendar';
import { displayImages } from './gallery';
import { displayLive } from './live';

export type Image = { seq: string, file: string, date: Date, input: { name: string, size: number, type: string, resolution: [number, number] }, output: { size: number, resolution: [number, number] } }
export type DeviceConfig = { label: string, hostname: string, resolution: [number, number] }

let res: Response;
let config;
let devices: DeviceConfig[];
let dates: Record<string, Image[]> = {};
const active: Record<string, boolean> = {};
let rawData = '';

const log = (...msg) => console.log(...msg); // eslint-disable-line no-console

async function calendarCallback(date: Date, selected: boolean) {
  log('callback', date, selected);
  const dt = date.toISOString().slice(0, 10);
  if (!dates[dt]) return;
  active[dt] = selected;
  const filtered: Image[] = [];
  for (const key of Object.keys(active)) {
    if (active[key] && dates[key]) filtered.push(...dates[key]);
  }
  const sorted = filtered.sort((a, b) => a.date.getTime() - b.date.getTime());
  displayImages(sorted);
}

async function parseRawData(data: string, filterName: string) {
  dates = {};
  if (filterName.length === 0) $('#live').attr('disabled', 'true');
  else $('#live').removeAttr('disabled');
  for (const line of data.split('\n')) {
    if (line.length < 100) continue;
    const rec = JSON.parse(line) as Image;
    if (!rec.input.name.startsWith(filterName)) continue;
    rec.date = new Date(rec.date);
    const date = new Date(rec.date.getFullYear(), rec.date.getMonth(), rec.date.getDate()).toISOString().slice(0, 10);
    if (!dates[date]) dates[date] = [];
    dates[date].push(rec);
  }
  renderCalendar();
  $('#live').off('click');
  $('#live').on('click', () => displayLive(devices.find((device) => device.label === $('#devices').val() as string)));
  for (const [dt, images] of Object.entries(dates)) addNote(new Date(dt), `available ${images.length}`, calendarCallback);
}

function setSources(sources: DeviceConfig[]) {
  $('#devices').html('<option value="" selected>all</option>');
  for (const source of sources) {
    $('#devices').append(`<option value="${source.label}">${source.label}</option>`);
  }
  $('#devices').off('input');
  $('#devices').on('input', () => parseRawData(rawData, $('#devices').val() as string));
}

async function start() {
  console.log('snaps'); // eslint-disable-line no-console
  res = await fetch('/config.json');
  config = await res.json();
  log('config', { config });
  res = await fetch('/' + config['devices']);
  devices = await res.json();
  setSources(devices);
  log('devices', { devices });
  res = await fetch('/' + config['index']);
  rawData = await res.text();
  parseRawData(rawData, '');
}

window.onload = start;
