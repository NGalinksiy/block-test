import {
  CROW_SIZE,
  FONT_BEST_SCORE_SIZE,
  ICON_PADDING,
} from '@/shared/constants';
import { getBestScore } from '@/shared/utils/local-storage';
import { Container, Sprite, Text } from 'pixi.js';

export class BestScore extends Container {
  private readonly text: Text;

  constructor() {
    super();
    const crown = Sprite.from('crown');
    crown.width = CROW_SIZE;
    crown.height = CROW_SIZE;
    crown.anchor.set(0.5);
    crown.y = ICON_PADDING / 2;
    crown.x = ICON_PADDING / 2 - CROW_SIZE / 2;

    this.text = new Text({
      text: getBestScore(),
      style: {
        fontFamily: 'archivo',
        fontSize: FONT_BEST_SCORE_SIZE,
        fill: '#FEFEFE',
      },
    });

    this.text.anchor.set(0.5);

    this.text.x = ICON_PADDING / 2 + this.text.width;
    this.text.y = ICON_PADDING / 2;

    this.addChild(crown, this.text);
  }

  changeValue(newValue: number) {
    this.text.text = newValue;
  }
}
