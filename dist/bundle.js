/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: Enemy, enemiesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Enemy\", function() { return Enemy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enemiesList\", function() { return enemiesList; });\nfunction Enemy(x, y, id) {\r\n  return {\r\n    size: 40,\r\n    step: 2,\r\n    x: x,\r\n    y: y,\r\n    id: id,\r\n    color: '#f00',\r\n    state: 'patrol',\r\n    movingDirection: {\r\n      up: false,\r\n      right: false,\r\n      down: false,\r\n      left: false\r\n    }\r\n  };\r\n}\r\n\r\nconst enemiesList = [];\r\n\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/*! exports provided: setEnemy, onKeyDown, onKeyUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setEnemy\", function() { return setEnemy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onKeyDown\", function() { return onKeyDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onKeyUp\", function() { return onKeyUp; });\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _walls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./walls */ \"./src/walls.js\");\n\r\n\r\n\r\n\r\nconst setEnemy = () => {\r\n  let clicksCount = 0;\r\n  document.addEventListener(\"click\", e => {\r\n    const x = e.pageX;\r\n    const y = e.pageY;\r\n    if (clicksCount > 0 && clicksCount < 10) {\r\n      const id = +new Date();\r\n      _enemy__WEBPACK_IMPORTED_MODULE_0__[\"enemiesList\"].push(new _enemy__WEBPACK_IMPORTED_MODULE_0__[\"Enemy\"](x, y, id));\r\n      const wall = new _walls__WEBPACK_IMPORTED_MODULE_2__[\"Wall\"]({\r\n        x1: x - 20,\r\n        y1: y - 20,\r\n        x2: x + 20,\r\n        y2: y + 20,\r\n        id,\r\n        color: \"transparent\"\r\n      });\r\n      _walls__WEBPACK_IMPORTED_MODULE_2__[\"wallsList\"][wall.id] = wall;\r\n    }\r\n    if (clicksCount === 0) {\r\n      _hero__WEBPACK_IMPORTED_MODULE_1__[\"heroesList\"].push(new _hero__WEBPACK_IMPORTED_MODULE_1__[\"Hero\"](e.pageX, e.pageY));\r\n      onKeyDown(_hero__WEBPACK_IMPORTED_MODULE_1__[\"heroesList\"][0]);\r\n      onKeyUp(_hero__WEBPACK_IMPORTED_MODULE_1__[\"heroesList\"][0]);\r\n    }\r\n    clicksCount++;\r\n  });\r\n};\r\nconst onKeyDown = unit => {\r\n  document.addEventListener(\"keydown\", e => {\r\n    const code = e.keyCode;\r\n    if (code === 38) {\r\n      unit.movingDirection.up = true;\r\n    }\r\n    if (code === 39) {\r\n      unit.movingDirection.right = true;\r\n    }\r\n    if (code === 40) {\r\n      unit.movingDirection.down = true;\r\n    }\r\n    if (code === 37) {\r\n      unit.movingDirection.left = true;\r\n    }\r\n  });\r\n};\r\n\r\nconst onKeyUp = unit => {\r\n  document.addEventListener(\"keyup\", e => {\r\n    const code = e.keyCode;\r\n    if (code === 38) {\r\n      unit.movingDirection.up = false;\r\n    }\r\n    if (code === 39) {\r\n      unit.movingDirection.right = false;\r\n    }\r\n    if (code === 40) {\r\n      unit.movingDirection.down = false;\r\n    }\r\n    if (code === 37) {\r\n      unit.movingDirection.left = false;\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/events.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/*! exports provided: Hero, heroesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hero\", function() { return Hero; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"heroesList\", function() { return heroesList; });\nconst unitSize = 20;\r\nconst unitStep = 5;\r\n\r\nfunction Hero(x = 0, y = 0) {\r\n  return {\r\n    size: unitSize,\r\n    x: x,\r\n    y: y,\r\n    step: unitStep,\r\n    movingDirection: {\r\n      up: false,\r\n      right: false,\r\n      down: false,\r\n      left: false\r\n    }\r\n  };\r\n}\r\n\r\nconst heroesList = [];\r\n\n\n//# sourceURL=webpack:///./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n/* harmony import */ var _walls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./walls */ \"./src/walls.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\n\n\nconst canvas = document.getElementById(\"game-container\");\nconst ctx = canvas.getContext(\"2d\");\nconst body = document.body;\ncanvas.style.display = \"block\";\nbody.style.margin = 0;\nbody.style.height = \"100vh\";\n\nconst gameWidth = body.clientWidth;\nconst gameHeight = body.clientHeight;\ncanvas.width = gameWidth;\ncanvas.height = gameHeight;\n\nconst getRandom = max => {\n  return Math.round(Math.random() * max);\n};\n\nconst generateWalls = num => {\n  for (let i = 0; i < num; i++) {\n    let x1 = getRandom(gameWidth);\n    let x2 = getRandom(gameWidth);\n    let xdiff = x2 - x1;\n    while (xdiff < 10 || xdiff > 300) {\n      x1 = getRandom(gameWidth);\n      x2 = getRandom(gameWidth);\n      xdiff = x2 - x1;\n    }\n    let y1 = getRandom(gameHeight);\n    let y2 = getRandom(gameHeight);\n    let ydiff = y2 - y1;\n    while (ydiff < 10 || ydiff > 200) {\n      y1 = getRandom(gameHeight);\n      y2 = getRandom(gameHeight);\n      ydiff = y2 - y1;\n    }\n\n    const wall = new _walls__WEBPACK_IMPORTED_MODULE_2__[\"Wall\"]({ x1, y1, x2, y2, id: i });\n    _walls__WEBPACK_IMPORTED_MODULE_2__[\"wallsList\"][wall.id] = wall;\n  }\n};\n\ngenerateWalls(5);\n\nObject(_events__WEBPACK_IMPORTED_MODULE_3__[\"setEnemy\"])();\n\nconst goRight = unit => (unit.x += unit.step);\nconst goLeft = unit => (unit.x -= unit.step);\nconst goUp = unit => (unit.y -= unit.step);\nconst goDown = unit => (unit.y += unit.step);\n\nconst ifGoRight = unit => ({ ...unit, x: unit.x + unit.step });\nconst ifGoLeft = unit => ({ ...unit, x: unit.x - unit.step });\nconst ifGoUp = unit => ({ ...unit, y: unit.y - unit.step });\nconst ifGoDown = unit => ({ ...unit, y: unit.y + unit.step });\n\nconst areRectsOverlap = (rect, unit) => {\n  const { x, y, size } = unit;\n  const { x1: rx1, y1: ry1, x2: rx2, y2: ry2 } = rect;\n  const r = size / 2;\n  const x1 = x - r;\n  const y1 = y - r;\n  const x2 = x + r;\n  const y2 = y + r;\n  if (unit.id === rect.id) return true;\n  return x1 > rx2 || x2 < rx1 || y1 > ry2 || y2 < ry1;\n};\n\nconst checkDirections = unit => {\n  let canGoUp = true;\n  let canGoRight = true;\n  let canGoDown = true;\n  let canGoLeft = true;\n\n  const unitWentUp = ifGoUp(unit);\n  const unitWentRight = ifGoRight(unit);\n  const unitWentDown = ifGoDown(unit);\n  const unitWentLeft = ifGoLeft(unit);\n\n  for (let key in _walls__WEBPACK_IMPORTED_MODULE_2__[\"wallsList\"]) {\n    if (canGoUp) canGoUp = areRectsOverlap(_walls__WEBPACK_IMPORTED_MODULE_2__[\"wallsList\"][key], unitWentUp);\n    if (canGoRight) canGoRight = areRectsOverlap(_walls__WEBPACK_IMPORTED_MODULE_2__[\"wallsList\"][key], unitWentRight);\n    if (canGoDown) canGoDown = areRectsOverlap(_walls__WEBPACK_IMPORTED_MODULE_2__[\"wallsList\"][key], unitWentDown);\n    if (canGoLeft) canGoLeft = areRectsOverlap(_walls__WEBPACK_IMPORTED_MODULE_2__[\"wallsList\"][key], unitWentLeft);\n  }\n\n  return { canGoUp, canGoRight, canGoDown, canGoLeft };\n};\n\nconst move = unit => {\n  const { canGoUp, canGoRight, canGoDown, canGoLeft } = checkDirections(unit);\n  if (unit.movingDirection.up && canGoUp) {\n    goUp(unit);\n  }\n  if (unit.movingDirection.right && canGoRight) {\n    goRight(unit);\n  }\n  if (unit.movingDirection.down && canGoDown) {\n    goDown(unit);\n  }\n  if (unit.movingDirection.left && canGoLeft) {\n    goLeft(unit);\n  }\n};\n\nconst moveHeroes = units => {\n  units.forEach(unit => {\n    move(unit);\n  });\n};\n\nconst drawEnemy = (ctx, unit) => {\n  ctx.fillStyle = unit.color;\n  ctx.fillRect(\n    unit.x - unit.size / 2,\n    unit.y - unit.size / 2,\n    unit.size,\n    unit.size\n  );\n};\nconst drawWall = unit => {\n  ctx.fillStyle = unit.color;\n  ctx.fillRect(unit.x1, unit.y1, unit.x2 - unit.x1, unit.y2 - unit.y1);\n};\n\nconst drawHeroes = (ctx, units) => {\n  units.forEach(unit => {\n    ctx.fillStyle = \"#000000\";\n    ctx.fillRect(\n      unit.x - unit.size / 2,\n      unit.y - unit.size / 2,\n      unit.size,\n      unit.size\n    );\n  });\n};\n\nconst drawWalls = (ctx, walls) => {\n  for (let key in walls) {\n    drawWall(walls[key]);\n  }\n};\n\nconst drawEnemies = (ctx, units) => {\n  units.forEach(unit => {\n    drawEnemy(ctx, unit);\n  });\n};\n\nconst moveEnemies = (hero, enemies) => {\n  enemies.forEach(enemy => {\n    const { xShift, yShift } = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"calculateShift\"])(\n      enemy.step,\n      enemy.x,\n      enemy.y,\n      hero.x,\n      hero.y\n    );\n    //   enemy.x += xShift;\n    //   enemy.y += yShift;\n\n    let a = {};\n\n    const canMove = Object.keys(_walls__WEBPACK_IMPORTED_MODULE_2__[\"wallsList\"]).every(key => {\n      const wall = _walls__WEBPACK_IMPORTED_MODULE_2__[\"wallsList\"][key];\n      if (wall.id === enemy.id) return true;\n      const result = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"checkMyVisibility\"])(\n        hero.x,\n        hero.y,\n        enemy.x,\n        enemy.y,\n        wall.x1,\n        wall.y1,\n        wall.x2,\n        wall.y2\n      );\n      return !result;\n    });\n\n    if (!canMove) {\n      return;\n    }\n\n    const { canGoUp, canGoRight, canGoDown, canGoLeft } = checkDirections(\n      enemy\n    );\n\n    const selfWall = _walls__WEBPACK_IMPORTED_MODULE_2__[\"wallsList\"][enemy.id];\n\n    if (yShift < 0 && canGoUp) {\n      enemy.y += yShift;\n      selfWall.y1 += yShift;\n      selfWall.y2 += yShift;\n    }\n    if (yShift > 0 && canGoDown) {\n      enemy.y += yShift;\n      selfWall.y1 += yShift;\n      selfWall.y2 += yShift;\n    }\n    if (xShift < 0 && canGoLeft) {\n      enemy.x += xShift;\n      selfWall.x1 += xShift;\n      selfWall.x2 += xShift;\n    }\n    if (xShift > 0 && canGoRight) {\n      enemy.x += xShift;\n      selfWall.x1 += xShift;\n      selfWall.x2 += xShift;\n    }\n  });\n};\n\nconst play = () => {\n  console.log(1);\n  ctx.clearRect(0, 0, gameWidth, gameHeight);\n\n  // hero\n  moveHeroes(_hero__WEBPACK_IMPORTED_MODULE_0__[\"heroesList\"]);\n  drawHeroes(ctx, _hero__WEBPACK_IMPORTED_MODULE_0__[\"heroesList\"]);\n\n  // wall\n  drawWalls(ctx, _walls__WEBPACK_IMPORTED_MODULE_2__[\"wallsList\"]);\n\n  // enemy\n  moveEnemies(_hero__WEBPACK_IMPORTED_MODULE_0__[\"heroesList\"][0], _enemy__WEBPACK_IMPORTED_MODULE_1__[\"enemiesList\"]);\n  drawEnemies(ctx, _enemy__WEBPACK_IMPORTED_MODULE_1__[\"enemiesList\"]);\n\n  window.requestAnimationFrame(play);\n};\n\nplay();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: calculateShift, checkMyVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateShift\", function() { return calculateShift; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkMyVisibility\", function() { return checkMyVisibility; });\nconst calculateShift = (speed, x0, y0, x1, y1) => {\r\n  let xShift = 0,\r\n    yShift = 0;\r\n  let xMultiplier = x1 >= x0 ? 1 : -1;\r\n  let yMultiplier = y1 >= y0 ? 1 : -1;\r\n\r\n  if (x1 - x0 === 0) {\r\n    yShift = speed;\r\n    return { xShift: xMultiplier * xShift, yShift: yMultiplier * yShift };\r\n  }\r\n\r\n  // if (y1 - y0 === 0) {\r\n  //   xShift = speed;\r\n  //   return { xShift: xMultiplier * xShift, yShift: yMultiplier * yShift };\r\n  // }\r\n\r\n  const tg = Math.abs((y1 - y0) / (x1 - x0));\r\n  xShift = Math.sqrt((speed * speed) / (1 + tg * tg));\r\n  yShift = tg * xShift;\r\n  return {\r\n    xShift: xMultiplier * Math.round(xShift),\r\n    yShift: yMultiplier * Math.round(yShift)\r\n  };\r\n};\r\n\r\nconst checkMyVisibility = (\r\n  myX,\r\n  myY,\r\n  enemyX,\r\n  enemyY,\r\n  shapeTopLeftX,\r\n  shapeTopLeftY,\r\n  shapeBotRightX,\r\n  shapeBotRightY\r\n) => {\r\n  // if line between me and enemy is parallel to oY\r\n  if (myX === enemyX) {\r\n    return (\r\n      shapeTopLeftY <= Math.max(myY, enemyY) &&\r\n      shapeTopLeftY >= Math.min(myY, enemyY) &&\r\n      myX >= shapeTopLeftX &&\r\n      myX <= shapeBotRightX\r\n    );\r\n  } // if line between me and enemy is parallel to oX\r\n  if (myY === enemyY) {\r\n    return (\r\n      shapeTopLeftX >= Math.min(myX, enemyX) &&\r\n      shapeTopLeftX <= Math.max(myX, enemyX) &&\r\n      myY <= shapeTopLeftY &&\r\n      myX >= shapeBotRightY\r\n    );\r\n  }\r\n  // assume that line has general representation: y = A + Bx;\r\n  let enemyLineB = (enemyY - myY) / (enemyX - myX);\r\n  let enemyLineA = myY - enemyLineB * myX;\r\n\r\n  // calculate coordinates of all shape points\r\n  let shapeBotLeftX = shapeTopLeftX;\r\n  let shapeBotLeftY = shapeBotRightY;\r\n  let shapeTopRightX = shapeBotRightX;\r\n  let shapeTopRightY = shapeTopLeftY;\r\n\r\n  // calculate A and B for shape diagonals\r\n  let firstDiagB =\r\n    (shapeTopLeftY - shapeBotRightY) / (shapeTopLeftX - shapeBotRightX);\r\n  let firstDiagA = shapeTopLeftY - shapeTopLeftX * firstDiagB;\r\n  let secondDiagB =\r\n    (shapeBotLeftY - shapeTopRightY) / (shapeBotLeftX - shapeTopRightX);\r\n  let secondDiagA = shapeBotLeftY - shapeBotLeftX * secondDiagB;\r\n\r\n  let parallelDiagA = firstDiagB === enemyLineB;\r\n  let parallelDiagB = secondDiagB === enemyLineB;\r\n\r\n  let xA = 0;\r\n  let yA = 0;\r\n  let xB = 0;\r\n  let yB = 0;\r\n  // find intersection point for diagA\r\n  if (!parallelDiagA) {\r\n    xA = (enemyLineA - firstDiagA) / (firstDiagB - enemyLineB);\r\n    yA = enemyLineA + enemyLineB * xA;\r\n  }\r\n  // find intersection point for diagB\r\n  if (!parallelDiagB) {\r\n    xB = (enemyLineA - secondDiagA) / (secondDiagB - enemyLineB);\r\n    yB = enemyLineA + enemyLineB * xB;\r\n  }\r\n\r\n  // check if first intersection is inside minimal shape\r\n  let insideShapeA =\r\n    xA <=\r\n      Math.min(\r\n        Math.max(myX, enemyX),\r\n        Math.max(shapeTopLeftX, shapeBotRightX)\r\n      ) &&\r\n    xA >=\r\n      Math.max(\r\n        Math.min(myX, enemyX),\r\n        Math.min(shapeTopLeftX, shapeBotRightX)\r\n      ) &&\r\n    yA >=\r\n      Math.max(\r\n        Math.min(myY, enemyY),\r\n        Math.min(shapeTopLeftY, shapeBotRightY)\r\n      ) &&\r\n    yA <=\r\n      Math.min(Math.max(myY, enemyY), Math.max(shapeTopLeftY, shapeBotRightY));\r\n\r\n  // check if first intersection is inside minimal shape\r\n  let insideShapeB =\r\n    xB <=\r\n      Math.min(\r\n        Math.max(myX, enemyX),\r\n        Math.max(shapeBotLeftX, shapeTopRightX)\r\n      ) &&\r\n    xB >=\r\n      Math.max(\r\n        Math.min(myX, enemyX),\r\n        Math.min(shapeBotLeftX, shapeTopRightX)\r\n      ) &&\r\n    yB >=\r\n      Math.max(\r\n        Math.min(myY, enemyY),\r\n        Math.min(shapeBotLeftY, shapeTopRightY)\r\n      ) &&\r\n    yB <=\r\n      Math.min(Math.max(myY, enemyY), Math.max(shapeBotLeftY, shapeTopRightY));\r\n\r\n  return insideShapeB || insideShapeA;\r\n//   return {\r\n//     result: insideShapeB || insideShapeA,\r\n//     xA,\r\n//     yA,\r\n//     xB,\r\n//     yB\r\n//   };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "./src/walls.js":
/*!**********************!*\
  !*** ./src/walls.js ***!
  \**********************/
/*! exports provided: Wall, wallsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wall\", function() { return Wall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wallsList\", function() { return wallsList; });\nfunction Wall({ x1, y1, x2, y2, id = +new Date(), color = '#666' }) {\r\n  return {\r\n    x1,\r\n    y1,\r\n    x2,\r\n    y2,\r\n    id,\r\n    color\r\n  };\r\n}\r\nconst wallsList = {};\r\n\n\n//# sourceURL=webpack:///./src/walls.js?");

/***/ })

/******/ });