// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // Creates a new Node which links with the node present at the head
    const node = new Node(data, this.head);

    // Detaches the original head Node and attaches it to the new Node
    /**
     *      LinkedList L
     *        head
     *    Node N2 (data, Node N1 ref) -> Node N1 (data, reference)
     */
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    
    this.head = this.head.next;
  }

  removeLast() {
    // If there is no nodes at all, then simply return
    if (!this.head) {
      return;
    }

    // If there is only one node in the list
    if (!this.head.next) {
      this.head = null;
      return;
    }

    // Create two pointers
    // 'previous' pointer will always trail behind 'node' pointer
    let previous = this.head;
    let node = this.head.next;
    // keep checking if the pointer that is ahead ('node') has a next reference to go to, if so, make the 'previous', the new node
    while (node.next) {
      previous = node;
      node = node.next;
    }

    // Ultimately 'previous' will point to the second last node in the linked list, all we need to do is deference the second last, so that the last one is removed
    previous.next = null;
  }

  insertLast(data) {
     const last = this.getLast();

     if (last) {
       last.next = new Node(data);
     } else {
       // Condition wherein there is no node in the list
       this.head = new Node(data);
     }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    // Case in which the index that is asked for is beyond the size of the linked list
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    // condition wherein there is no node in the list
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    // condition wherein you wanna add to the first index of the list
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}



module.exports = { Node, LinkedList };
