/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const sp = domains.map((domain) => domain.split('.').reverse());
  const result = {};
  sp.forEach((item) => {
    let prop = '';
    item.forEach((domain) => {
      prop = `${prop}.${domain}`;
      if (result[prop]) {
        result[prop] += 1;
      } else {
        result[prop] = 1;
      }
    });
  });

  return result;
}

module.exports = getDNSStats;
