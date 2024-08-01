import { PIXI_CONFIG } from '@/app/pixi-config';
import { Container, Sprite } from 'pixi.js';

export const objectToCenter = (
  toCenter: Container[],
  setAnchor: boolean = false
) => {
  const setToCenter = (obj: Container) => {
    if (!(obj instanceof Container)) return;

    const { width, height } = PIXI_CONFIG;

    obj.x = width / 2;
    obj.y = height / 2;

    if (setAnchor && obj instanceof Sprite) {
      obj.anchor.set(0.5);
      return;
    }

    if (setAnchor && obj instanceof Container) {
      obj.pivot.y = (0.5 * obj.height) / obj.scale.y;
      obj.pivot.x = (0.5 * obj.width) / obj.scale.x;
      return;
    }
  };

  toCenter.forEach(setToCenter);
};
