/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = '';

  for (let i = 0; i < str.length;) {
    const curElem = str[i];
    let nextIndex = i + 1;
    let countChar = 1;

    while (curElem === str[nextIndex]) {
      countChar += 1;
      nextIndex += 1;
    }

    if (countChar > 1) {
      encodedStr = `${encodedStr}${countChar}${str[i]}`;
      i += countChar;
    } else {
      encodedStr = `${encodedStr}${str[i]}`;
      i += 1;
    }
  }
  return encodedStr;
}

module.exports = encodeLine;
