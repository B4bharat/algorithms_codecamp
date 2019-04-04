// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data)
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // Breadth-First Search Traversal
  traverseBF(fn) {
    // This Array Keeps track of the traversal, first element that we are filling is the root
    const traversalArr = [this.root];

    // keep looping until there is an element in the array
    while (traversalArr.length) {
      // get the first element of the array
      const node = traversalArr.shift();

      // push all the children of the first element to the end of the array
      traversalArr.push(...node.children);
      // remove the first element of the array
      fn(node);
    }
  }

  // Depth-First Search Traversal
  traverseDF(fn) {
    // This Array Keeps track of the traversal, first element that we are filling is the root
    const traversalArr = [this.root];

    // keep looping until there is an element in the array
    while (traversalArr.length) {
      // get the first element of the array
      const node = traversalArr.shift();

      // push all the children of the first element to the end of the array, this basically makes you travel to the depths of the children
      traversalArr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
