import AbstractRenderer from './AbstractRenderer';

export default class CanvasRenderer extends AbstractRenderer {

  constructor() {
    super();
    this.SCALE_RATIO = window.devicePixelRatio || 1;
    this.POINT_HEIGHT = 2 * this.SCALE_RATIO;
    this.POINT_WIDTH = 2 * this.SCALE_RATIO;
    this._node = document.createElement('canvas');
    this._node.className = 'canvas-renderer';
    this._isInitialized = false;
    this._context = null
  }

  /**
   * Render the given word
   * @param {World} world
   */
  render(world) {

    if (this._isInitialized) {

      let worldData = world.getState();
      let width = world.getWidth();
      let height = world.getHeight();

      this._context.clearRect(0, 0, this._width, this._height);

      for (let y = 0; y < height; y += 1) {

        let previousColor = null;
        let previousRectWidth = 0;

        for (let x = 0; x < width; x += 1) {

          let index = world.getPointIndexByCoords(x, y);
          let color = worldData[index] ? 'black' : 'white';

          if (previousColor) {

            if (previousColor !== color) {
              this._context.fillStyle = previousColor;
              this._context.fillRect(x * this.POINT_WIDTH - previousRectWidth, y * this.POINT_HEIGHT, previousRectWidth, this.POINT_HEIGHT);
              previousColor = color;
              previousRectWidth = this.POINT_WIDTH;
            } else {
              previousRectWidth += this.POINT_WIDTH;
            }

          } else {
            previousColor = color;
            previousRectWidth = this.POINT_WIDTH;
          }

        }

        this._context.fillStyle = previousColor;
        this._context.fillRect(width * this.POINT_WIDTH - previousRectWidth, y * this.POINT_HEIGHT, previousRectWidth, this.POINT_HEIGHT);

      }

    } else {
      this._init(world);
    }

  }

  /**
   * Init renderer data
   * @param {World} world
   * @private
   */
  _init(world) {

    let width = world.getWidth();
    let height = world.getHeight();

    this._height = this.POINT_HEIGHT * height;
    this._width = this.POINT_WIDTH * width;
    this._node.setAttribute('height', `${this._height}`);
    this._node.setAttribute('width', `${this._width}`);
    this._node.style.height = `${this._height / this.SCALE_RATIO}px`;
    this._node.style.width = `${this._width / this.SCALE_RATIO}px`;
    this._context = this._node.getContext('2d');

    this._isInitialized = true;

    this.render(world);

  }

  /**
   * Calculate clicked point coordinates by click event coordinates
   * @param {number} x
   * @param {number} y
   * @returns {{x: number, y: number}}
   * @private
   */
  _getPointCoordsByEventCoords(x, y) {
    return {
      x: Math.ceil(x / this.POINT_WIDTH * this.SCALE_RATIO) - 1,
      y: Math.ceil(y / this.POINT_HEIGHT * this.SCALE_RATIO) - 1
    }
  }

  /**
   * Return renderer styles
   * @returns {Element}
   * @private
   */
  _getStylesheets() {

    let styles = document.createElement('style');

    styles.innerHTML += `
      .canvas-renderer {
        display: inline-block;
        border: 1px solid rgb(125, 202, 74);
        box-sizing: content-box;
      }`;

    return styles;
  }

}