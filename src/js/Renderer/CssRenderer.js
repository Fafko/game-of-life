import AbstractRenderer from './AbstractRenderer';

export default class CssRenderer extends AbstractRenderer {

  constructor() {
    super();
    this.POINT_HEIGHT = 2;
    this.POINT_WIDTH = 2;
    this._node = document.createElement('div');
    this._node.className = 'css-renderer';
    this._isInitialized = false;
    this._styleNode = null;
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
      let worldStyle = '';
      let pointWidthAsPercent = 100 / world.getWidth();

      for (let y = 0; y < height; y += 1) {

        let rowStyle = `.__row-${y} { background-image: linear-gradient(to right`;
        let previousColor = null;

        for (let x = 0; x < width; x += 1) {

          let index = world.getPointIndexByCoords(x, y);
          let color = worldData[index] ? 'black' : 'white';

          if (previousColor) {

            if (previousColor !== color) {
              rowStyle += `, ${previousColor} ${x * pointWidthAsPercent}%, ${color} ${x * pointWidthAsPercent}%`;
              previousColor = color;
            }

          } else {
            previousColor = color;
            rowStyle += `, ${color} ${x * pointWidthAsPercent}%`;
          }

        }
        rowStyle += `, ${previousColor} ${width * pointWidthAsPercent}%`;
        rowStyle += `);} \n`;
        worldStyle += rowStyle;

      }

      this._styleNode.innerHTML = worldStyle;

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

    let fragment = document.createDocumentFragment();
    this._styleNode = document.createElement('style');
    this._node.parentNode.appendChild(this._styleNode);

    for (let y = 0; y < height; y += 1) {

      let htmlRow = document.createElement('div');
      htmlRow.className = 'css-renderer__row __row-' + y;
      htmlRow.style.height = this.POINT_HEIGHT + 'px';
      htmlRow.style.width = this.POINT_WIDTH * width + 'px';
      fragment.appendChild(htmlRow);

    }

    this._node.appendChild(fragment);
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
      .css-renderer {
        display: inline-block;
        border: 1px solid #b2b2b2;
      }`;
    styles.innerHTML += `
      .css-renderer__row {
        display: block;
        overflow: hidden;
      }`;

    return styles;
  }

}