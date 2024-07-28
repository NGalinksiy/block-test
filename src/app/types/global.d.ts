import { Application } from 'pixi.js';

declare global {
  namespace globalThis {
    var __PIXI_APP__: Application;
  }
}
