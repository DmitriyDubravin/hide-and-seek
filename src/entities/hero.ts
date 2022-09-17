import { Coords, MovingEntity } from "./entity";

export class Hero extends MovingEntity {
  step: number = 5;

  constructor(id: number, coords: Coords, color: string) {
    super(id, coords, color);
  }
}
