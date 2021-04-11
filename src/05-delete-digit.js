/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  const arrOfNum = [];
  digits.forEach((_, index) => {
    const copy = digits.slice();
    copy.splice(index, 1);
    arrOfNum.push(copy.join(''));
  });
  return Math.max(...arrOfNum);
}

module.exports = deleteDigit;
