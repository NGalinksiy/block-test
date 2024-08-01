export const startLightVibrate = () => {
  const canVibrate = 'vibrate' in navigator;
  if (canVibrate) window.navigator.vibrate(100);
};
