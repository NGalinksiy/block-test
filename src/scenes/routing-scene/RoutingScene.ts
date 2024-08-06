import { Container, Sprite, Texture } from 'pixi.js';
import { GameScene } from '../game-scene/GameScene';
import { PauseModal } from '@/entities/modals/pause-modal/PauseModal';
import { Modal } from '@/shared/ui';
import { GameOverModal } from '@/entities/modals/gameover-modal/GameOverModal';

export class RoutingScene extends Container {
  gameScene!: GameScene;
  currentModal: Modal | null = null;

  constructor() {
    super();

    this.resetGame();
  }

  resetGame() {
    this.currentModal?.close();
    this.removeChild(this.gameScene);
    this.gameScene = new GameScene();
    this.addChild(this.gameScene);
  }

  openPause() {
    this.currentModal = new PauseModal();

    this.addChild(this.currentModal);

    this.currentModal.open();
  }

  setGameover() {
    this.currentModal = new GameOverModal();

    this.addChild(this.currentModal);

    this.currentModal.open();
  }
}
