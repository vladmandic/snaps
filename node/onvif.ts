import { Cam, PTZVector, PTZSpeed } from 'onvif/build'; // <https://github.com/agsh/onvif>
import * as log from '@vladmandic/pilogger';
import { DigestClient } from './digest';

export type DeviceConfig = { label: string, hostname: string, port: number, username: string, password: string, debug: boolean }
export type Move = { type: 'absolute' | 'relative' | 'continous', vector: [number, number, number], speed?: number, timeout?: number, profile?: string }

export class Device {
  label: string;
  config: DeviceConfig;
  cam: Cam | undefined;
  video: string | undefined;
  image: string | undefined;
  settings: Record<string, undefined | number[]> = {};
  client: DigestClient;

  get profile() {
    return this.cam ? this.cam.defaultProfile : {};
  }

  get imaging() {
    return new Promise((resolveImaging) => { this.cam?.getVideoSources((_err, data) => resolveImaging(data?.[0]?.['imaging'])); });
  }

  get capabilities() {
    return new Promise((resolveCapabilities) => { this.cam?.getCapabilities((_err, data) => resolveCapabilities(data)); });
  }

  constructor(userConfig: DeviceConfig) {
    this.config = userConfig;
    this.label = this.config.label;
    this.client = new DigestClient(this.config.username, this.config.password);
  }

  init = (): Promise<Cam> => new Promise((resolve) => {
    this.cam = new Cam({ hostname: this.config.hostname, username: this.config.username, password: this.config.password, port: this.config.port }, async () => {
      // cam.getStreamUri((err, data) => log.data('getStreamUri', { err, data }));
      // cam.getSnapshotUri((err, data) => log.data('getSnapshotUri', { err, data }));
      // cam.getConfigurations((err, data) => log.data('getConfigurations', { err, data }));
      // cam.getHostname((err, data) => log.data('getHostname', { err, data }));
      // cam.getSystemDateAndTime((err, data) => log.data('getSystemDateAndTime', { err, data }));
      // cam.getServiceCapabilities((err, data) => log.data('getServiceCapabilities', { err, data }));
      // cam.getNodes((err, data) => log.data('getNodes', { err, data }));
      // cam.getDeviceInformation((err, data) => log.data('getDeviceInformation', { err, data }));
      // cam.getActiveSources((err, data) => log.data('getActiveSources', { err, data }));
      // cam.getCapabilities((err, data) => log.data('getCapabilities', { err, data }));
      // cam.getScopes((err, data) => log.data('getScopes', { err, data }));
      const promises = [
        new Promise((resolveVideo) => { this.cam?.getStreamUri((_err, data) => resolveVideo(data)); }),
        new Promise((resolveImage) => { this.cam?.getSnapshotUri((_err, data) => resolveImage(data)); }),
        new Promise((resolveSettings) => { this.cam?.getVideoSources((_err, data) => resolveSettings(data)); }),
      ];
      const [videoUri, imageUri, settings] = await Promise.all(promises);
      this.video = videoUri?.['uri'];
      this.image = imageUri?.['uri'];
      this.settings = { fps: settings?.[0]?.['framerate'], resolution: [settings?.[0]?.['resolution']?.['width'] || 0, settings?.[0]?.['resolution']?.['height'] || 0] };
      if (this.config.debug) log.state('onvif init', { label: this.label, hostname: this.cam?.hostname });
      resolve(this.cam as Cam);
    });
    // cam.onvif.on('rawResponse', (xml) => { log.state('<- response was', xml); });
  });

  snapshot = async (): Promise<Blob | undefined> => {
    if (!this.image) return undefined;
    const res = await this.client.fetch(this.image);
    const blob = res.status === 200 ? res.blob() : undefined;
    if (this.config.debug) log.state('onvif snapshot', { label: this.label, blob });
    return blob;
  };

  pan = async (x: number, y: number, zoom: number, timeout: number) => {
    if (!this.cam) return;
    this.cam.stop();
    // this.cam.continuousMove({ x, y, zoom }, callbackPan); // alternative
    // this.cam.absoluteMove({ x, y, zoom }, console.log); // alternative
    const profileToken = this.profile?.['PTZConfiguration']?.['token'] || '';
    const velocity: PTZVector = { panTilt: { x, y }, zoom: { x: zoom } };
    // @ts-ignore private
    this.cam.onvif.ptz.continuousMove({ profileToken, velocity, timeout });
    if (this.config.debug) log.state('onvif pan', { label: this.label, profileToken, velocity, timeout });
    setTimeout(() => this.cam?.stop(), timeout);
  };

  home = async () => {
    const callbackHome = (err, res) => {
      if (err) log.warn('onvif home', { label: this.label, err, res });
      else if (this.config.debug) log.state('onvif home', { label: this.label });
    };
    if (!this.cam) return;
    // this.cam.setHomePosition({ profileToken: this.profile?.['PTZConfiguration']?.['token'] || '' }, callbackHome);
    this.cam.gotoHomePosition({ profileToken: this.profile?.['PTZConfiguration']?.['token'] || '' }, callbackHome);
  };

  move = async (options: Move) => {
    const callbackMove = (err, res) => {
      if (err) log.warn('onvif pan', { label: this.label, options, err, res });
      else if (this.config.debug) log.state('onvif pan', { label: this.label, options, err, res });
    };
    if (!this.cam) return;
    if (!options.profile) options.profile = this.profile?.['PTZConfiguration']?.['token'] || '';
    const profileToken = options.profile || '';
    const speed: PTZSpeed | undefined = options.speed ? { panTilt: { x: options.speed, y: options.speed }, zoom: { x: options.speed } } : undefined;
    switch (options.type) {
      case 'absolute':
        const position: PTZVector = { panTilt: { x: options.vector[0], y: options.vector[1] }, zoom: { x: options.vector[2] } };
        if (speed) this.cam.absoluteMove({ profileToken, position, speed }, callbackMove);
        else this.cam.absoluteMove({ profileToken, position }, callbackMove);
        break;
      case 'relative':
        const translation: PTZVector = { panTilt: { x: options.vector[0], y: options.vector[1] }, zoom: { x: options.vector[2] } };
        if (speed) this.cam.relativeMove({ profileToken, translation, speed }, callbackMove);
        else this.cam.relativeMove({ profileToken, translation }, callbackMove);
        break;
      case 'continous':
        const velocity: PTZVector = { panTilt: { x: options.vector[0], y: options.vector[1] }, zoom: { x: options.vector[2] } };
        const timeout = options.timeout;
        if (timeout) this.cam.continuousMove({ profileToken, velocity, timeout }, callbackMove);
        else this.cam.continuousMove({ profileToken, velocity }, callbackMove);
        break;
      default:
    }
  };
}
