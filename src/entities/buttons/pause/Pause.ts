import { Button, ButtonVariant } from '@/shared/ui';

export const Pause = (func: () => void) => {
  return new Button(ButtonVariant.ICON, func, {
    textureName: 'pause',
  });
};
