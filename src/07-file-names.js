/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const copy = names.slice();
  const result = names.slice(0, 1);
  const equalNames = {};
  for (let i = 1; i < copy.length; i += 1) {
    let k = 1;
    const item = copy[i];
    if (copy.slice(0, i).includes(item)) {
      const num = equalNames[item] ? equalNames[item].k : k;
      const renamed = `${item}(${num})`;
      result.push(renamed);
      copy.splice(i, 1, renamed);
      k++;
      equalNames[item] = { k };
    } else {
      result.push(item);
    }
  }
  return result;
}

module.exports = renameFiles;
