import { Container, Sprite, Texture } from 'pixi.js';
import { Shape } from '../shape/Shape';
import { GameScene } from '@/scenes';
import { CELL_MARGIN, GRID_MARGIN, GRID_SIDE } from '@/shared/constants';
import { GameState } from '@/scenes/game-scene/game-scene.types';
import { ShapeStructure } from '../shape/shape.types';
import { tutorialShapes } from './row-shape.constants';
import gsap from 'gsap';

export class RowShape extends Container {
  declare parent: GameScene;

  constructor() {
    super();

    const background = Sprite.from(Texture.EMPTY);
    background.width = GRID_SIDE;
    background.height = CELL_MARGIN * 55;

    this.addChild(background);
  }

  addShape(i: number, structure?: ShapeStructure) {
    const shape = new Shape(i, structure);
    shape.on('pointerdown', shape.onDragStart, shape);

    shape.x =
      i === 0
        ? shape.width / 2 + GRID_MARGIN * 2
        : i === 1
        ? this.width / 2 + GRID_MARGIN
        : this.width - shape.width / 2;
    shape.y = (CELL_MARGIN * 60) / 2;

    shape.originPosition = { x: shape.x, y: shape.y };

    shape.scale.set(0);

    this.addChild(shape);
    gsap.to(shape.scale, {
      x: 0.5,
      y: 0.5,
      duration: 0.2,
      ease: 'power1.inOut',
    });
  }

  getShapes(): Shape[] {
    return this.children.filter(
      (child) => child instanceof Shape && !child.isInstalled
    ) as Shape[];
  }

  generateShape() {
    if (!!this.getShapes().length) return;

    const gameState = this.parent.gameState;
    this.y = this.parent.grid.getBounds().maxY;

    if (
      gameState === GameState.TUTORIAL &&
      this.parent.tutorialLevel !== null
    ) {
      const structure = tutorialShapes[this.parent.tutorialLevel];
      this.addShape(1, structure);
      return;
    }

    for (let i = 0; i < 3; i++) {
      this.addShape(i);
    }
  }
}
