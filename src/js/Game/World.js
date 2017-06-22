import random from 'lodash/random';
import {ALIVE_CELLS_PERCENT} from '../config';
import Point from './Point';

export default class World {

  /**
   * @param {number} width 
   * @param {number} height
   */
  constructor(width, height) {

    this._grid = null;
    this._height = height;
    this._width = width;
    this._init();

  }

  /**
   * Calculate the next state of the world
   */
  act() {

    let updatedGrid = [];

    for (let y = 0; y < this._height; y += 1) {
      for (let x = 0; x < this._width; x += 1) {
        let index = this.getPointIndexByCoords(x, y);
        updatedGrid[index] = Point.willPointBeAlive(this._grid[index], this._getPointNeighboursByCoords(x, y));
      }
    }

    this._grid = updatedGrid;

  }

  /**
   * Toggle point with given coordinates
   * @param {number} x
   * @param {number} y
   */
  togglePointByCoords(x, y) {
    let index = this.getPointIndexByCoords(x, y);
    this._grid[index] = !this._grid[index];
  }

  /**
   * Create random generation
   */
  createGeneration() {
    this._grid = this._grid.map((point) =>
      random(1, 100) <= ALIVE_CELLS_PERCENT
    );
  }

  /**
   * Insert given figure in the center of the world
   * @param {Figure} figure
   */
  insertFigure(figure) {

    if (figure.getHeight() < this._height && figure.getWidth() < this._width) {

      let figureData = figure.getData();

      let updatedGrid = [];
      let figuredDataIndex = 0;

      for (let y = 0; y < this._height; y += 1) {
        for (let x = 0; x < this._width; x += 1) {

          let index = this.getPointIndexByCoords(x, y);

          if (this._isAreaForFigure(x, y, figure)) {
            updatedGrid[index] = figureData[figuredDataIndex];
            figuredDataIndex += 1;
          } else {
            updatedGrid[index] = false;
          }

        }
      }

      this._grid = updatedGrid;

    }

  }

  /**
   * Return current world state
   * @returns {Array|null}
   */
  getState() {
    return this._grid
  }

  /**
   * Return the width of the world
   * @returns {number}
   */
  getWidth() {
    return this._width;
  }

  /**
   * Return the height of the world
   * @returns {number}
   */
  getHeight() {
    return this._height;
  }

  /**
   * Clear the world
   */
  clear() {
    this._init();
  }

  /**
   * Return point index by given coordinates
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  getPointIndexByCoords(x, y) {

    if (x > this._width - 1) {
      x = 0;
    } else if (x < 0) {
      x = this._width - 1;
    }

    if (y > this._height - 1) {
      y = 0;
    } else if (y < 0) {
      y = this._height - 1;
    }

    return x + y * this._width;
  }

  /**
   * Return array with point neighbours
   * @param {number} x
   * @param {number} y
   * @returns {Array}
   * @private
   */
  _getPointNeighboursByCoords(x, y) {

    let neighbours = [];

    neighbours.push(this._grid[this.getPointIndexByCoords(x - 1, y - 1)]);
    neighbours.push(this._grid[this.getPointIndexByCoords(x, y - 1)]);
    neighbours.push(this._grid[this.getPointIndexByCoords(x + 1, y - 1)]);
    neighbours.push(this._grid[this.getPointIndexByCoords(x - 1, y)]);
    neighbours.push(this._grid[this.getPointIndexByCoords(x + 1, y)]);
    neighbours.push(this._grid[this.getPointIndexByCoords(x - 1, y + 1)]);
    neighbours.push(this._grid[this.getPointIndexByCoords(x, y + 1)]);
    neighbours.push(this._grid[this.getPointIndexByCoords(x + 1, y + 1)]);

    return neighbours

  }

  /**
   * Return if given coordinates are in the figure area
   * @param {number} x
   * @param {number} y
   * @param {Figure} figure
   * @returns {boolean}
   * @private
   */
  _isAreaForFigure(x, y, figure) {

    let figureXCoord = Math.floor((this._width - 1 - figure.getWidth()) / 2);
    let figureYCoord = Math.floor((this._height - 1 - figure.getHeight()) / 2);

    let top = y > figureYCoord;
    let right = x <= figureXCoord + figure.getWidth();
    let bottom = y <= figureYCoord + figure.getHeight();
    let left = x > figureXCoord;

    return top && right && bottom && left;

  }

  /**
   * Create array to store world data
   * @private
   */
  _init() {
    this._grid = new Array(this._width * this._height).fill(false);
  }

}