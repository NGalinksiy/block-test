import { Button, ButtonVariant } from '@/shared/ui';
import { VolumeToggleTexture } from './volume-toggle.types';

export class VolumeToggle extends Button {
  private isEnable: boolean = true;

  constructor() {
    super(ButtonVariant.ICON, () => this.toggleVolume(), {
      textureName: VolumeToggleTexture.VOLUME_ON,
    });
  }

  private toggleVolume(): void {
    const textureName = this.isEnable
      ? VolumeToggleTexture.VOLUME_OFF
      : VolumeToggleTexture.VOLUME_ON;

    this.isEnable = !this.isEnable;

    this.changeIcon(textureName);
  }
}
