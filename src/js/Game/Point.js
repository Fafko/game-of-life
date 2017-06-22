export default class Point {

  /**
   * Decide point state for the next cycle
   * @param {boolean} isPointAlive
   * @param {Array} neighbours
   * @returns {boolean}
   */
  static willPointBeAlive(isPointAlive, neighbours) {

    let aliveNeighboursCount = neighbours.filter(neighbour => neighbour).length;
    let result = false;

    if (isPointAlive && (aliveNeighboursCount <= 1 || aliveNeighboursCount >= 4)) {
      result = false;
    } else if (!isPointAlive && aliveNeighboursCount === 3) {
      result = true;
    } else if (isPointAlive && aliveNeighboursCount === 2 || aliveNeighboursCount === 3) {
      result = true;
    }

    return result;

  }

}