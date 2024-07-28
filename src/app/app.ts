import { Application, Assets } from 'pixi.js';

import { manifest } from './assets.ts';
import { GameScene } from '@/scenes/index.ts';

export const App = async (): Promise<Application> => {
  const app = new Application();

  await app.init({
    height: 1417,
    width: 970,
    roundPixels: true,
    backgroundAlpha: 0,
  });

  await Assets.init({ manifest });
  await Assets.loadBundle('assets');

  globalThis.__PIXI_APP__ = app;

  const gameScene = new GameScene(app);

  app.stage.addChild(gameScene);

  return app;
};
