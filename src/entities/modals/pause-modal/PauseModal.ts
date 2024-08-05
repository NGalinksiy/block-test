import { Sprite } from 'pixi.js';
import {
  BUTTON_BOTTOM_MARGIN,
  BUTTON_GAP,
  PAUSE_ICON_SIZE,
} from '@/shared/constants';
import { Button, ButtonVariant, Modal } from '@/shared/ui';
import { objectToCenter } from '@/shared/utils/object-to-center';
import { RoutingScene } from '@/scenes';

export class PauseModal extends Modal {
  declare parent: RoutingScene;
  playButton: Button;
  resetButton: Button;
  pauseIcon: Sprite;

  constructor() {
    super();

    this.resetButton = new Button(
      ButtonVariant.SECONDARY,
      () => this.parent.resetGame(),
      { text: 'НАЧАТЬ СНАЧАЛА', fromInvisibility: true }
    );

    this.resetButton.y = window.innerHeight - BUTTON_BOTTOM_MARGIN;
    this.resetButton.x = window.innerWidth / 2;

    this.playButton = new Button(ButtonVariant.PRIMARY, () => this.close(), {
      text: 'ПРОДОЛЖИТЬ',
      fromInvisibility: true,
    });
    this.playButton.y =
      this.resetButton.y - this.resetButton.height - BUTTON_GAP;
    this.playButton.x = window.innerWidth / 2;

    this.pauseIcon = Sprite.from('pause');
    this.pauseIcon.width = PAUSE_ICON_SIZE;
    this.pauseIcon.height = PAUSE_ICON_SIZE;
    this.pauseIcon.anchor.set(0.5, 1);
    objectToCenter([this.pauseIcon]);

    this.addChild(this.playButton, this.resetButton, this.pauseIcon);
  }
}
