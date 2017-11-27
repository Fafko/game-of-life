import AbstractRenderer from './AbstractRenderer';

export default class SvgRendered extends AbstractRenderer {

  constructor() {
    super();
    this.POINT_HEIGHT = 2;
    this.POINT_WIDTH = 2;
    this._node = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this._node.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    this._node.setAttribute('class', 'svg-renderer');
    this._isInitialized = false;
    this._pointLinks = [];
    this._previousWorldData = [];
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

      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {

          let index = world.getPointIndexByCoords(x, y);

          if (this._previousWorldData[index] !== worldData[index]) {
            this._pointLinks[index].setAttribute('fill', worldData[index] ? 'black' : 'white');
            this._previousWorldData[index] = worldData[index];
          }

        }
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

    let worldData = world.getState();
    let width = world.getWidth();
    let height = world.getHeight();

    let fragment = document.createDocumentFragment();

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {

        let svgPoint = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        let index = world.getPointIndexByCoords(x, y);
        svgPoint.setAttribute('fill', worldData[index] ? 'black' : 'white');
        svgPoint.setAttribute('x', `${x * this.POINT_WIDTH}px`);
        svgPoint.setAttribute('y', `${y * this.POINT_WIDTH}px`);
        svgPoint.setAttribute('width', `${this.POINT_WIDTH}px`);
        svgPoint.setAttribute('height', `${this.POINT_WIDTH}px`);
        this._pointLinks[index] = svgPoint;
        this._previousWorldData[index] = worldData[index];
        fragment.appendChild(svgPoint);

      }
    }

    this._node.appendChild(fragment);
    this._node.setAttribute('width', `${width * this.POINT_WIDTH}px`);
    this._node.setAttribute('height', `${width * this.POINT_WIDTH}px`);
    this._isInitialized = true;

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
      x: Math.ceil(x / this.POINT_WIDTH) - 1,
      y: Math.ceil(y / this.POINT_HEIGHT) - 1
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
      .svg-renderer {
        display: inline-block;
        border: 1px solid #b2b2b2;
        box-sizing: content-box;
      }`;

    return styles;
  }

}