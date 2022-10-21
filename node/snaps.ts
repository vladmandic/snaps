import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import * as log from '@vladmandic/pilogger';
import * as httpd from './httpd';
import * as pkg from '../package.json';

const config = {
  secrets: 'secrets.json',
  folder: 'images',
  interval: 5,
  httpPort: 8000,
  httpsPort: 8001,
  documentRoot: 'public',
  sslKey: 'node_modules/@vladmandic/build/cert/https.key',
  sslCrt: 'node_modules/@vladmandic/build/cert/https.crt',
  resizeWidth: 1920,
  quality: 60,
};

type Secrets = Record<string, string>;

const ts = () => {
  const d = new Date();
  const pad = (v: number) => v.toString().padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}-${pad(d.getMinutes())}-${pad(d.getSeconds())}`;
};

async function saveImage(name: string, res: Response) {
  const data = await res.blob();
  if (data.type !== 'image/jpeg' && data.type !== 'image/png') {
    log.warn('unrecognized file type:', { name, data });
    return;
  }
  const file = path.join(config.folder, `${name}-${ts()}.jpg`);
  const buffer = new Uint8Array(await data.arrayBuffer());
  fs.writeFileSync('images/q0.jpg', new Uint8Array(buffer));
  const metadata = await sharp(buffer).metadata();
  log.data({ metadata });
  const image = await sharp(buffer)
    .normalize()
    .resize(config.resizeWidth, null)
    .jpeg({ quality: config.quality, mozjpeg: true })
    .withMetadata({ exif: { IFD0: { Software: `${pkg.name} ${pkg.version}` } } })
    .toFile(file);
  log.data('image:', { file, input: { size: data.size, type: data.type, resolution: [metadata.width, metadata.height] }, output: { size: image.size, resolution: [image.width, image.height] } });
  process.exit(1);
}

async function runInterval(secrets: Secrets) {
  for (const [name, url] of Object.entries(secrets)) {
    fetch(url)
      .then((res) => saveImage(name, res))
      .catch((err) => log.warn(err));
  }
}

async function main() {
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
