export const updateScore = (value: number) => {
  const scoreElement = document.getElementById('score-value') as HTMLElement;

  scoreElement.innerText = `${Number(scoreElement.innerText) + value}`;
};
