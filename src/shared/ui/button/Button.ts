import { Container, Sprite, Text, Texture } from 'pixi.js';
import { ButtonVariant } from './button.types';
import {
  BUTTON_HEIGHT,
  BUTTON_WIDTH,
  FONT_BUTTON_SIZE,
  ICON_PADDING,
  ICON_SIZE,
} from '@/shared/constants';
import gsap from 'gsap';

export class Button extends Container {
  background?: Sprite;
  text?: Text;
  variant: ButtonVariant;

  constructor(
    variant: ButtonVariant,
    onClick: () => void,
    options?: {
      textureName?: string;
      text?: string;
      fromInvisibility?: boolean;
    }
  ) {
    super();

    this.eventMode = 'static';
    this.cursor = 'pointer';
    this.interactive = true;

    this.on('pointerdown', onClick);
    this.variant = variant;

    if (variant === ButtonVariant.ICON && options?.textureName) {
      const padding = Sprite.from(Texture.EMPTY);
      padding.width = ICON_PADDING;
      padding.height = ICON_PADDING;

      const sprite = Sprite.from(options?.textureName);
      sprite.label = 'icon';
      sprite.width = ICON_SIZE;
      sprite.height = ICON_SIZE;
      sprite.anchor.set(0.5);
      sprite.x = ICON_PADDING / 2;
      sprite.y = ICON_PADDING / 2;

      this.addChild(padding, sprite);
    }

    if (
      (variant === ButtonVariant.PRIMARY ||
        variant === ButtonVariant.SECONDARY) &&
      options?.text
    ) {
      this.background = Sprite.from(`button-${variant}`);
      this.background.width = BUTTON_WIDTH;
      this.background.height = BUTTON_HEIGHT;

      this.text = new Text({
        text: options.text,
        style: { fill: 'white', fontSize: FONT_BUTTON_SIZE },
      });
      this.text.anchor.set(0.5);
      this.text.x = this.background.width / 2;
      this.text.y = this.background.height / 2;

      this.addChild(this.background, this.text);
      this.pivot.x = 0.5 * this.width;
    }
    this.pivot.y = 0.5 * this.height;

    if (options?.fromInvisibility) {
      this.alpha = 0;

      gsap.to(this, { alpha: 1, duration: 0.2 });
    }
  }

  changeIcon(textureName: string) {
    const icon = this.children.find(
      (child) => child.label === 'icon'
    ) as Sprite;

    icon.texture = Texture.from(textureName);
  }

  disable() {
    // this.eventMode = 'none';
  }

  enable() {
    this.eventMode = 'static';
  }
}
