import History from './History';
import Notifier from '../Notifier/Notifier';

export default class HistoryExplorer {

  constructor() {
    this._currentState = 0;
    this._history = new History();
    this._historyCleared = true;
  };

  /**
   * Return the next history state
   * @returns {*}
   */
  forward() {
    if (this._history.length > this._currentState) {
      this._currentState += 1;
      return this._history.get(this._currentState);
    } else {
      Notifier.showWarning('There isn\'t the next game state!', 7000);
    }
  }

  /**
   * Return the prev history state
   * @returns {*}
   */
  backward() {
    if (this._currentState > 1) {
      this._currentState -= 1;
      return this._history.get(this._currentState);
    } else {
      Notifier.showWarning('There isn\'t the prev game state!', 7000);
    }
  }

  /**
   * Push state to history
   * @param {*} data
   */
  pushToHistory(data) {

    this._history.setLength(this._currentState);
    this._history.push(data);
    this._currentState += 1;

    if (this._history.length >= 1000 && this._historyCleared) {
      this._historyCleared = false;
      Notifier.showWarning('History entries amount is more than 1000. <br> Let\'s clean up the history and make your browser fast again.');
    }

  }

  /**
   * Clear history from the given index
   * @param {number|*} fromStep
   */
  deleteHistory(fromStep) {
    this._historyCleared = true;
    this._history.setLength(fromStep || 0);
    this._currentState = fromStep || 0;
  }

  /**
   * Return step from history by the given index
   * @param {number} step
   * @returns {*}
   */
  getStepFromHistory(step) {
    return this._history.get(step);
  }

}
