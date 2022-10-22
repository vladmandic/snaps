import { renderCalendar, addNote } from './calendar';

type Image = { seq: string, file: string, date: Date, input: { name: string, size: number, type: string, resolution: [number, number] }, output: { size: number, resolution: [number, number] } }

let res: Response;
let config;
const dates: Record<string, Image[]> = {};

async function callback(date: Date) {
  const dt = date.toISOString().slice(0, 10);
  if (!dates[dt]) return;
  console.log('callback', dates[dt]);
}

async function start() {
  console.log('snaps'); // eslint-disable-line no-console
  res = await fetch('/config.json');
  config = await res.json();
  res = await fetch(config['index']);
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
