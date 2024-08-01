export enum ShapeName {
  DOTS = 'dots',
}

const shape1x1 = [[1]];

const shape2x2 = [
  [1, 1],
  [1, 1],
];

const shape3x1 = [[1, 1, 1]];

const shape1x3 = [[1], [1], [1]];

const shape3x3 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

const shape4x1 = [[1, 1, 1, 1]];

const shape1x4 = [[1], [1], [1], [1]];

const shape5x1 = [[1, 1, 1, 1, 1]];

const shape1x5 = [[1], [1], [1], [1], [1]];

const shapeTriangle_1 = [
  [1, 0],
  [1, 1, 1],
];

const shapeTriangle_2 = [
  [0, 0, 1],
  [1, 1, 1],
];

const shapeTriangle_3 = [
  [1, 1, 1],
  [1, 0, 0],
];

const shapeTriangle_4 = [
  [1, 1, 1],
  [0, 0, 1],
];

const shapeTriangle_5 = [
  [1, 1],
  [0, 1],
  [0, 1],
];

const shapeTriangle_6 = [
  [0, 1],
  [0, 1],
  [1, 1],
];

const shapeTriangle_7 = [
  [1, 0],
  [1, 0],
  [1, 1],
];

const shapeTriangle_8 = [
  [1, 1],
  [1, 0],
  [1, 0],
];

const shape2x3 = [
  [1, 1],
  [1, 1],
  [1, 1],
];

const shape3x2 = [
  [1, 1, 1],
  [1, 1, 1],
];

const shapeDioganal3x_1 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

const shapeDioganal3x_2 = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
];

const shapeDioganal2x_1 = [
  [1, 0],
  [0, 1],
];

const shapeDioganal2x_2 = [
  [0, 1],
  [1, 0],
];

const shapeBoomerang_1 = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 0, 0],
];

const shapeBoomerang_2 = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
];

const shapeBoomerang_3 = [
  [0, 0, 1],
  [0, 0, 1],
  [1, 1, 1],
];

const shapeBoomerang_4 = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 1, 1],
];

const shapeSnake_1 = [
  [0, 1, 1],
  [1, 1, 0],
];

const shapeSnake_2 = [
  [1, 1, 0],
  [0, 1, 1],
];

const shapeSnake_3 = [
  [1, 0],
  [1, 1],
  [0, 1],
];

const shapeSnake_4 = [
  [0, 1],
  [1, 1],
  [1, 0],
];

const shapePenis_1 = [
  [0, 1, 0],
  [1, 1, 1],
];

const shapePenis_2 = [
  [1, 1, 1],
  [0, 1, 0],
];

const shapePenis_3 = [
  [1, 0],
  [1, 1],
  [1, 0],
];

const shapePenis_4 = [
  [0, 1],
  [1, 1],
  [0, 1],
];

export const ALL_SHAPES = [
  shape1x1,
  shape2x2,
  shape3x3,
  shape3x1,
  shape1x3,
  shape4x1,
  shape1x4,
  shape5x1,
  shape1x5,
  shape2x3,
  shape3x2,
  shapePenis_1,
  shapePenis_2,
  shapePenis_3,
  shapePenis_4,
  shapeSnake_1,
  shapeSnake_2,
  shapeSnake_3,
  shapeSnake_4,
  shapeBoomerang_1,
  shapeBoomerang_2,
  shapeBoomerang_3,
  shapeBoomerang_4,
  shapeDioganal2x_1,
  shapeDioganal2x_2,
  shapeDioganal3x_1,
  shapeDioganal3x_2,
  shapeTriangle_1,
  shapeTriangle_2,
  shapeTriangle_3,
  shapeTriangle_4,
  shapeTriangle_5,
  shapeTriangle_6,
  shapeTriangle_7,
  shapeTriangle_8,
];

export const BLOCK_COLORS = [
  'block-pink',
  'block-green',
  'block-violet',
  'block-yellow',
];
