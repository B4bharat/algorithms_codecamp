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
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
     const last = this.getLast();

     if (last) {
       last.next = new Node(data);
     } else {
       this.head = new Node(data);
     }
  }
}



module.exports = { Node, LinkedList };
