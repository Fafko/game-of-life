import AbstractRenderer from './AbstractRenderer';

export default class HtmlRenderer extends AbstractRenderer {

  constructor() {
    super();
    this.POINT_HEIGHT = 2;
    this.POINT_WIDTH = 2;
    this._node = document.createElement('div');
    this._node.className = 'html-renderer';
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
            this._pointLinks[index].style.backgroundColor = worldData[index] ? 'black' : 'white';
          }
          this._previousWorldData[index] = worldData[index];
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

      let htmlRow = document.createElement('div');
      htmlRow.className = 'html-renderer__row';

      for (let x = 0; x < width; x += 1) {

        let htmlPoint = document.createElement('div');
        let index = world.getPointIndexByCoords(x, y);
        htmlPoint.className = 'html-renderer__point';
        htmlRow.appendChild(htmlPoint);
        htmlPoint.style.backgroundColor = worldData[index] ? 'black' : 'white';
        this._pointLinks[index] = htmlPoint;
        this._previousWorldData[index] = worldData[index];

      }

      fragment.appendChild(htmlRow);

    }

    this._node.appendChild(fragment);
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
      .html-renderer {
        display: inline-block;
        border: 1px solid rgb(125, 202, 74);
      }`;
    styles.innerHTML += `
      .html-renderer__row {
        display: block;
        overflow: hidden;
      }`;
    styles.innerHTML += `
      .html-renderer__point {
        height: ${this.POINT_HEIGHT}px; 
        width: ${this.POINT_WIDTH}px; 
        float: left;
      }`;

    return styles;
  }

}