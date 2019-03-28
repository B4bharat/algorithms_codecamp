// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    // if both the variables end up pointing to the same node, then we have a circular node and hence return true
    if (slow == fast) {
      return true;
    }
  }

  // If we ever get even a single negative value from fast.next or fast.next.next, if either of them is null, we know the list has ended and we know for sure the list is not circular, it ends somewhere. Hence, return false 
  return false;
}

module.exports = circular;
