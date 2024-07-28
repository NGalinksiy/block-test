import { Container, Sprite, Texture } from 'pixi.js';
import { Shape } from '../shape/Shape';
import { ShapeName } from '../shape/shape.config';

export class RowShape extends Container {
  constructor() {
    super();

    const background = Sprite.from(Texture.EMPTY);
    background.width = 970;
    background.height = 300;

    this.y = 970 + 50;

    this.addChild(background);
  }

  addShape(i: number) {
    const shape = new Shape(i);
    shape.on('pointerdown', this.parent.onDragStart, shape);

    shape.x =
      i === 0
        ? shape.width / 2
        : i === 1
        ? this.width / 2
        : this.width - shape.width / 2;
    shape.y = 300 / 2;

    shape.originPosition = { x: shape.x, y: shape.y };

    this.addChild(shape);
  }

  generateShape() {
    console.log(this.children);
    if (this.children.length !== 1) return;
    for (let i = 0; i < 3; i++) {
      this.addShape(i);
    }
  }
}
