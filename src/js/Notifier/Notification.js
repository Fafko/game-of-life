export default class Notification {

  /**
   * @param {string} message
   * @param {string} level
   */
  constructor(message, level) {
    this._defaultLevel = 'info';
    this._level = level || this._defaultLevel;
    this._message = message;

    this._init();
  }

  /**
   * Create notification node
   * @private
   */
  _init() {
    this._node = document.createElement('li');
    this._node.className = `notification __${this._level}`;
    this._node.innerHTML = this._message;
  }

  /**
   * return notification node
   * @returns {Element}
   */
  getNode() {
    return this._node;
  }

  /**
   * Prepare notification instance to deleting
   * @returns {Promise}
   */
  prepareToDie() {

    return new Promise((resolve) => {
      if (this._clickHandler) {
        this._node.removeEventListener('click', this._clickHandler);
      }
      this._node.className += ' __dying';
      setTimeout(resolve, 500);
    });

  }

  /**
   * Fire given callback when notification node is clicked
   * @param {Function} cb
   */
  onClick(cb) {
    this._clickHandler = cb;
    this._node.addEventListener('click', cb);
  }

}