import { Container, Rectangle, Sprite } from 'pixi.js';
import { ALL_SHAPES, BLOCK_COLORS } from './shape.config';
import { GameScene } from '@/scenes';
import { getRandomInt } from '@/shared/utils';
import { CELL_MARGIN, CELL_SIDE } from '@/shared/constants';
import { BlockColor, ShapeStructure } from './shape.types';
import gsap from 'gsap';

export class Shape extends Container {
  declare parent: GameScene;
  isInstalled: boolean = false;
  readonly structure: ShapeStructure;
  originPosition!: { x: number; y: number };
  readonly textureName = this.getRandomBlockTextureName();
  readonly order: number;

  constructor(order: number, structure?: ShapeStructure) {
    super();

    this.order = order;
    this.cursor = 'pointer';
    this.structure = structure ?? this.getRandomStructure();

    const shapes = this.initShape();
    this.eventMode = 'static';
    this.addChild(...shapes);

    this.hitArea = new Rectangle(
      -CELL_SIDE,
      -CELL_SIDE,
      this.width + CELL_SIDE * 2,
      this.height + CELL_SIDE * 2
    );

    this.scale.set(0.5);
    this.pivot.y = (0.5 * this.height) / this.scale.y;
    this.pivot.x = (0.5 * this.width) / this.scale.x;
  }

  onDragStart() {
    this.alpha = 1;
    const parent = this.parent.parent as GameScene;
    this.scale.set(1);
    this.pivot.y +=
      this.height >= 500 ? this.height / 2 : this.height / 2 + CELL_SIDE;

    parent.dragTarget = this;

    parent.on('pointermove', parent.onDragMove);
  }

  toDisable() {
    this.eventMode = 'none';

    if (this.alpha === 0.5) return;

    gsap.to(this, {
      alpha: 0.5,
      duration: 0.2,
      ease: 'power1.inOut',
    });
  }

  toEnable() {
    this.eventMode = 'static';

    if (this.alpha === 1) return;

    gsap.to(this, {
      alpha: 1,
      duration: 0.2,
      ease: 'power1.inOut',
    });
  }

  resetPosition() {
    this.pivot.y = (0.5 * this.height) / this.scale.y;
    this.pivot.x = (0.5 * this.width) / this.scale.x;
    this.x = this.originPosition.x;
    this.y = this.originPosition.y;
    this.scale.set(0.5);
  }

  private getRandomStructure(): ShapeStructure {
    const shape = ALL_SHAPES[getRandomInt(0, ALL_SHAPES.length - 1)];

    return shape;
  }

  private getRandomBlockTextureName(): BlockColor {
    const textureName = BLOCK_COLORS[getRandomInt(0, BLOCK_COLORS.length - 1)];

    return textureName;
  }

  private initShape() {
    const blocks = [];

    for (const [i, row] of this.structure.entries()) {
      for (const [j, cell] of row.entries()) {
        if (!cell) {
          continue;
        }
        const block = Sprite.from(this.textureName);
        block.width = CELL_SIDE;
        block.height = CELL_SIDE;
        block.x += (CELL_SIDE + CELL_MARGIN) * j;
        block.y += (CELL_SIDE + CELL_MARGIN) * i;
        blocks.push(block);
      }
    }

    return blocks;
  }
}
