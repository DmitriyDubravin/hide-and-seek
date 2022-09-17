import {
  iUnit,
  iMovingUnit,
  iHero,
  iWall,
  iEnemy,
  iWallsSet,
} from "./interfaces";
import { Coords, Entity, MovingEntity } from "./entities/entity";

export const checkIfOverlap = (rect1: Coords, rect2: Coords) =>
  !(
    rect1.x1 > rect2.x2 ||
    rect1.x2 < rect2.x1 ||
    rect1.y1 > rect2.y2 ||
    rect1.y2 < rect2.y1
  );

export const checkIfInsideField = (
  unit: iUnit,
  fieldWidth: number,
  fieldHeight: number
) => {
  return !(
    unit.x2 >= fieldWidth ||
    unit.x1 <= 0 ||
    unit.y2 >= fieldHeight ||
    unit.y1 <= 0
  );
};

export const checkIfInside = (innerRect: Coords, outerRect: Coords) => {
  return !(
    innerRect.x2 >= outerRect.x2 ||
    innerRect.x1 <= outerRect.x1 ||
    innerRect.y2 >= outerRect.y2 ||
    innerRect.y1 <= outerRect.y1
  );
};

export const checkIfSame = (rect1: Coords, rect2: Coords) =>
  rect1.x1 === rect2.x1 &&
  rect1.x2 === rect2.x2 &&
  rect1.y1 === rect2.y1 &&
  rect1.y2 === rect2.y2;

export const overlapsWithObstacles = (rect: Coords, obstacles: Entity[]) => {
  return obstacles.some((obstacle: Entity) => {
    if (checkIfSame(rect, obstacle.coords)) {
      return false;
    }
    return checkIfOverlap(rect, obstacle.coords);
  });
};

export const generateId = (length: number = 9) => {
  const min = 10 ** (length - 1);
  const max = 10 ** length - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const chase = (
  enemy: MovingEntity,
  hero: MovingEntity,
  obstacles: any
) => {
  const { xShift, yShift } = calculateShift(enemy, hero);

  const ys = Math.abs(yShift);
  const xs = Math.abs(xShift);

  let isMoved = false;

  if (yShift < 0) {
    goUp(enemy, ys);
    isMoved = true;
    if (overlapsWithObstacles(enemy.coords, obstacles)) {
      goDown(enemy, ys);
      isMoved = false;
    }
  }
  if (yShift > 0) {
    goDown(enemy, ys);
    isMoved = true;
    if (overlapsWithObstacles(enemy.coords, obstacles)) {
      goUp(enemy, ys);
      isMoved = false;
    }
  }
  if (xShift < 0) {
    goLeft(enemy, xs);
    isMoved = true;
    if (overlapsWithObstacles(enemy.coords, obstacles)) {
      goRight(enemy, xs);
      isMoved = false;
    }
  }
  if (xShift > 0) {
    goRight(enemy, xs);
    isMoved = true;
    if (overlapsWithObstacles(enemy.coords, obstacles)) {
      goLeft(enemy, xs);
      isMoved = false;
    }
  }

  if (!isMoved) {
    // TODO: to change target maybe
  }
};

export const goRight = (entity: MovingEntity, step: number) => {
  entity.coords.x1 += step;
  entity.coords.x2 += step;
};
export const goLeft = (entity: MovingEntity, step: number) => {
  entity.coords.x1 -= step;
  entity.coords.x2 -= step;
};
export const goUp = (entity: MovingEntity, step: number) => {
  entity.coords.y1 -= step;
  entity.coords.y2 -= step;
};
export const goDown = (entity: MovingEntity, step: number) => {
  entity.coords.y1 += step;
  entity.coords.y2 += step;
};

export const calculateShift = (enemy: MovingEntity, hero: MovingEntity) => {
  const speed: number = enemy.step;
  const x0: number = enemy.coords.x1;
  const y0: number = enemy.coords.y1;
  const x1: number = hero.coords.x1;
  const y1: number = hero.coords.y1;
  let xShift = 0,
    yShift = 0;
  let xMultiplier = x1 >= x0 ? 1 : -1;
  let yMultiplier = y1 >= y0 ? 1 : -1;

  if (x1 - x0 === 0) {
    yShift = speed;
    return { xShift: xMultiplier * xShift, yShift: yMultiplier * yShift };
  }

  // if (y1 - y0 === 0) {
  //   xShift = speed;
  //   return { xShift: xMultiplier * xShift, yShift: yMultiplier * yShift };
  // }

  const tg = Math.abs((y1 - y0) / (x1 - x0));
  xShift = Math.sqrt((speed * speed) / (1 + tg * tg));
  yShift = tg * xShift;
  return {
    xShift: xMultiplier * Math.round(xShift),
    yShift: yMultiplier * Math.round(yShift),
  };
};

export const isInSight = (
  hero: MovingEntity,
  enemy: MovingEntity,
  obstacle: Entity
) => {
  const myX = (hero.coords.x2 - hero.coords.x1) / 2 + hero.coords.x1;
  const myY = (hero.coords.y2 - hero.coords.y1) / 2 + hero.coords.y1;
  const enemyX = (enemy.coords.x2 - enemy.coords.x1) / 2 + enemy.coords.x1;
  const enemyY = (enemy.coords.y2 - enemy.coords.y1) / 2 + enemy.coords.y1;
  const shapeTopLeftX: number = obstacle.coords.x1;
  const shapeTopLeftY: number = obstacle.coords.y1;
  const shapeBotRightX: number = obstacle.coords.x2;
  const shapeBotRightY: number = obstacle.coords.y2;
  // if line between me and enemy is parallel to oY
  if (myX === enemyX) {
    return (
      shapeTopLeftY <= Math.max(myY, enemyY) &&
      shapeTopLeftY >= Math.min(myY, enemyY) &&
      myX >= shapeTopLeftX &&
      myX <= shapeBotRightX
    );
  } // if line between me and enemy is parallel to oX
  if (myY === enemyY) {
    return (
      shapeTopLeftX >= Math.min(myX, enemyX) &&
      shapeTopLeftX <= Math.max(myX, enemyX) &&
      myY <= shapeTopLeftY &&
      myX >= shapeBotRightY
    );
  }
  // assume that line has general representation: y = A + Bx;
  let enemyLineB = (enemyY - myY) / (enemyX - myX);
  let enemyLineA = myY - enemyLineB * myX;

  // calculate coordinates of all shape points
  let shapeBotLeftX = shapeTopLeftX;
  let shapeBotLeftY = shapeBotRightY;
  let shapeTopRightX = shapeBotRightX;
  let shapeTopRightY = shapeTopLeftY;

  // calculate A and B for shape diagonals
  let firstDiagB =
    (shapeTopLeftY - shapeBotRightY) / (shapeTopLeftX - shapeBotRightX);
  let firstDiagA = shapeTopLeftY - shapeTopLeftX * firstDiagB;
  let secondDiagB =
    (shapeBotLeftY - shapeTopRightY) / (shapeBotLeftX - shapeTopRightX);
  let secondDiagA = shapeBotLeftY - shapeBotLeftX * secondDiagB;

  let parallelDiagA = firstDiagB === enemyLineB;
  let parallelDiagB = secondDiagB === enemyLineB;

  let xA = 0;
  let yA = 0;
  let xB = 0;
  let yB = 0;
  // find intersection point for diagA
  if (!parallelDiagA) {
    xA = (enemyLineA - firstDiagA) / (firstDiagB - enemyLineB);
    yA = enemyLineA + enemyLineB * xA;
  }
  // find intersection point for diagB
  if (!parallelDiagB) {
    xB = (enemyLineA - secondDiagA) / (secondDiagB - enemyLineB);
    yB = enemyLineA + enemyLineB * xB;
  }

  // check if first intersection is inside minimal shape
  let insideShapeA =
    xA <=
      Math.min(
        Math.max(myX, enemyX),
        Math.max(shapeTopLeftX, shapeBotRightX)
      ) &&
    xA >=
      Math.max(
        Math.min(myX, enemyX),
        Math.min(shapeTopLeftX, shapeBotRightX)
      ) &&
    yA >=
      Math.max(
        Math.min(myY, enemyY),
        Math.min(shapeTopLeftY, shapeBotRightY)
      ) &&
    yA <=
      Math.min(Math.max(myY, enemyY), Math.max(shapeTopLeftY, shapeBotRightY));

  // check if first intersection is inside minimal shape
  let insideShapeB =
    xB <=
      Math.min(
        Math.max(myX, enemyX),
        Math.max(shapeBotLeftX, shapeTopRightX)
      ) &&
    xB >=
      Math.max(
        Math.min(myX, enemyX),
        Math.min(shapeBotLeftX, shapeTopRightX)
      ) &&
    yB >=
      Math.max(
        Math.min(myY, enemyY),
        Math.min(shapeBotLeftY, shapeTopRightY)
      ) &&
    yB <=
      Math.min(Math.max(myY, enemyY), Math.max(shapeBotLeftY, shapeTopRightY));

  return !(insideShapeB || insideShapeA);
  //   return {
  //     result: insideShapeB || insideShapeA,
  //     xA,
  //     yA,
  //     xB,
  //     yB
  //   };
};

export const getRandom = (max: number) => Math.round(Math.random() * max);

export const addUnitToObstacles = (unit: iUnit, obstacles: iUnit[]) => {
  obstacles[unit.id] = unit;
};

export const addUnitToList = (unit: iUnit, list: Array<any>) => {
  list.push(unit);
};
