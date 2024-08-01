import { Container, Sprite, Texture } from 'pixi.js';
import { Shape } from '../shape/Shape';
import { GameScene } from '@/scenes';
import { GRID_SIDE } from '@/shared/constants';

export class RowShape extends Container {
  declare parent: GameScene;

  constructor() {
    super();

    const background = Sprite.from(Texture.EMPTY);
    background.width = GRID_SIDE;
    background.height = 300;

    this.y = GRID_SIDE + 50;

    this.addChild(background);
  }

  addShape(i: number) {
    const shape = new Shape(i);
    shape.on('pointerdown', shape.onDragStart, shape);

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

  getShapes(): Shape[] {
    return this.children.filter(
      (child) => child instanceof Shape && !child.isInstalled
    ) as Shape[];
  }

  generateShape() {
    if (this.getShapes().length) return;
    for (let i = 0; i < 3; i++) {
      this.addShape(i);
    }
  }
}
