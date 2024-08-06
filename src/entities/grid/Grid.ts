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
import { BlockColor } from '../shape/shape.types';
import { GameState } from '@/scenes/game-scene/game-scene.types';
import gsap from 'gsap';

export class Grid extends Container {
  declare parent: GameScene;
  private matrix!: Cell[][];
  size!: number;
  ghostPosition: {
    position: { x: number; y: number };
    sprites: Sprite[];
    repaintedBlocks: Cell[];
  } | null = null;
  installedShapes: Sprite[] = [];
  tutorialAnimations: gsap.core.Tween[] = [];

  constructor() {
    super();

    this.sortableChildren = true;

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
    const isTutorial = this.parent.gameState === GameState.TUTORIAL;

    this.tutorialAnimations.forEach((animation) => animation.kill());

    for (let i = 0; i < this.size; i++) {
      matrix[i] = new Array(this.size);
      for (let j = 0; j < this.size; j++) {
        const cell = this.matrix ? this.matrix[i][j] : new Cell(j, i);
        matrix[i][j] = cell;
        if (!this.matrix) {
          this.addChild(cell);
        }

        if (modelMatrix[i][j]) cell.setBlock('block-green', false);
        cell.tutorialLock = modelMatrix[i][j] === null ? true : false;

        if (modelMatrix[i][j] === 0 && isTutorial) {
          const tutorialAnimation = gsap.to(cell, {
            duration: 0.5,
            alpha: 0.4,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
          });

          this.tutorialAnimations.push(tutorialAnimation);
        }
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

  checkMatrix(isGhost: boolean = false) {
    const size = this.matrix.length;
    let score: number = 0;
    const forDestruction: { vertical: Cell[]; horizontal: Cell[] } = {
      vertical: [],
      horizontal: [],
    };

    // horizontal lines
    for (let i = 0; i < size; i++) {
      let fullLine = true;
      for (let j = 0; j < size; j++) {
        const cell = this.matrix[i][j];
        if (!cell.hasBlock(isGhost)) {
          fullLine = false;
          break;
        }
      }

      if (!fullLine) continue;

      if (!isGhost) startLightVibrate();

      this.matrix[i].forEach((cell) => {
        if (cell.isInstalledBlock || cell.hasGhostBlock)
          forDestruction.horizontal.push(cell);
      });
    }

    // vertical lines
    for (let j = 0; j < size; j++) {
      let fullLine = true;
      for (let i = 0; i < size; i++) {
        const cell = this.matrix[i][j];
        if (!cell.hasBlock(isGhost)) {
          fullLine = false;
          break;
        }
      }

      if (!fullLine) continue;

      if (!isGhost) startLightVibrate();

      for (let i = 0; i < size; i++) {
        const cell = this.matrix[i][j];
        if (cell.isInstalledBlock || cell.hasGhostBlock)
          forDestruction.vertical.push(cell);
      }
    }

    if (isGhost) return forDestruction;

    for (const [i, cell] of forDestruction.horizontal.entries()) {
      score += 1;
      if (i % size === Math.floor(size / 2)) {
        this.destroyBlocksAnimation(cell, 'horizontal');
      }
      cell.clearCell();
    }

    for (const [i, cell] of forDestruction.vertical.entries()) {
      score += 1;
      cell.clearCell();
    }

    this.parent.header.updateCurrentScore(score);
    this.parent.update();
  }

  private destroyBlocksAnimation(
    centerCell: Cell,
    direction: 'vertical' | 'horizontal'
  ) {
    // const { minX, minY } = centerCell.getBounds();
    // const resolvedX =
    //   direction === 'vertical' ? minX + centerCell.width / 2 : minX;
    // const resolvedY =
    //   direction === 'horizontal' ? minY + centerCell.height / 2 : minY;
    // const rect = new Graphics()
    //   .rect(resolvedX - 5, resolvedY - 5, 10, 10)
    //   .fill('red');
    // if (direction === 'vertical') {
    //   // gsap.to(rect, { duration: 0.5, height: 100 });
    // } else {
    //   gsap.to(rect.scale, {
    //     x: 10,
    //     duration: 1,
    //     onComplete: () => {
    //       // Анимация расширения линии в ширину
    //       gsap.to(rect.scale, {
    //         y: 10,
    //         duration: 1,
    //       });
    //     },
    //   });
    // }
    // this.addChild(rect);
  }

  private showGhostDestruction(textureName: BlockColor) {
    const forDestruction = this.checkMatrix(true);

    if (!forDestruction) return;

    for (const cell of [
      ...forDestruction.horizontal,
      ...forDestruction.vertical,
    ]) {
      cell.changeColorBlock(textureName);
      this.ghostPosition?.repaintedBlocks.push(cell);
    }
  }

  showGhostShape(dragTarget: Shape, position: { x: number; y: number }) {
    const isValid = !this.validSet(dragTarget, position);
    if (isValid) {
      if (
        this.ghostPosition?.position.x !== position.x &&
        this.ghostPosition?.position.y !== position.y
      ) {
        this.resetGhost();
        if (this.ghostPosition) {
          for (const cell of this.ghostPosition.repaintedBlocks) {
            cell.resetColor();
          }
        }
      }
      return;
    }

    if (
      JSON.stringify(this.ghostPosition?.position) === JSON.stringify(position)
    ) {
      return;
    }
    if (this.ghostPosition) {
      for (const cell of this.ghostPosition.repaintedBlocks) {
        cell.resetColor();
      }
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
    this.showGhostDestruction(dragTarget.textureName);
  }

  resetGhost(position?: { x: number; y: number }) {
    if (this.ghostPosition?.sprites.length) {
      for (const sprite of this.ghostPosition!.sprites!) {
        try {
          //@ts-ignore
          sprite.parent.hasGhostBlock = false;
          sprite.parent.removeChild(sprite);
        } catch {}
      }
    }
    if (position) {
      this.ghostPosition = { position, sprites: [], repaintedBlocks: [] };
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
