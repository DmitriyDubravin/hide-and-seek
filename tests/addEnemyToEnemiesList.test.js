import { addEnemyToEnemiesList } from "../src/utils";

describe("addEnemyToEnemiesList", () => {
  const f = addEnemyToEnemiesList;
  test("properly adds enemy to enemiesList", () => {
    const enemy = { x: 0 };
    const enemiesList = [];
    f(enemy, enemiesList);
    expect(enemiesList).toContain(enemy);
  });
});
