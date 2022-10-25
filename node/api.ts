import * as log from '@vladmandic/pilogger';
import { URLSearchParams } from 'url';
import * as httpd from './httpd';

import { devices } from './shared';

async function getSnapshot(label: string | null): Promise<Blob | undefined> {
  const device = devices.find((d) => d.label === label);
  if (!device) return undefined;
  const blob = await device.snapshot();
  return blob;
}

async function snapshot(req, res) {
  const params = new URLSearchParams(req.url);
  const blob = await getSnapshot(params.get('device'));
  const protocol = req.headers[':scheme'] || 'http';
  const forwarded = (req.headers['forwarded'] || '').match(/for="\[(.*)\]:/);
  const remote = (Array.isArray(forwarded) ? forwarded[1] : null) || req.headers['x-forwarded-for'] || req.ip || req.socket.remoteAddress;
  if (!blob) {
    log.warn(`${protocol}:`, { method: 'API', ver: req.httpVersion, status: 404, url: decodeURI(req.url), remote });
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('Error 404: Not Found\n', 'utf-8');
  } else {
    log.data(`${protocol}:`, { method: 'API', ver: req.httpVersion, status: 200, mime: blob.type, size: blob.size, url: decodeURI(req.url), remote });
    res.writeHead(200, { 'Content-Size': blob.size, 'Content-Language': 'en', 'Content-Type': blob.type, 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' });
    const array = await blob.arrayBuffer();
    const buffer = Buffer.from(array);
    res.end(buffer);
  }
}

export function init() {
  httpd.register('/snapshot', snapshot);
}
