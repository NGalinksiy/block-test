import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import { DEFAULT_SIZE } from './grid.config';
import { Cell } from './cell/Cell';
import { Shape } from '../shape/Shape';
import { updateScore } from '../score/update-score';

export class Grid extends Container {
  private readonly matrix: Cell[][];
  ghostPosition: {
    position: { x: number; y: number };
    sprites: Sprite[];
  } | null = null;
  installedShapes: Sprite[] = [];

  constructor() {
    super();

    const background = new Graphics()
      .roundRect(12, 12, 946, 946, 6)
      .fill('32166D');

    const border = new Graphics().roundRect(0, 0, 970, 970, 18).fill('E6C7E9');

    this.addChild(border, background);

    this.matrix = this.initMatrix();
  }

  private initMatrix(size: number = DEFAULT_SIZE): Cell[][] {
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
      for (const [j, cell] of row.entries()) {
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

  checkMatrix() {
    const size = this.matrix.length;
    let score: number = 0;

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
        this.matrix[i].forEach((cell) => {
          cell.clearCell();
          score += 1;
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
        for (let i = 0; i < size; i++) {
          const cell = this.matrix[i][j];
          cell.clearCell();
          score += 1;
        }
      }
    }

    updateScore(score);
  }
  showGhost(dragTarget: Shape, position: { x: number; y: number }) {
    if (!this.validSet(dragTarget, position)) {
      this.resetGhost();
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
    } catch {
      console.log('error');
    }
  }
}
