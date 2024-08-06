import {
  CELL_MARGIN,
  CELL_SIDE,
  GRID_MARGIN,
  GRID_SIDE,
} from '@/shared/constants';
import { Container, Sprite, Texture } from 'pixi.js';

import { BlockColor } from '../../shape/shape.types';
import { Grid } from '../Grid';
import gsap from 'gsap';
import { GameState } from '@/scenes/game-scene/game-scene.types';

export class Cell extends Container {
  declare parent: Grid;
  readonly boardPosition: { x: number; y: number };
  isInstalledBlock: boolean = false;
  hasGhostBlock: boolean = false;
  tutorialLock: boolean = false;
  originBlockColor: BlockColor | null = null;

  constructor(x: number, y: number, block?: Sprite) {
    super();
    this.boardPosition = { x, y };

    const cellColor = this.getColorCell();
    const cellLabel = `${cellColor} ${x}_${y}`;
    const cellBackground = Sprite.from(cellColor);

    this.addChild(cellBackground);

    if (block) this.addChild(block);

    this.width = CELL_SIDE;
    this.height = CELL_SIDE;

    this.x = x * CELL_SIDE + CELL_MARGIN * x + CELL_MARGIN * 4 + GRID_MARGIN;
    this.y =
      y * CELL_SIDE +
      CELL_MARGIN * y +
      CELL_MARGIN * 4 +
      window.innerHeight / 2 -
      GRID_SIDE / 2;

    this.label = cellLabel;
  }

  setBlock(textureName: BlockColor, isGhost: boolean) {
    const oldBlock = this.getBlock();
    if (oldBlock) {
      this.removeChild(oldBlock);
    }

    const block = Sprite.from(textureName);

    this.addChild(block);

    if (isGhost) {
      this.hasGhostBlock = true;
      block.alpha = 0.5;
      this.parent.ghostPosition?.sprites.push(block);
    } else {
      this.isInstalledBlock = true;
      this.originBlockColor = textureName;
    }
  }

  hasBlock(includeGhost: boolean) {
    if (includeGhost) {
      return (this.isInstalledBlock || this.hasGhostBlock) && !!this.getBlock();
    }

    return this.isInstalledBlock;
  }

  resetColor() {
    if (!this.originBlockColor) return;

    const block = this.getBlock();
    if (!block) return;

    block.texture = Texture.from(this.originBlockColor);
  }

  changeColorBlock(newTextureName: BlockColor) {
    if (!this.isInstalledBlock) return;
    const block = this.getBlock();

    if (!block) return;

    block.texture = Texture.from(newTextureName);
  }

  clearCell() {
    this.isInstalledBlock = false;

    const block = this.getBlock();
    if (!block) return;

    const { x, y } = block.getGlobalPosition();
    this.parent.parent.addChild(block);
    block.width = CELL_SIDE;
    block.height = CELL_SIDE;
    block.position.set(x, y);
    block.anchor.set(0.5);
    block.zIndex = 10;

    const directionRotate = gsap.utils.random(['-', '+']);

    gsap
      .timeline()
      .to(block, {
        duration: gsap.utils.random(0.4, 0.6),
        rotation: `${directionRotate}=${gsap.utils.random(2, 10)}`,
        x: `${directionRotate}=${gsap.utils.random(20, 60)}`,
        y: `-=${gsap.utils.random(30, 70)}`,
        ease: 'power1.out',
      })
      .to(block, {
        duration: gsap.utils.random(0.6, 1),
        y: window.innerHeight + block.height,
        rotation: `${directionRotate}${gsap.utils.random(1, 4)}`,
        ease: 'power1.in',

        onComplete: () => {
          this.parent.parent.removeChild(block);
        },
      });
  }

  private getBlock(): Sprite | null {
    const block = this.children[1] as Sprite;

    return block;
  }

  private getColorCell(): 'cell-dark' | 'cell-light' {
    const { x, y } = this.boardPosition;

    if ((x + y) % 2 == 0) {
      return 'cell-dark';
    }
    return 'cell-light';
  }
}
