import cellDark from '@/assets/images/cell-dark.png';
import cellLight from '@/assets/images/cell-light.png';
import blockPink from '@/assets/images/block-pink.png';
import blockYellow from '@/assets/images/block-yellow.png';
import blockViolet from '@/assets/images/block-violet.png';
import blockGreen from '@/assets/images/block-green.png';
import crown from '@/assets/images/crown.png';
import pause from '@/assets/images/pause.png';
import volumeOff from '@/assets/images/volume-off.png';
import volumeOn from '@/assets/images/volume-on.png';
import buttonPrimary from '@/assets/images/button-primary.png';
import buttonSecondary from '@/assets/images/button-secondary.png';
import touchAnimation from '@/assets/spritesheets/touch-animation.png';
import gameoverText from '@/assets/images/gameover-text.png';
import archivo from '@/assets/fonts/Archivo.ttf';
import { VolumeToggleTexture } from '@/entities/buttons';

export const manifest = {
  bundles: [
    {
      name: 'assets',
      assets: {
        cellDark: { alias: 'cell-dark', src: cellDark },
        cellLight: { alias: 'cell-light', src: cellLight },
        blockPink: { alias: 'block-pink', src: blockPink },
        blockGreen: { alias: 'block-green', src: blockGreen },
        blockViolet: { alias: 'block-violet', src: blockViolet },
        blockYellow: { alias: 'block-yellow', src: blockYellow },
        crown: { alias: 'crown', src: crown },
        pause: { alias: 'pause', src: pause },
        volumeOff: { alias: VolumeToggleTexture.VOLUME_OFF, src: volumeOff },
        volumeOn: { alias: VolumeToggleTexture.VOLUME_ON, src: volumeOn },
        buttonPrimary: { alias: 'button-primary', src: buttonPrimary },
        buttonSecondary: { alias: 'button-secondary', src: buttonSecondary },
        archivo: { src: archivo },
        touchAnimation: { alias: 'touch-animation', src: touchAnimation },
        gameoverText: { alias: 'gameover-text', src: gameoverText },
      },
    },
  ],
};
