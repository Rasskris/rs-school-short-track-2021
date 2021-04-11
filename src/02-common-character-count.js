/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return 0;
  }

  let count = '';
  const copyS2 = s2.split('').slice();
  for (let i = 0; i < s1.length; i += 1) {
    const char = s1[i];
    const index = copyS2.indexOf(char);
    if (index !== -1) {
      const sameElement = copyS2.splice(index, 1);
      count = `${count}${sameElement}`;
    }
  }

  return count.length;
}

module.exports = getCommonCharacterCount;
