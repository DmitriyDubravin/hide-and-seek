export interface iPosition {
  x: number;
  y: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface iUnit extends iPosition {
  id: number;
  color: string;
}

export interface iMovingUnit extends iUnit {
  size: number;
  step: number;
  movingDirection: {
    up: boolean;
    right: boolean;
    down: boolean;
    left: boolean;
  };
}

export interface iStaticUnit extends iUnit {}

export interface iHero extends iMovingUnit {}
export interface iEnemy extends iMovingUnit {
  state: string;
  patrol: {
    index: number;
    path: [];
  };
}
export interface iWall extends iStaticUnit {}



export interface iWallsSet {
  [id: string]: iWall;
}

export interface iSet {
  [id: number]: iUnit;
}
