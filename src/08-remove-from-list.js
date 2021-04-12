/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

/* eslint max-len: ["error", { "code": 110 }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["node"] }] */
function removeKFromList(l, k) {
  const iter = (node) => {
    if (node === null) {
      return l;
    }
    const tail = node.next;
    if (node.value === k) {
      node.value = tail.value;
      node.next = tail.next;
      return iter(tail.next);
    }
    return iter(tail);
  };
  return iter(l);
}

module.exports = removeKFromList;
