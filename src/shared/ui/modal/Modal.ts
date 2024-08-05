import { RoutingScene } from '@/scenes';
import gsap from 'gsap';
import { BlurFilter, Container, Graphics } from 'pixi.js';

export class Modal extends Container {
  declare parent: RoutingScene;
  label = 'modal';
  private readonly background;
  private readonly blurFilter: BlurFilter;
  isOpen: boolean = false;

  constructor() {
    super();

    this.blurFilter = new BlurFilter();
    this.background = new Graphics()
      .rect(0, 0, window.innerWidth, window.innerHeight)
      .fill({ color: '#000217', alpha: 0.5 });

    this.addChild(this.background);
    this.background.alpha = 0;
    this.visible = false;
  }

  open() {
    if (this.isOpen) return;

    this.isOpen = !this.isOpen;
    this.visible = true;
    gsap.to(this.background, {
      alpha: 1,
      duration: 0.2,
    });

    this.blurFilter.blur = 0;
    this.parent.gameScene.filters = [this.blurFilter];
    this.parent.gameScene.eventMode = 'none';
    gsap.to(this.blurFilter, { blur: 10, duration: 0.2 });
  }

  close() {
    if (!this.isOpen) return;

    this.parent.gameScene.eventMode = 'static';
    this.isOpen = !this.isOpen;
    this.visible = false;

    gsap.to(this.blurFilter, {
      blur: 0,
      duration: 0.2,
      onComplete: () => {
        this.parent.gameScene.filters = [];
        this.removeChild(this.background);
      },
    });
  }
}
