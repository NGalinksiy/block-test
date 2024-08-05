import { BestScore, CurrentScore } from '@/entities';
import { Pause, VolumeToggle } from '@/entities/buttons';
import { GameScene } from '@/scenes';
import { GRID_MARGIN, GRID_SIDE, HEIGHT_HEADER } from '@/shared/constants';
import { Button } from '@/shared/ui';
import { Container, Sprite, Texture } from 'pixi.js';

export class Header extends Container {
  declare parent: GameScene;
  private readonly PauseButton: Button;
  readonly volumeToggle: VolumeToggle;
  private readonly currentScore: CurrentScore;
  private readonly bestScore: BestScore;

  constructor() {
    super();

    const background = Sprite.from(Texture.EMPTY);
    background.width = GRID_SIDE;
    background.height = HEIGHT_HEADER;
    this.x += GRID_MARGIN;

    this.bestScore = new BestScore();

    this.PauseButton = Pause(() => this.openPause());
    this.PauseButton.x = background.width - this.PauseButton.width;
    this.PauseButton.y = background.height / 2 + 20;

    this.volumeToggle = new VolumeToggle();
    this.volumeToggle.y = background.height / 2 + 20;

    this.currentScore = new CurrentScore();
    this.currentScore.y = background.height / 2 + 20;
    this.currentScore.x = background.width / 2;

    this.addChild(
      background,
      this.bestScore,
      this.PauseButton,
      this.volumeToggle,
      this.currentScore
    );
  }

  updateCurrentScore(value: number) {
    this.currentScore.changeValue(value);
  }

  getCurrentScore() {
    return parseInt(this.currentScore.text) ?? 0;
  }

  openPause() {
    this.parent.parent.openPause();
  }
}
