import {
  INITIAL_WORLD_WIDTH,
  INITIAL_WORLD_HEIGHT,
  INITIAL_CYCLE_PERIOD
} from '../config';
import World from './World';
import HistoryExplorer from '../History/HistoryExplorer';
import clone from 'lodash/clone';


export default class Game {

  /**
   * @param {AbstractRenderer} renderer
   */
  constructor(renderer) {

    this._renderer = renderer;
    this._world = new World(INITIAL_WORLD_WIDTH, INITIAL_WORLD_HEIGHT);
    this._historyExplorer = new HistoryExplorer();

    this._cyclePeriod = INITIAL_CYCLE_PERIOD;
    this._lastRenderTime = null;
    this._isPaused = true;

    this._renderer.render(this._world);
    this._loop();

    this._renderer.onPointClick(({x, y}) => {
      this._world.togglePointByCoords(x, y);
      this._renderer.render(this._world);
    });

  }

  /**
   * Set cycle period
   * @param {number|*} period
   */
  setCyclePeriod(period) {
    this._cyclePeriod = parseInt(period);
  };

  /**
   * Pause the game
   */
  pause() {
    this._isPaused = true;
  }

  /**
   * Start/continue the game
   */
  start() {
    this._isPaused = false;
  }

  /**
   * Make a step forward in the history
   */
  forward() {
    let nextState = this._historyExplorer.forward();
    if (nextState) {
      this._world = nextState;
      this._renderer.render(this._world);
    }
  }

  /**
   * Make a step backward in the history
   */
  backward() {
    let prevState = this._historyExplorer.backward();
    if (prevState) {
      this._world = prevState;
      this._renderer.render(this._world);
    }
  }

  /**
   * Stop the game and reset the history
   */
  stop() {
    this._isPaused = true;
    this._world = this._historyExplorer.getStepFromHistory(1);
    this._historyExplorer.deleteHistory();
    this._historyExplorer.pushToHistory(clone(this._world));
    this._renderer.render(this._world);
  }

  /**
   * Fill game with random generation
   */
  fill() {
    this._world.createGeneration();
    this._historyExplorer.deleteHistory();
    this._historyExplorer.pushToHistory(clone(this._world));
    this._renderer.render(this._world);
  }

  /**
   * Insert given figure in the world
   * @param {Figure} figure
   */
  insertFigure(figure) {
    this._world.insertFigure(figure);
    this._historyExplorer.pushToHistory(clone(this._world));
    this._renderer.render(this._world);
  }

  /**
   * Clear the world
   */
  clear() {
    this._world.clear();
    this._historyExplorer.pushToHistory(clone(this._world));
    this._renderer.render(this._world);
  }

  /**
   * Reset history from the initial state
   */
  cleanUpHistory() {
    this._historyExplorer.deleteHistory(1)
  }

  /**
   * Main game loop
   * @param {number|*} time
   * @private
   */
  _loop(time) {
    if (this._shouldGameToBeContinued(time)) {
      this._lastRenderTime = time;
      this._world.act();
      this._historyExplorer.pushToHistory(clone(this._world));
      this._renderer.render(this._world);
    }
    requestAnimationFrame(this._loop.bind(this));
  }

  /**
   * Decide is it time to change and render next cycle
   * @param {number|*} time
   * @returns {boolean}
   * @private
   */
  _shouldGameToBeContinued(time) {
    let isTimeToNextFrame = time && time - this._lastRenderTime >= this._cyclePeriod;
    return isTimeToNextFrame && !this._isPaused;
  }

}