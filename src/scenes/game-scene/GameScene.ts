import { Grid, RowShape, Shape } from '@/entities';
import { DEFAULT_SIZE } from '@/entities/grid/grid.config';
import { Application, Container, FederatedPointerEvent } from 'pixi.js';
import { GameState } from './game-scene.types';

export class GameScene extends Container {
  label = 'game-scene';
  readonly grid: Grid;
  readonly rowShape: RowShape;
  private dragTarget: null | Shape = null;
  private gameState = GameState.GAMEPLAY;

  constructor(app: Application) {
    super();

    this.grid = new Grid();
    this.rowShape = new RowShape();

    this.eventMode = 'static';
    this.hitArea = app.screen;
    this.on('pointerup', this.onDragEnd);
    this.on('pointerupoutside', this.onDragEnd);

    this.addChild(this.grid, this.rowShape);

    this.rowShape.generateShape();
  }

  onDragStart() {
    console.log('started drag');
    this.alpha = 1;
    const parent = this.parent.parent as GameScene;
    console.log(this.getBounds());
    this.scale.set(1);
    this.pivot.y +=
      this.height >= 500 ? this.height / 2 : this.height / 2 + 110;

    //@ts-ignore
    parent.dragTarget = this;

    parent.on('pointermove', parent.onDragMove);
  }

  private onDragMove(event: FederatedPointerEvent) {
    if (!this.dragTarget) return;

    this.dragTarget.parent.toLocal(
      event.global,
      undefined,
      this.dragTarget.position
    );

    const { x: globalX, y: globalY } = this.dragTarget.getGlobalPosition();

    const rawX = Math.round((globalX - this.dragTarget.width * 0.7) / 110);
    const rawY = Math.round(
      (globalY - this.dragTarget.pivot.y) / 110 -
        this.dragTarget.height / 2 / 110
    );

    const [x, y] = this.resolvingCoordinates(rawX, rawY);

    console.log(`x: ${x}`, `y: ${y}`);

    this.grid.showGhost(this.dragTarget, { x, y });
  }

  update() {
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

  private onDragEnd(event: FederatedPointerEvent) {
    console.log(event);
    // console.log('ended drag', this.dragTarget);

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

    this.update();
  }

  private resolvingCoordinates(x: number, y: number) {
    let resolveX = x;
    let resolveY = y;

    if (resolveX > DEFAULT_SIZE - 1) {
      resolveX = DEFAULT_SIZE - 1;
    }
    if (resolveY > DEFAULT_SIZE - 1) {
      resolveY = DEFAULT_SIZE - 1;
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
