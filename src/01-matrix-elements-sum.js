/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const countRows = matrix.length;
  const countColumns = matrix[0].length;
  const rotatedMatrix = [];
  for (let j = 1; j <= countColumns; j += 1) {
    const lastIndColumn = countColumns - j;
    const arr = [];
    for (let i = 0; i < countRows; i += 1) {
      arr.push(matrix[i][lastIndColumn]);
    }
    rotatedMatrix.push(arr);
  }

  let sum = 0;
  rotatedMatrix.forEach((item) => {
    for (let k = 0; k < item.length; k += 1) {
      if (item[k]) {
        sum += item[k];
      } else {
        break;
      }
    }
  });
  return sum;
}

module.exports = getMatrixElementsSum;
