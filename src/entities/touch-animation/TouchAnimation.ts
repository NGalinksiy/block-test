import gsap from 'gsap';
import { AnimatedSprite, Spritesheet } from 'pixi.js';

export class TouchAnimation extends AnimatedSprite {
  constructor(spritesheet: Spritesheet) {
    super(spritesheet.animations.touch);
    this.animationSpeed = 1;
    this.scale.set(0.1);
    this.anchor.set(0.5);
    this.loop = false;
    this.onComplete = () => {
      gsap.to(this, {
        alpha: 0,
        duration: 0.3,
        onComplete: () => {
          this.destroy();
        },
      });
    };
  }

  playByClick(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.play();
  }
}
