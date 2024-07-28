import { Container, Sprite, Texture } from 'pixi.js';
import { ALL_SHAPES, BLOCK_COLORS } from './shape.config';
import { GameScene } from '@/scenes';
import { getRandomInt } from '@/shared/utils';

export class Shape extends Container {
  declare parent: GameScene;
  isInstalled: boolean = false;
  readonly structure: number[][];
  originPosition!: { x: number; y: number };
  readonly textureName = this.getRandomBlockTextureName();
  readonly order: number;

  constructor(order: number, structure?: number[][]) {
    super();

    this.order = order;
    this.cursor = 'pointer';
    this.structure = structure ?? this.getRandomStructure();

    const shapes = this.initShape();
    this.eventMode = 'static';
    this.addChild(...shapes);

    const background = Sprite.from(Texture.EMPTY);
    background.width = this.width;
    background.height = this.height;
    this.addChild(background);

    this.scale.set(0.55);
    this.pivot.y = (0.5 * this.height) / this.scale.y;
    this.pivot.x = (0.5 * this.width) / this.scale.x;
  }

  resetPosition() {
    this.x = this.originPosition.x;
    this.y = this.originPosition.y;
  }

  private getRandomStructure(): number[][] {
    const shape = ALL_SHAPES[getRandomInt(0, ALL_SHAPES.length - 1)];

    return shape;
  }

  private getRandomBlockTextureName() {
    const textureName = BLOCK_COLORS[getRandomInt(0, BLOCK_COLORS.length - 1)];

    return textureName;
  }

  private initShape() {
    const blocks = [];

    for (const [i, row] of this.structure.entries()) {
      for (const [j, cell] of row.entries()) {
        const block = Sprite.from(this.textureName);
        block.width = 110;
        block.height = 110;
        block.x += 116 * j;
        block.y += 116 * i;
        blocks.push(block);
      }
    }

    return blocks;
  }
}
