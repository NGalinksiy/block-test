import {
  CELL_MARGIN,
  CELL_SIDE,
  GRID_MARGIN,
  GRID_SIDE,
} from '@/shared/constants';
import { Container, Sprite } from 'pixi.js';

import { BlockColor } from '../../shape/shape.types';
import { Grid } from '../Grid';

export class Cell extends Container {
  declare parent: Grid;
  readonly boardPosition: { x: number; y: number };
  isInstalledBlock: boolean = false;
  tutorialLock: boolean = false;

  constructor(x: number, y: number, block?: Sprite) {
    super();
    this.boardPosition = { x, y };

    const cellColor = this.getColorCell();
    const cellLabel = `${cellColor} ${x}_${y}`;

    this.addChild(Sprite.from(cellColor));

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
    const block = Sprite.from(textureName);

    if (isGhost) {
      block.alpha = 0.5;
      this.parent.ghostPosition?.sprites.push(block);
    } else {
      this.isInstalledBlock = true;
    }

    this.addChild(block);
  }

  clearCell() {
    this.isInstalledBlock = false;
    try {
      this.removeChildren(1);
    } catch {}
  }

  private getColorCell(): 'cell-dark' | 'cell-light' {
    const { x, y } = this.boardPosition;

    if ((x + y) % 2 == 0) {
      return 'cell-dark';
    }
    return 'cell-light';
  }
}
