let scale = 1;

const smallerSide =
  window.innerHeight < window.innerWidth
    ? window.innerHeight
    : window.innerWidth;

scale = smallerSide / 970;

export const GRID_MARGIN = 45 * scale;
export const GRID_SIDE = 970 * scale - GRID_MARGIN * 2;
export const CELL_SIDE = 98 * scale;
export const CELL_MARGIN = 6 * scale;

export const ICON_SIZE = 100 * scale;
export const ICON_PADDING = 166 * scale;

export const BUTTON_WIDTH = 845 * scale;
export const BUTTON_HEIGHT = 204 * scale;
export const BUTTON_GAP = 46 * scale;
export const BUTTON_BOTTOM_MARGIN = 340 * scale;
export const FONT_BUTTON_SIZE = 64 * scale;
export const PAUSE_ICON_SIZE = 300 * scale;
export const GAMEOVER_CONTAINER_HEIGHT = 851 * scale;
export const GAMEOVER_CONTAINER_WIDTH = 722 * scale;

export const GAMEOVER_TEXT_WIDTH = 1071 * scale;
export const GAMEOVER_TEXT_HEIGHT = 177 * scale;

export const HEIGHT_HEADER = 255 * scale;
export const FONT_CURRENT_SCORE_SIZE = 128 * scale;
export const FONT_BEST_SCORE_SIZE = 48 * scale;

export const CROW_SIZE = 54 * scale;

export const SCALE = scale;
