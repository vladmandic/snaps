import { renderCalendar, addNote } from './calendar';
import { displayImages } from './gallery';

export type Image = { seq: string, file: string, date: Date, input: { name: string, size: number, type: string, resolution: [number, number] }, output: { size: number, resolution: [number, number] } }

let res: Response;
let config;
const dates: Record<string, Image[]> = {};
const active: Record<string, boolean> = {};

async function callback(date: Date, selected: boolean) {
  // console.log('callback', date, selected);
  const dt = date.toISOString().slice(0, 10);
  if (!dates[dt]) return;
  active[dt] = selected;
  const filtered: Image[] = [];
  for (const key of Object.keys(active)) {
    if (active[key]) filtered.push(...dates[key]);
  }
  const sorted = filtered.sort((a, b) => a.date.getTime() - b.date.getTime());
  displayImages(sorted);
}

async function start() {
  console.log('snaps'); // eslint-disable-line no-console
  res = await fetch('/config.json');
  config = await res.json();
  res = await fetch('/' + config['index']);
  const data = await res.text();
  for (const line of data.split('\n')) {
    if (line.length < 100) continue;
    const rec = JSON.parse(line);
    rec.date = new Date(rec.date);
    const date = new Date(rec.date.getFullYear(), rec.date.getMonth(), rec.date.getDate()).toISOString().slice(0, 10);
    if (!dates[date]) dates[date] = [];
    dates[date].push(rec);
  }
  renderCalendar();
  for (const [dt, images] of Object.entries(dates)) addNote(new Date(dt), `${images.length} images`, callback);
}

window.onload = start;
