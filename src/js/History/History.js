import clone from 'lodash/clone';

export default class History {

  constructor() {
    this._pool = [];
    this.length = this._pool.length;
  }

  /**
   * Set history length
   * @param {number} newLength
   */
  setLength(newLength) {
    this._pool.length = newLength;
    this.length = this._pool.length;
  }

  /**
   * Push new state to history
   * @param {*} state
   */
  push(state) {
    this._pool.push(state);
    this.length = this._pool.length;
  }

  /**
   * Return state with the given index from history
   * @param {number} index
   * @returns {*}
   */
  get(index) {
    return clone(this._pool[index - 1]);
  }

};