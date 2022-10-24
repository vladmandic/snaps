# Snaps

Capture snapshots from IP camera in regular intervals  
Organize them them by time and create a timelapse

## Server

- initializes devices using [ONVIF](https://en.wikipedia.org/wiki/ONVIF) protocol
- starts local web server
- gets image snapshots in regular intervals
- compresses and resizes them for optimal efficienty and stores them on local storage

## Client

- fetches image list from server and displays selected images on a timeline

## Configure

- `config.json`
  - default configuration is included
  - web server configuration details
  - snapshot interval
  - log file
  - where to get list of devices
  - where to store snapshots

- `secrets.json` (default, configurable in `config.json`)
  - must be created by user
  - list of onvif compatible devices to monitor in format of:
  ```js
  DeviceConfig[] = { label: string, hostname: string, port: number, username: string, password: string }[]
  ```

## Run

> npm install  
> npm start

## ToDo

- Pan/Zoom
- TimeLapse animation
