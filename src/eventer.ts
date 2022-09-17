import { generateId } from "./utils";
import { Game } from "./game";
import { iMovingUnit } from "./interfaces";
import { MovingEntity } from "./entities/entity";

export class Eventer {
  game: Game;

  constructor(game: Game) {
    this.game = game;
    this.listen();
  }

  listen() {
    this.onClick();
  }

  handleClick(e: MouseEvent) {
    if (this.game.heroes.length === 0) {
      const hero = this.game.generateHero(e);
      this.onKeyDownHandler(hero);
      this.onKeyUpHandler(hero);
      this.game.addToHeroesList(hero);
    }
  }

  onClick() {
    document.addEventListener("click", this.handleClick.bind(this));
  }

  onKeyDownHandler(unit: MovingEntity) {
    document.addEventListener("keydown", (e) => {
      const code = e.keyCode;
      if (code === 38) {
        unit.movingDirection.up = true;
      }
      if (code === 39) {
        unit.movingDirection.right = true;
      }
      if (code === 40) {
        unit.movingDirection.down = true;
      }
      if (code === 37) {
        unit.movingDirection.left = true;
      }
    });
  }

  onKeyUpHandler(unit: MovingEntity) {
    document.addEventListener("keyup", (e) => {
      const code = e.keyCode;
      if (code === 38) {
        unit.movingDirection.up = false;
      }
      if (code === 39) {
        unit.movingDirection.right = false;
      }
      if (code === 40) {
        unit.movingDirection.down = false;
      }
      if (code === 37) {
        unit.movingDirection.left = false;
      }
    });
  }
}
