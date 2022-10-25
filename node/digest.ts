/* eslint-disable no-underscore-dangle */

// import { createHash } from 'crypto';
// const md5 = (content: string) => createHash('md5').update(content).digest('hex');

import { md5 } from './md5';

const parse = (raw, field, trim = true) => {
  const regex = new RegExp(`${field}=("[^"]*"|[^,]*)`, 'i');
  const match = regex.exec(raw);
  if (match) return trim ? match[1].replace(/[\s"]/g, '') : match[1];
  return null;
};

const parseQop = (rawAuth) => {
  const qop = parse(rawAuth, 'qop');
  if (qop) {
    const qops = qop.split(',');
    if (qops.includes('auth')) return 'auth';
    if (qops.includes('auth-int')) return 'auth-int';
  }
  return null;
};

const makeNonce = () => {
  let uid = '';
  const nonceRaw = 'abcdef0123456789';
  for (let i = 0; i < 32; ++i) uid += nonceRaw[Math.floor(Math.random() * nonceRaw.length)];
  return uid;
};

type DigestOptions = { statusCode: number, basic: boolean };

export class DigestClient {
  user: string;
  password: string;
  basic; // use basic auth, default is false
  statusCode; // which code to treat as `unauthorized`, default is 401
  digest; // calculated digest
  header: string; // calculated auth header string
  hasAuth; // resulting authentication was sucessfull
  lastAuth; // previously authenticated so will try to reuse

  constructor(user, password, options?: Partial<DigestOptions>) {
    this.user = user;
    this.password = password;
    this.digest = { nc: 0, algorithm: 'MD5', realm: '' };
    this.header = '';
    this.hasAuth = false;
    this.statusCode = options?.statusCode || 401;
    this.basic = options?.basic || false;
  }

  async fetch(url, options = {}) {
    if (this.basic) return fetch(url, this.addBasicAuth(options));
    const resp = await fetch(url, this.addAuth(url, options));
    if (resp.status === 401 || (resp.status === this.statusCode && this.statusCode)) {
      this.hasAuth = false;
      await this.parseAuth(resp.headers.get('www-authenticate'));
      if (this.hasAuth) {
        const reqInit = this.addAuth(url, options);
        this.header = reqInit?.headers?.get('authorization');
        const respFinal = await fetch(url, reqInit);
        if (respFinal.status === this.statusCode) this.hasAuth = false;
        else this.digest.nc++;
        return respFinal;
      }
    } else this.digest.nc++;
    return resp;
  }

  addBasicAuth(options) {
    const _options = options;
    const auth = 'Basic ' + Buffer.from(this.user + ':' + this.password).toString('base64');
    _options.headers = new Headers();
    _options.headers.set('Authorization', auth);
    return _options;
  }

  static computeHash(user, realm, password) {
    return md5(`${user}:${realm}:${password}`);
  }

  addAuth(url, options) {
    if (!this.hasAuth) return options;
    const isRequest = typeof (url) === 'object' && typeof (url.url) === 'string';
    const urlStr = isRequest ? url.url : url;
    const _url = urlStr.replace('//', '');
    const uri = _url.indexOf('/') === -1 ? '/' : _url.slice(_url.indexOf('/'));
    const method = options.method ? options.method.toUpperCase() : 'GET';
    let ha1 = DigestClient.computeHash(this.user, this.digest.realm, this.password);
    if (this.digest.algorithm === 'MD5-sess') ha1 = md5(`${ha1}:${this.digest.nonce}:${this.digest.cnonce}`);
    if (this.digest.qop === 'auth-int') throw new Error('auth-int is not implemented');
    const ha2 = md5(`${method}:${uri}${''}`);
    const ncString = ('00000000' + this.digest.nc).slice(-8);
    let _response = `${ha1}:${this.digest.nonce}:${ncString}:${this.digest.cnonce}:${this.digest.qop}:${ha2}`;
    if (!this.digest.qop) _response = `${ha1}:${this.digest.nonce}:${ha2}`;
    const response = md5(_response);
    const opaqueString = this.digest.opaque !== null ? `opaque="${this.digest.opaque}",` : '';
    const qopString = this.digest.qop ? `qop="${this.digest.qop}",` : '';
    const digest = `${this.digest.scheme} username="${this.user}",realm="${this.digest.realm}",nonce="${this.digest.nonce}",uri="${uri}",${opaqueString}${qopString}algorithm="${this.digest.algorithm}",response="${response}",nc=${ncString},cnonce="${this.digest.cnonce}"`;
    options.headers = new Headers();
    options.headers.set('Authorization', digest);
    const _options = {};
    Object.assign(_options, options);
    return _options;
  }

  async parseAuth(h) {
    this.lastAuth = h;
    if (!h || h.length < 5) {
      this.hasAuth = false;
      return;
    }
    this.hasAuth = true;
    this.digest.scheme = h.split(/\s/)[0];
    this.digest.realm = (parse(h, 'realm', false) || '').replace(/["]/g, '');
    this.digest.qop = parseQop(h);
    this.digest.opaque = parse(h, 'opaque');
    this.digest.nonce = parse(h, 'nonce') || '';
    this.digest.cnonce = makeNonce();
    this.digest.nc++;
  }
}
