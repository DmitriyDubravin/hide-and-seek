import { Coords, MovingEntity } from "./entity";

export class Enemy extends MovingEntity {
  step: number = 4;

  constructor(id: number, coords: Coords, color: string) {
    super(id, coords, color);
  }
}

//     state: "patrol",
//     patrol: {
//       index: 0,
//       path: [],
//     },
