// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    let result = fn.apply(this, args);
    cache[args] = result;

    return cache[args];
  }
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib)
const result = fib(85)
console.log(result)

module.exports = fib;

/*
  Recursive Solution:
  - if the asked index is less than 2, return the index directly
  - else call the fibo function with (n - 1) and (n - 2) and add them both
*/
/*function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const result = fib(2)
console.log(result)*/

/*
  Iterative Solution:
  - Create a 'Result' Array with the first two numbers[0,1] in the series already added
  - Loop from index = 2 to n and add (i - 1) with (i - 2) and push it to the 'Result' Array
  - return the result array with the index number entered in the function parameter
*/
// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const prevNum = result[i - 1];
//     const beforePrevNum = result[i - 2];
    
//     result.push(prevNum + beforePrevNum);
//   }

//   return result[n];
// }
