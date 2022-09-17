import { iHero, iMovingUnit } from "./interfaces";
import { StaticWall, Wall } from "./entities/wall";
import {
  generateId,
  getRandom,
  checkIfInside,
  overlapsWithObstacles,
} from "./utils";
import { Hero } from "./entities/hero";
import { gameHeight, gameWidth } from "./global";
import { Coords, Entity } from "./entities/entity";
import { Enemy } from "./entities/enemy";

export class Game {
  gameWidth: number;
  gameHeight: number;
  walls: StaticWall[] = [];
  enemies: Enemy[] = [];
  heroes: Hero[] = [];

  get obstacles(): Entity[] {
    return [...this.walls, ...this.enemies, ...this.heroes];
  }

  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  run() {}

  generateWalls(quantity: number) {
    for (let i = 0; i < quantity; i++) {
      let x1 = getRandom(this.gameWidth);
      let x2 = getRandom(this.gameWidth);
      let xdiff = x2 - x1;
      while (xdiff < 10 || xdiff > 300) {
        x1 = getRandom(this.gameWidth);
        x2 = getRandom(this.gameWidth);
        xdiff = x2 - x1;
      }
      let y1 = getRandom(this.gameHeight);
      let y2 = getRandom(this.gameHeight);
      let ydiff = y2 - y1;
      while (ydiff < 10 || ydiff > 200) {
        y1 = getRandom(this.gameHeight);
        y2 = getRandom(this.gameHeight);
        ydiff = y2 - y1;
      }

      const id = generateId();
      const coords = { x1, y1, x2, y2 };
      const wall: StaticWall = new StaticWall(id, coords, "#666");
      this.addToWallsList(wall);
    }
  }

  generateEnemies(quantity: number) {
    for (let count = 0; count < quantity; count++) {
      let enemy;
      let fits = false;
      // TODO: it can be infinite
      while (!fits) {
        const id = generateId();
        const x = getRandom(this.gameWidth);
        const y = getRandom(this.gameHeight);
        const generatedCoords: Coords = {
          x1: x,
          y1: y,
          x2: x + 40,
          y2: y + 40,
        };

        const gameCoords: Coords = {
          x1: 0,
          y1: 0,
          x2: this.gameWidth,
          y2: this.gameHeight,
        };

        fits =
          checkIfInside(generatedCoords, gameCoords) &&
          !overlapsWithObstacles(generatedCoords, this.obstacles);
        enemy = new Enemy(id, generatedCoords, "#f00");
      }
      this.addToEnemiesList(enemy);
    }
  }

  generateHero(e: MouseEvent): Hero {
    const id = generateId();
    const x = e.pageX;
    const y = e.pageY;
    const size = 20;
    const coords = {
      x1: x - size / 2,
      y1: y - size / 2,
      x2: x + size / 2,
      y2: y + size / 2,
    };
    return new Hero(id, coords, "#000");
  }

  addToHeroesList(hero: Hero) {
    this.heroes.push(hero);
  }

  addToEnemiesList(enemy: Enemy) {
    this.enemies.push(enemy);
  }

  addToWallsList(wall: Wall) {
    this.walls.push(wall);
  }

  drawAll() {
    this.walls.forEach((wall) => wall.draw());
    this.enemies.forEach((enemy) => enemy.draw());
    this.heroes.forEach((hero) => hero.draw());
  }
}
