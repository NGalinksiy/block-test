import { Grid, RowShape, Shape } from '@/entities';
import { Container, FederatedPointerEvent } from 'pixi.js';
import { GameState } from './game-scene.types';
import { CELL_SIDE, GRID_SIDE } from '@/shared/constants';
import {
  CLEAR_MATRIX,
  TUTORIAL_MATRIX_ARRAY,
} from '@/entities/grid/grid.constants';
import { Header } from '@/widgets';
import { RoutingScene } from '../routing-scene/RoutingScene';
import {
  getBestScore,
  isPassedTutorial,
  setBestScore,
  setCurrentScore,
} from '@/shared/utils/local-storage';

export class GameScene extends Container {
  declare parent: RoutingScene;
  label = 'game-scene';
  readonly grid: Grid;
  readonly rowShape: RowShape;
  readonly header: Header;
  private _gameState!: GameState;
  private _tutorialLevel: 0 | 1 | 2 | null = null;
  isFirstPlay: boolean = !isPassedTutorial();
  dragTarget: null | Shape = null;

  constructor() {
    super();

    this.grid = new Grid();
    this.rowShape = new RowShape();
    this.header = new Header();

    setCurrentScore(0);

    if (this.isFirstPlay) {
      this.gameState = GameState.TUTORIAL;
    } else {
      this.gameState = GameState.GAMEPLAY;
    }

    this.eventMode = 'static';

    this.on('pointerup', this.onDragEnd);
    this.on('pointerupoutside', this.onDragEnd);

    this.addChild(this.grid, this.rowShape, this.header);

    this.rowShape.generateShape();
  }

  public get gameState(): GameState {
    return this._gameState;
  }

  public set gameState(gameState: GameState) {
    if (gameState === GameState.TUTORIAL) {
      this.tutorialLevel = 0;
    }

    if (gameState === GameState.GAMEPLAY) {
      if (this.isFirstPlay) {
        this.isFirstPlay = false;
      }
      this.grid.initMatrix(CLEAR_MATRIX);
      this.tutorialLevel = null;
    }

    this._gameState = gameState;
  }

  public get tutorialLevel() {
    return this._tutorialLevel;
  }

  public set tutorialLevel(value: 0 | 1 | 2 | null) {
    this._tutorialLevel = value;
    if (this._tutorialLevel === null) return;

    this.grid.initMatrix(TUTORIAL_MATRIX_ARRAY[this._tutorialLevel]);
  }

  onDragMove(event: FederatedPointerEvent): void {
    if (!this.dragTarget) return;

    this.dragTarget.parent.toLocal(
      event.global,
      undefined,
      this.dragTarget.position
    );

    const { x: globalX, y: globalY } = this.dragTarget.getGlobalPosition();

    const rawX = Math.round(
      (globalX - this.dragTarget.width * 0.5) / CELL_SIDE - 0.7
    );
    const rawY = Math.round(
      (globalY -
        (window.innerHeight / 2 - GRID_SIDE / 2) -
        this.dragTarget.pivot.y) /
        CELL_SIDE -
        0.5
    );

    const [x, y] = this.resolvingCoordinates(rawX, rawY);

    console.log(`x: ${x}`, `y: ${y}`);

    this.grid.showGhost(this.dragTarget, { x, y });
  }

  update(): void {
    if (this.grid.isMatrixEmpty() && this._gameState === GameState.TUTORIAL) {
      if (this.tutorialLevel !== null && this.tutorialLevel + 1 <= 2) {
        this.tutorialLevel += 1;
      } else {
        this.gameState = GameState.GAMEPLAY;
      }
    }

    this.rowShape.generateShape();

    const shapes = this.rowShape.getShapes();
    const isGameOver = !this.grid.canBeSet(shapes);

    if (isGameOver && this.gameState !== GameState.GAMEOVER) {
      this.gameState = GameState.GAMEOVER;
      setTimeout(() => {
        const prevBestScore = getBestScore();
        const currentScore = this.header.getCurrentScore();

        if (prevBestScore < currentScore) {
          setBestScore(currentScore);
        }

        this.parent.setGameover();
      }, 1000);
    }
  }

  private async onDragEnd(): Promise<void> {
    if (this.dragTarget) {
      this.off('pointermove', this.onDragMove);
      this.dragTarget.alpha = 1;
      this.grid.setShape(this.dragTarget);
      this.grid.resetGhost();

      if (this.dragTarget.isInstalled) {
        await this.grid.checkMatrix();
        this.rowShape.removeChild(this.dragTarget);
        this.dragTarget = null;
      } else {
        this.dragTarget.resetPosition();
      }
    }
  }

  private resolvingCoordinates(x: number, y: number): [number, number] {
    let resolveX = x;
    let resolveY = y;

    if (resolveX > this.grid.size - 1) {
      resolveX = this.grid.size - 1;
    }
    if (resolveY > this.grid.size - 1) {
      resolveY = this.grid.size - 1;
    }
    if (resolveX < 0) {
      resolveX = 0;
    }
    if (resolveY < 0) {
      resolveY = 0;
    }
    return [resolveX, resolveY];
  }
}
