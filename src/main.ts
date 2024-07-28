import { App } from './app/app';
import '@/app/styles/core.scss';

(async () => {
  const app = await App();

  document.getElementById('app')?.appendChild(app.canvas);
})();
