import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import * as log from '@vladmandic/pilogger';
import * as httpd from './httpd';
import * as pkg from '../package.json';

const config = {
  secrets: 'secrets.json',
  log: 'snaps.log',
  folder: 'images',
  interval: 2,
  httpPort: 8000,
  httpsPort: 8001,
  documentRoot: 'public',
  sslKey: 'node_modules/@vladmandic/build/cert/https.key',
  sslCrt: 'node_modules/@vladmandic/build/cert/https.crt',
  resizeWidth: 1280,
  quality: 60,
};

// any number of objects as `label:url`
type Secrets = Record<string, string>;

// holds updated sequence number
const seq: Record<string, number> = {};

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
async function saveImage(name: string, res: Response) {
  const data = await res.blob();
  if (data.type !== 'image/jpeg' && data.type !== 'image/png') {
    log.warn('unrecognized file type:', { name, data });
    return;
  }
  if (!seq[name]) seq[name] = initSequence(name);
  const num = seq[name].toString().padStart(5, '0');
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
  seq[name]++;
  log.data('image:', { seq: num, file, input: { name, size: data.size, type: data.type, resolution: [metadata.width, metadata.height] }, output: { size: image.size, resolution: [image.width, image.height] } });
}

async function runInterval(secrets: Secrets) {
  for (const [name, url] of Object.entries(secrets)) {
    fetch(url)
      .then((res) => saveImage(name, res))
      .catch((err) => log.warn(err));
  }
}

async function main() {
  if (config.log?.length > 0) log.logFile(config.log);
  log.headerJson();
  if (!fs.existsSync(config.secrets)) {
    log.error('cannot read secrets:', config.secrets);
    process.exit(1);
  }
  if (!fs.existsSync(config.folder) || !fs.statSync(config.folder).isDirectory()) {
    log.error('desitnation folder does not exist:', config.folder);
    process.exit(1);
  }
  const data = fs.readFileSync(config.secrets, 'utf8');
  const secrets = JSON.parse(data) as Secrets;
  await httpd.start(config);
  setInterval(() => runInterval(secrets), config.interval * 1000);
  ts();
}

main();