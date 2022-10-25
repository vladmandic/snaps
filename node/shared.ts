import type { Device } from './onvif';

// holds active devices
export const devices: Device[] = [];

// holds updated sequence number
export const sequence: Record<string, number> = {};
