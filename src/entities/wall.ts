import { Entity, Coords } from "./entity";

export interface Wall extends Entity {}

export class StaticWall extends Entity {
  constructor(public id: number, public coords: Coords, public color: string) {
    super(id, coords, color);
  }
}
