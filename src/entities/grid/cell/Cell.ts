import { Container, Sprite, Texture } from 'pixi.js';

export class Cell extends Container {
  readonly boardPosition: { x: number; y: number };
  installedBlock: boolean = false;

  constructor(x: number, y: number) {
    super();
    this.boardPosition = { x, y };

    const cellColor = this.getColorCell();
    const cellLabel = `${cellColor} ${x}_${y}`;

    this.addChild(Sprite.from(cellColor));

    this.width = 110;
    this.height = 110;

    this.x = x * 110 + 6 * x + 24;
    this.y = y * 110 + 6 * y + 24;

    this.label = cellLabel;
  }

  clearCell() {
    this.installedBlock = false;
    this.removeChildren(1);
  }

  private getColorCell(): string {
    const { x, y } = this.boardPosition;

    if ((x + y) % 2 == 0) {
      return 'cell-dark';
    }
    return 'cell-light';
  }
}
