/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const copy = arr.slice();

  while (copy.indexOf(-1) !== -1) {
    const index = copy.indexOf(-1);
    copy.splice(index, 1);
  }
  copy.sort((a, b) => a - b);

  let i = arr.indexOf(-1);
  while (i !== -1) {
    copy.splice(i, 0, -1);
    i = arr.indexOf(-1, i + 1);
  }
  return copy;
}

module.exports = sortByHeight;
