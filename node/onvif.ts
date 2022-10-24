import { Cam } from 'onvif/build'; // <https://github.com/agsh/onvif>
import { DigestClient } from './digest';

export type DeviceConfig = { label: string, hostname: string, port: number, username: string, password: string }

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
    return new Promise((resolve) => { this.cam?.getVideoSources((_err, data) => resolve(data?.[0]?.['imaging'])); });
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
      // log.data('ptz', cam.onvif.ptz);
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
      resolve(this.cam as Cam);
    });
    // cam.onvif.on('rawResponse', (xml) => { log.state('<- response was', xml); });
  });

  snapshot = async (): Promise<Blob | undefined> => {
    if (!this.image) return undefined;
    const res = await this.client.fetch(this.image);
    if (res.status === 200) return res.blob();
    return undefined;
  };
}
