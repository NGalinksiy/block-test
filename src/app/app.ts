import { Application, Assets, Spritesheet, Texture } from 'pixi.js';

import { manifest } from './assets.ts';
import { RoutingScene } from '@/scenes/index.ts';

import touchAnimationsJSON from '@/assets/spritesheets/touch-animation.json';
import { TouchAnimation } from '@/entities/touch-animation/TouchAnimation.ts';
import { Shape } from '@/entities/index.ts';

export const App = async (): Promise<Application> => {
  const app = new Application();

  await app.init({
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundAlpha: 0,
    resolution: window?.devicePixelRatio ?? 1,
  });

  await Assets.init({ manifest });
  await Assets.loadBundle('assets');

  globalThis.__PIXI_APP__ = app;

  const routingScene = new RoutingScene();

  const spritesheet = new Spritesheet(
    Texture.from('touch-animation'),
    touchAnimationsJSON
  );

  await spritesheet.parse();
  app.stage.hitArea = app.screen;
  app.stage.interactive = true;
  app.stage.on('pointerdown', (event) => {
    console.log(event);
    if (event.target instanceof Shape) return;
    const touchAnimation = new TouchAnimation(spritesheet);
    app.stage.addChild(touchAnimation);

    touchAnimation.playByClick(event.x, event.y);
  });

  app.stage.addChild(routingScene);

  return app;
};
