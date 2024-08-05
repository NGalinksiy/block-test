import { Shape } from '@/entities';
import { shape1x4 } from '@/entities/shape/shape.config';
import { Container, Graphics } from 'pixi.js';

export class MenuScene extends Container {
  constructor() {
    super();
    const graphics = new Graphics()
      .rect(0, 0, window.innerWidth, window.innerHeight)
      .fill({ color: '#000217', alpha: 0.5 });

    this.addChild(graphics, new Shape(1, shape1x4));
  }
}
