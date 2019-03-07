// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

const qOne = new Queue();
qOne.add(1);
qOne.add(2);

const qTwo = new Queue();
qTwo.add("Hola");
qTwo.add("Senorita");

function weave(sourceOne, sourceTwo) {
  const weavedQ = new Queue();
  
  while (sourceOne.peek() !== undefined && sourceTwo.peek() !== undefined)  {
    weavedQ.add(sourceOne.remove())
    weavedQ.add(sourceTwo.remove())
  }
  
  return weavedQ
  
}

const weavedQ = weave(qOne, qTwo)
console.log(weavedQ)

module.exports = weave;
