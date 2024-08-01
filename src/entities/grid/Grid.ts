import { Container, Graphics, Sprite } from 'pixi.js';
import { DEFAULT_SIZE } from './grid.config';
import { Cell } from './cell/Cell';
import { Shape } from '../shape/Shape';
import { updateScore } from '../score/update-score';
import { GameScene } from '@/scenes';
import { startLightVibrate } from '@/shared/utils';
import { CELL_MARGIN, GRID_SIDE } from '@/shared/constants';
import {
  LIGHT_PURPLE_GRID_BORDER,
  PURPLE_GRID_BACKGROUND,
} from './grid.constants';
import { objectToCenter } from '@/shared/utils/object-to-center';
import { PIXI_CONFIG } from '@/app';

export class Grid extends Container {
  declare parent: GameScene;
  private readonly matrix: Cell[][];
  size: number = DEFAULT_SIZE;
  ghostPosition: {
    position: { x: number; y: number };
    sprites: Sprite[];
  } | null = null;
  installedShapes: Sprite[] = [];

  constructor() {
    super();

    const background = new Graphics()
      .roundRect(12, 12, GRID_SIDE - 24, GRID_SIDE - 24, CELL_MARGIN)
      .fill(PURPLE_GRID_BACKGROUND);

    const border = new Graphics()
      .roundRect(0, 0, GRID_SIDE, GRID_SIDE, CELL_MARGIN * 3)
      .fill(LIGHT_PURPLE_GRID_BORDER);

    this.addChild(border, background);

    this.matrix = this.initMatrix();

    // this.pivot.y = (0.5 * this.height) / this.scale.y;
    // this.pivot.x = (0.5 * this.width) / this.scale.x;
    // this.x = PIXI_CONFIG.width / 2;
  }

  private initMatrix(size: number = DEFAULT_SIZE): Cell[][] {
    this.size = size;
    const matrix: Cell[][] = new Array(size);

    for (let i = 0; i < size; i++) {
      matrix[i] = new Array(size);
      for (let j = 0; j < size; j++) {
        const cell = new Cell(j, i);
        this.addChild(cell);
        matrix[i][j] = cell;
      }
    }

    return matrix;
  }

  private validSet(shape: Shape, position: { x: number; y: number }): boolean {
    const { x, y } = position;

    for (const [i, row] of shape.structure.entries()) {
      for (const [j, value] of row.entries()) {
        if (!value) continue;
        let cell: Cell | undefined = undefined;
        try {
          cell = this.matrix[y + i][x + j];
        } catch {
          return false;
        }

        if (!cell || cell?.installedBlock) return false;
      }
    }

    return true;
  }

  canBeSet(shapes: Shape[]): boolean {
    if (!shapes.length) return true;

    const size = this.matrix.length;

    let shapesCantBeSet = [...shapes];

    for (let j = 0; j < size; j++) {
      for (let i = 0; i < size; i++) {
        for (const shape of shapes) {
          if (!this.validSet(shape, { x: i, y: j })) continue;

          shape.toEnable();
          shapesCantBeSet = shapesCantBeSet.filter((s) => s.uid !== shape.uid);
        }
      }
    }

    shapesCantBeSet.forEach((shape) => shape.toDisable());

    return shapes.length !== shapesCantBeSet.length;
  }

  checkMatrix(): void {
    const size = this.matrix.length;
    let score: number = 0;
    const forDestruction = [];

    // очень тупая проверка всей матрицы, но я хочу спать
    for (let i = 0; i < size; i++) {
      let allOnes = true;
      for (let j = 0; j < size; j++) {
        if (!this.matrix[i][j].installedBlock) {
          allOnes = false;
          break;
        }
      }
      if (allOnes) {
        startLightVibrate();
        this.matrix[i].forEach((cell) => {
          forDestruction.push(cell);
        });
      }
    }

    for (let j = 0; j < size; j++) {
      let allOnes = true;
      for (let i = 0; i < size; i++) {
        if (!this.matrix[i][j].installedBlock) {
          allOnes = false;
          break;
        }
      }
      if (allOnes) {
        startLightVibrate();
        for (let i = 0; i < size; i++) {
          forDestruction.push(this.matrix[i][j]);
        }
      }
    }

    forDestruction.forEach((cell) => {
      score += 1;
      cell.clearCell();
    });

    updateScore(score);
    this.parent.update();
  }

  showGhost(dragTarget: Shape, position: { x: number; y: number }) {
    const isValid = !this.validSet(dragTarget, position);
    if (isValid) {
      if (
        this.ghostPosition?.position.x !== position.x &&
        this.ghostPosition?.position.y !== position.y
      ) {
        this.resetGhost();
      }
      return;
    }

    if (
      JSON.stringify(this.ghostPosition?.position) === JSON.stringify(position)
    ) {
      return;
    }

    this.resetGhost(position);

    const { x, y } = position;

    for (const [i, row] of dragTarget.structure.entries()) {
      for (const [j, cell] of row.entries()) {
        if (!cell) continue;
        this.addShape(x + j, y + i, dragTarget.textureName, true);
      }
    }
  }

  resetGhost(position?: { x: number; y: number }) {
    if (this.ghostPosition?.sprites.length) {
      for (const sprite of this.ghostPosition!.sprites!) {
        sprite.parent.removeChild(sprite);
      }
    }
    if (position) {
      this.ghostPosition = { position, sprites: [] };
    } else {
      this.ghostPosition = null;
    }
  }

  setShape(shape: Shape) {
    const position = this.ghostPosition?.position;
    if (!position) return;

    shape.isInstalled = true;

    const { x, y } = position;

    for (const [i, row] of shape.structure.entries()) {
      for (const [j, cell] of row.entries()) {
        if (!cell) continue;
        this.addShape(x + j, y + i, shape.textureName, false);
      }
    }
  }

  private addShape(
    x: number,
    y: number,
    textureName: string,
    isGhost: boolean
  ) {
    try {
      const sprite = Sprite.from(textureName);

      if (isGhost) {
        sprite.alpha = 0.5;
        this.ghostPosition?.sprites.push(sprite);
      } else {
        this.matrix[y][x].installedBlock = true;
      }

      this.matrix[y][x].addChild(sprite);
    } catch {}
  }
}
