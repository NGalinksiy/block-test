import { Grid, RowShape, Shape } from '@/entities';
import { DEFAULT_SIZE } from '@/entities/grid/grid.config';
import { Application, Container, FederatedPointerEvent } from 'pixi.js';

export class GameScene extends Container {
  label = 'game-scene';
  private readonly grid: Grid;
  private readonly rowShape: RowShape;
  private dragTarget: null | Shape = null;

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

  onDragStart(event: FederatedPointerEvent) {
    console.log('started drag');
    this.alpha = 0.5;
    const parent = this.parent.parent as GameScene;

    parent.dragTarget = this;

    parent.on('pointermove', parent.onDragMove);
  }

  private onDragMove(event: FederatedPointerEvent) {
    // console.log('move', this.dragTarget);
    if (this.dragTarget) {
      this.dragTarget.parent.toLocal(
        event.global,
        undefined,
        this.dragTarget.position
      );

      const { x: globalX, y: globalY } = this.dragTarget.getGlobalPosition();

      if (globalY >= 1010) {
        this.grid.resetGhost();
        return;
      }

      const rawX = Math.round(globalX / 110 - this.dragTarget.width / 110);
      const rawY = Math.round(
        globalY / 110 - (this.dragTarget.height * 2) / 110
      );

      const [x, y] = this.resolvingCoordinates(rawX, rawY);

      console.log(x, y);

      this.grid.showGhost(this.dragTarget, { x, y });
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
        this.rowShape.generateShape();
      } else {
        this.dragTarget.resetPosition();
      }
    }
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
    if (resolveX === -1) {
      resolveX = 0;
    }
    if (resolveY === -1) {
      resolveY = 0;
    }
    return [resolveX, resolveY];
  }
}
