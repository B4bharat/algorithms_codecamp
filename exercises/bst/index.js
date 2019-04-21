// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  
  insert(data) {
    // if data is less than the present root node and there is already a node on the left, then continue recursion
    if (data < this.data && this.left) {
      this.left.insert(data);
    // if data is less than the present node, be it root or the ones on the left, and there is no node to their left, then create a new node on the left and insert this data there
    } else if (data < this.data) {
      this.left = new Node(data);
    // if data is greater than the present root node and there is already a node on the right, then continue recursion
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    // if data is greater than the present node, be it root or the ones on the right, and there is no node to their right, then create a new node on the right and insert this data there
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
}

module.exports = Node;
