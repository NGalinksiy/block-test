import cellDark from '@/assets/images/cell-dark.png';
import cellLight from '@/assets/images/cell-light.png';
import blockPink from '@/assets/images/block-pink.png';
import blockYellow from '@/assets/images/block-yellow.png';
import blockViolet from '@/assets/images/block-violet.png';
import blockGreen from '@/assets/images/block-green.png';

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
      },
    },
  ],
};
