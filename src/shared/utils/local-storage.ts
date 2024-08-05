export const setBestScore = (value: number) => {
  window.localStorage.setItem('best-score', `${value}`);
};

export const getBestScore = (): number => {
  const bestScore = window.localStorage.getItem('best-score');

  if (!bestScore) return 0;

  return parseInt(bestScore);
};

export const setCurrentScore = (value: number) => {
  window.localStorage.setItem('current-score', `${value}`);
};

export const getCurrentScore = (): number => {
  const currentScore = window.localStorage.getItem('current-score');

  if (!currentScore) return 0;

  return parseInt(currentScore);
};

export const isPassedTutorial = (): boolean => {
  return !!window.localStorage.getItem('best-score');
};
