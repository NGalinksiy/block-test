import { Grid, RowShape, Shape } from '@/entities';
import {
  Application,
  Container,
  FederatedPointerEvent,
  Rectangle,
} from 'pixi.js';
import { GameState } from './game-scene.types';
import { CELL_SIDE } from '@/shared/constants';

export class GameScene extends Container {
  label = 'game-scene';
  readonly grid: Grid;
  readonly rowShape: RowShape;
  private gameState = GameState.GAMEPLAY;
  dragTarget: null | Shape = null;

  constructor(app: Application) {
    super();

    this.grid = new Grid();
    this.rowShape = new RowShape();

    this.eventMode = 'static';
    this.hitArea = new Rectangle(0, 0, 970, 1417);

    this.on('pointerup', this.onDragEnd);
    this.on('pointerupoutside', this.onDragEnd);

    this.addChild(this.grid, this.rowShape);

    this.rowShape.generateShape();
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
      (globalY - this.dragTarget.pivot.y) / CELL_SIDE - 0.5
    );

    const [x, y] = this.resolvingCoordinates(rawX, rawY);

    console.log(`x: ${x}`, `y: ${y}`);

    this.grid.showGhost(this.dragTarget, { x, y });
  }

  update(): void {
    this.rowShape.generateShape();
    const shapes = this.rowShape.getShapes();
    const isGameOver = !this.grid.canBeSet(shapes);

    if (isGameOver && this.gameState !== GameState.GAMEOVER) {
      this.gameState = GameState.GAMEOVER;
      setTimeout(() => {
        window.confirm('gameover');
        window.location.reload();
      }, 1000);
    }
  }

  private onDragEnd(): void {
    console.log('ended drag', this.dragTarget);

    if (this.dragTarget) {
      this.off('pointermove', this.onDragMove);
      this.dragTarget.alpha = 1;
      this.grid.setShape(this.dragTarget);
      this.grid.resetGhost();

      if (this.dragTarget.isInstalled) {
        this.grid.checkMatrix();
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
