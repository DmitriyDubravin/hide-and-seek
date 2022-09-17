import { ctx } from "../global";

export interface Coords {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface MovingDirections {
  up: boolean;
  right: boolean;
  down: boolean;
  left: boolean;
}

export class Entity {
  id: number;
  coords: Coords;
  color: string;
  constructor(id: number, coords: Coords, color: string) {
    this.id = id;
    this.coords = coords;
    this.color = color;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.coords.x1,
      this.coords.y1,
      this.coords.x2 - this.coords.x1,
      this.coords.y2 - this.coords.y1
    );
  }
}

export class MovingEntity extends Entity {
  movingDirection: MovingDirections = {
    up: false,
    right: false,
    down: false,
    left: false,
  };
  step: number;

  constructor(id: number, coords: Coords, color: string) {
    super(id, coords, color);
  }
}
