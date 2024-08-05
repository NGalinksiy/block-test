import { Container, Graphics, Sprite } from 'pixi.js';
import { Cell } from './cell/Cell';
import { Shape } from '../shape/Shape';
import { GameScene } from '@/scenes';
import { startLightVibrate } from '@/shared/utils';
import { CELL_MARGIN, GRID_MARGIN, GRID_SIDE } from '@/shared/constants';
import {
  LIGHT_PURPLE_GRID_BORDER,
  PURPLE_GRID_BACKGROUND,
} from './grid.constants';

export class Grid extends Container {
  declare parent: GameScene;
  private matrix!: Cell[][];
  size!: number;
  ghostPosition: {
    position: { x: number; y: number };
    sprites: Sprite[];
  } | null = null;
  installedShapes: Sprite[] = [];

  constructor() {
    super();

    const background = new Graphics()
      .roundRect(
        CELL_MARGIN * 2 + GRID_MARGIN,
        CELL_MARGIN * 2 + window.innerHeight / 2 - GRID_SIDE / 2,
        GRID_SIDE - CELL_MARGIN * 4,
        GRID_SIDE - CELL_MARGIN * 4,
        18
      )
      .fill(PURPLE_GRID_BACKGROUND);

    const border = new Graphics()
      .roundRect(
        GRID_MARGIN,
        0 + window.innerHeight / 2 - GRID_SIDE / 2,
        GRID_SIDE,
        GRID_SIDE,
        18
      )
      .fill(LIGHT_PURPLE_GRID_BORDER);

    this.addChild(border, background);
  }

  initMatrix(modelMatrix: (number | null)[][]): void {
    this.size = modelMatrix.length;
    const matrix: Cell[][] = new Array(this.size);

    for (let i = 0; i < this.size; i++) {
      matrix[i] = new Array(this.size);
      for (let j = 0; j < this.size; j++) {
        const cell = new Cell(j, i);
        matrix[i][j] = cell;
        this.addChild(cell);

        if (modelMatrix[i][j]) cell.setBlock('block-green', false);
        if (modelMatrix[i][j] === null) cell.tutorialLock = true;
      }
    }

    this.matrix = matrix;
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

        if (!cell || cell?.isInstalledBlock || cell?.tutorialLock) return false;
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

  isMatrixEmpty(): boolean {
    const size = this.matrix.length;

    for (let i = 0; i < size; i++) {
      if (this.matrix[i].filter((cell) => cell.isInstalledBlock).length) {
        return false;
      }
    }
    return true;
  }

  async checkMatrix(): Promise<void> {
    const size = this.matrix.length;
    let score: number = 0;
    const forDestruction = [];

    // очень тупая проверка всей матрицы, но я хочу спать
    for (let i = 0; i < size; i++) {
      let allOnes = true;
      for (let j = 0; j < size; j++) {
        if (!this.matrix[i][j].isInstalledBlock) {
          allOnes = false;
          break;
        }
      }
      if (allOnes) {
        startLightVibrate();
        this.matrix[i].forEach((cell) => {
          if (cell.isInstalledBlock) forDestruction.push(cell);
        });
      }
    }

    for (let j = 0; j < size; j++) {
      let allOnes = true;
      for (let i = 0; i < size; i++) {
        if (!this.matrix[i][j].isInstalledBlock) {
          allOnes = false;
          break;
        }
      }
      if (allOnes) {
        startLightVibrate();
        for (let i = 0; i < size; i++) {
          const cell = this.matrix[i][j];
          if (cell.isInstalledBlock) forDestruction.push(cell);
        }
      }
    }

    for (const cell of forDestruction) {
      score += 1;
      cell.clearCell();
    }

    console.log(score);
    this.parent.header.updateCurrentScore(score);
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
      for (const [j, value] of row.entries()) {
        if (!value) continue;
        const cell = this.matrix[y + i][x + j];
        cell.setBlock(dragTarget.textureName, true);
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
    let score = 0;
    for (const [i, row] of shape.structure.entries()) {
      for (const [j, value] of row.entries()) {
        if (!value) continue;

        const cell = this.matrix[y + i][x + j];
        cell.setBlock(shape.textureName, false);
        score += 1;
      }
    }

    this.parent.header.updateCurrentScore(score);
  }
}
