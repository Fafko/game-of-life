export default class AbstractRenderer {

  constructor() {

    if (this.constructor === AbstractRenderer) {
      throw new Error('Can\'t instantiate abstract class!');
    }

  }

  /**
   * Render the given word
   * @param {World} world
   */
  render(world) {}

  /**
   * Mount renderer node to given node
   * @param {Element} node
   */
  mountTo(node) {
    node.appendChild(this._getStylesheets());
    node.appendChild(this._node);
  }
  
  /**
   * Fire given callback when any world point will be clicked
   * @param {Function} cb
   */
  onPointClick(cb) {

    this._node.addEventListener('click', function (e) {

      let rect = this._node.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      cb(this._getPointCoordsByEventCoords(x, y));

    }.bind(this))

  };

}