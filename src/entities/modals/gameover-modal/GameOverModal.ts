import {
  GAMEOVER_CONTAINER_HEIGHT,
  GAMEOVER_CONTAINER_WIDTH,
  SCALE,
} from '@/shared/constants';
import { Button, ButtonVariant, Modal } from '@/shared/ui';
import { RoutingScene } from '@/scenes';
import { Graphics, Sprite, Text } from 'pixi.js';
import { BestScore } from '@/entities/best-score/BestScore';
import { CurrentScore } from '@/entities/current-score/CurrentScore';
import { getBestScore, getCurrentScore } from '@/shared/utils/local-storage';

export class GameOverModal extends Modal {
  declare parent: RoutingScene;
  playButton: Button;

  constructor() {
    super();

    const container = new Graphics()
      .roundRect(
        window.innerWidth / 2,
        window.innerHeight / 2,
        GAMEOVER_CONTAINER_WIDTH,
        GAMEOVER_CONTAINER_HEIGHT,
        18
      )
      .fill({ color: '#4F5598A3', alpha: 0.64 });

    container.pivot.y = container.height * 0.5;
    container.pivot.x = container.width * 0.5;

    const separator = new Graphics()
      .rect(
        window.innerWidth / 2,
        window.innerHeight / 2,
        container.width - 20,
        2
      )
      .fill('#F5F5F5');

    separator.pivot.y = separator.height * 0.5;
    separator.pivot.x = separator.width * 0.5;

    const currentScore = new CurrentScore();
    const currentValue = getCurrentScore();
    currentScore.changeValue(currentValue, true);
    currentScore.x = window.innerWidth / 2;
    currentScore.y = window.innerHeight / 2 - currentScore.height / 2 - 10;

    const gameoverText = Sprite.from('gameover-text');
    gameoverText.scale.set(0.08);
    gameoverText.anchor.set(0.5);
    gameoverText.y =
      window.innerHeight / 2 - container.height / 2 - gameoverText.height;

    gameoverText.x = window.innerWidth / 2;

    const titleBestScore = new Text({
      text: 'Лучший счет',
      style: {
        fontFamily: 'archivo',
        fill: 'white',
        fontSize: 40 * SCALE,
      },
    });

    titleBestScore.anchor.set(0.5);
    titleBestScore.y = window.innerHeight / 2 + 20;
    titleBestScore.x = window.innerWidth / 2;

    const bestScore = new BestScore();

    bestScore.changeValue(getBestScore());
    bestScore.x = window.innerWidth / 2;
    bestScore.y = window.innerHeight / 2 + bestScore.height / 2 + 10;
    bestScore.pivot.x = bestScore.width * 0.5;

    this.playButton = new Button(
      ButtonVariant.PRIMARY,
      () => this.parent.resetGame(),
      {
        text: 'ПРОДОЛЖИТЬ',
        fromInvisibility: true,
      }
    );
    this.playButton.y = window.innerHeight - this.playButton.height;
    this.playButton.x = window.innerWidth / 2;

    this.addChild(
      this.playButton,
      container,
      separator,
      currentScore,
      gameoverText,
      bestScore,
      titleBestScore
    );
  }
}
