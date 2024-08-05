import { FONT_CURRENT_SCORE_SIZE } from '@/shared/constants';
import { setCurrentScore } from '@/shared/utils/local-storage';
import { Color, FillGradient, Text } from 'pixi.js';

export class CurrentScore extends Text {
  constructor() {
    const fill = new FillGradient(50, 0, 50, 100);

    const colors = [0x1372c9, 0x41d2e8].map((color) =>
      Color.shared.setValue(color).toNumber()
    );

    colors.forEach((number, index) => {
      fill.addColorStop(index * 1, number);
    });
    super({
      text: '0',
      style: {
        fill: { fill },
        fontFamily: 'archivo',
        fontSize: FONT_CURRENT_SCORE_SIZE,
      },
    });

    this.anchor.set(0.5);
  }

  changeValue(value: number, force: boolean = false) {
    if (force) {
      this.text = value;
      setCurrentScore(value);
      return;
    }
    this.text = +this.text + value;
    setCurrentScore(+this.text + value);
  }
}
