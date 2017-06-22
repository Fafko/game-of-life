import {
  DIED_CHAR,
  ALIVE_CHAR
} from '../config';

export default class Figure {

  /**
   * @param {string} template
   */
  constructor(template) {
    this._textTemplate = template;
    this._dataTemplate = [];
    this._width = null;
    this._height = null;
    this._parseTextTemplate();
  }

  /**
   * Return array with figure data
   * @returns {Array}
   */
  getData() {
    return this._dataTemplate;
  }

  /**
   * Return figure width
   * @returns {number|*}
   */
  getWidth() {
    return this._width;
  }

  /**
   * Return figure height
   * @returns {number|*}
   */
  getHeight() {
    return this._height;
  }

  /**
   * Parse text template to data template
   * @private
   */
  _parseTextTemplate() {

    let figureRows = this._textTemplate.split('\n');

    figureRows.forEach(row => {
      this._width = row.trim().length;
      this._height += 1;

      row.split('').forEach((char) => {
        if (char === DIED_CHAR) {
          this._dataTemplate.push(false);
        } else if (char === ALIVE_CHAR) {
          this._dataTemplate.push(true);
        }
      })

    });

  }

}