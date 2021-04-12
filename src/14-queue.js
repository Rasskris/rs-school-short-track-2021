const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

/* eslint max-len: ["error", { "code": 110 }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["queue"] }] */
class Queue {
  constructor () {
    this.queue = new ListNode();
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    if (!this.queue.value) {
      this.queue.value = element;
    } else {
      const next = this.queue;
      this.queue = new ListNode(element);
      this.queue.next = next;
    }
    this.length += 1;
  }

  dequeue() {
    this.length -= 1;
    let result;
    if (!this.queue.next) {
      result = this.queue.value;
      this.queue = new ListNode();
      return result;
    }
    const iter = (queue) => {
      const tail = queue.next;
      if (tail.next) {
        return iter(tail);
      }
      queue.next = null;
      result = tail.value;
      return result;
    };
    return iter(this.queue);
  }
}

module.exports = Queue;
