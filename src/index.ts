import { Game } from "./game";
import {
  isInSight,
  goRight,
  goLeft,
  goUp,
  goDown,
  chase,
  overlapsWithObstacles,
} from "./utils";
import { ctx, gameWidth, gameHeight } from "./global";

import { Eventer } from "./eventer";
import { Entity, MovingEntity } from "./entities/entity";

// TODO:
// - to add setters on units! :-)
// - to reduce diagonal moving speed

const game = new Game(gameWidth, gameHeight);
new Eventer(game);

game.generateWalls(5);
game.generateEnemies(3);

const moveHeroes = (units: MovingEntity[]) => {
  units.forEach((unit: MovingEntity) => {
    const obstacles = game.obstacles;
    if (unit.movingDirection.up) {
      goUp(unit, unit.step);
      if (overlapsWithObstacles(unit.coords, obstacles)) {
        goDown(unit, unit.step);
      }
    }
    if (unit.movingDirection.right) {
      goRight(unit, unit.step);
      if (overlapsWithObstacles(unit.coords, obstacles)) {
        goLeft(unit, unit.step);
      }
    }
    if (unit.movingDirection.down) {
      goDown(unit, unit.step);
      if (overlapsWithObstacles(unit.coords, obstacles)) {
        goUp(unit, unit.step);
      }
    }
    if (unit.movingDirection.left) {
      goLeft(unit, unit.step);
      if (overlapsWithObstacles(unit.coords, obstacles)) {
        goRight(unit, unit.step);
      }
    }
  });
};

const moveEnemies = (hero: MovingEntity, enemies: MovingEntity[]) => {
  if (!hero) {
    return;
  }

  enemies.forEach((enemy: MovingEntity) => {
    const heroIsInSight = game.obstacles.every((obstacle: Entity) => {
      if (obstacle.id === enemy.id) return true;
      return isInSight(hero, enemy, obstacle);
    });

    if (heroIsInSight) {
      chase(enemy, hero, game.obstacles);
    }
  });
};

const play = () => {
  ctx.clearRect(0, 0, gameWidth, gameHeight);

  game.drawAll();

  moveHeroes(game.heroes);
  moveEnemies(game.heroes[0], game.enemies);

  window.requestAnimationFrame(play);
};

play();
