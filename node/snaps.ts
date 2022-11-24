import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import * as log from '@vladmandic/pilogger';
import * as httpd from './httpd';
import * as api from './api';
import { Device, DeviceConfig } from './onvif';
import { devices, sequence } from './shared';
import * as pkg from '../package.json';
import * as config from '../config.json';

type Image = { seq: string, file: string, date: Date, input: { name: string, size: number, type: string, resolution: [number, number] }, output: { size: number, resolution: [number, number] } }

// find first available sequence number in a folder
const initSequence = (name: string): number => {
  const dir = fs.readdirSync(config.folder);
  let last = 0;
  for (const f of dir) {
    if (!f.startsWith(`${name}-`)) continue;
    const current = Number(f.replace(`${name}-`, '').split('.')[0]);
    if (current > last) last = current;
  }
  last++;
  log.info('sequence:', { name, start: last });
  return last;
};

// gets timestamp string in exif format
const ts = (): string => {
  const d = new Date();
  const pad = (v: number) => v.toString().padStart(2, '0');
  return `${d.getFullYear()}:${pad(d.getMonth() + 1)}:${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
};

// set exif headers
const getExif = () => ({
  IFD0: { Software: `${pkg.name} ${pkg.version}` },
  IFD2: { DateTimeOriginal: ts(), OffsetTime: (new Date().getTimezoneOffset() / 60).toString() },
});

// process image and save it as a sequence
async function saveImage(name: string, data: Blob | undefined) {
  if (!data) {
    log.warn('image not received:', { name, data });
    return;
  }
  if (data.type !== 'image/jpeg' && data.type !== 'image/png') {
    log.warn('unrecognized image type:', { name, data });
    return;
  }
  const num = sequence[name].toString().padStart(5, '0');
  const file = path.join(config.folder, `${name}-${num}.jpg`);
  const buffer = new Uint8Array(await data.arrayBuffer());
  // fs.writeFileSync(file, new Uint8Array(buffer)); // just save unprocessed
  const metadata = await sharp(buffer).metadata();
  const image = await sharp(buffer)
    .normalize()
    .resize(config.resizeWidth, null)
    .jpeg({ quality: config.quality, mozjpeg: true })
    .withMetadata({ exif: getExif() })
    .toFile(file);
  sequence[name]++;
  const rec: Image = { seq: num, file, date: new Date(), input: { name, size: data.size, type: data.type, resolution: [metadata.width, metadata.height] }, output: { size: image.size, resolution: [image.width, image.height] } };
  fs.appendFileSync(config.index, JSON.stringify(rec) + '\n');
  log.data('image:', rec);
}

type Schedule = { date: Date, interval: number, lastActive?: number };
let currentSchedule: Schedule = { date: new Date(0), interval: 0 };

async function runSchedule(schedules: Schedule[]) {
  const now = new Date();
  let newSchedule: Schedule = { date: new Date(0), interval: 0 };
  for (const s of schedules) {
    if (s.date.getTime() < now.getTime()) newSchedule = s;
  }
  if (newSchedule.date.getTime() !== currentSchedule.date.getTime()) {
    currentSchedule = newSchedule;
    log.info('active schedule', currentSchedule);
  }
  const elapsed = Math.round((now.getTime() - (currentSchedule.lastActive || 0)) / 1000);
  if (currentSchedule.interval > 0 && elapsed >= currentSchedule.interval) {
    currentSchedule.lastActive = now.getTime();
    for (const device of devices) device.snapshot().then((blob) => saveImage(device.label, blob));
  }
}

function parseSchedule(schedules): Schedule[] {
  if (!schedules || !Array.isArray(schedules)) {
    log.error('schedule missing');
    process.exit(1);
  }
  const now = new Date();
  const list: Schedule[] = [];
  log.info('schedules', schedules);
  for (const s of schedules) {
    const date = new Date(s.year || now.getFullYear(), s.month ? s.month - 1 : now.getMonth(), s.date || now.getDate(), s.hour || now.getHours(), s.min || now.getMinutes(), 0);
    list.push({ date, interval: s.interval });
  }
  const sorted = list.sort((a, b) => a.date.getTime() - b.date.getTime());
  return sorted;
}

async function initDevices(secrets) {
  if (!fs.existsSync(secrets)) {
    log.error('cannot read secrets:', secrets);
    process.exit(1);
  }
  const data = fs.readFileSync(secrets, 'utf8');
  const deviceConfigs = JSON.parse(data) as DeviceConfig[];
  for (const deviceConfig of deviceConfigs) {
    if (config.debug) deviceConfig.debug = true;
    const device = new Device(deviceConfig);
    await device.init();
    if (device.profile) {
      log.state('device', { label: device.label, profile: device.profile });
      if (!sequence[device.label]) sequence[device.label] = initSequence(device.label);
      await device.snapshot();
      // device.pan(1, 0, 0, 2000);
      devices.push(device);
    } else {
      log.warn('device', { label: device.label, profile: device.profile });
    }
  }
  if (devices.length === 0) {
    log.error('no devices');
    process.exit(1);
  }
  const json = devices.map((device) => ({ label: device.label, hostname: device.config.hostname, resolution: device.settings.resolution }));
  fs.writeFileSync(config.devices, JSON.stringify(json));
  log.state('device info', { file: config.devices });
  return devices;
}

async function main() {
  log.configure({ inspect: { breakLength: 500 } });
  if (config.log?.length > 0) log.logFile(config.log);
  log.headerJson();
  if (!fs.existsSync(config.folder) || !fs.statSync(config.folder).isDirectory()) {
    log.error('desitnation folder does not exist:', config.folder);
    process.exit(1);
  }
  await initDevices(config.secrets);
  httpd.start(config);
  api.init();
  const schedules = parseSchedule(config.schedule);
  setInterval(() => runSchedule(schedules), 1000);
}

main();
