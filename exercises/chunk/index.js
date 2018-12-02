// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/* 
  SOLUTION #1
  unchunked array is sent to you
  
   - create a new empty 'chunked array'
   - the elements of 'chunked array' is gonna be the chunks of arrays that we wish to push
   - check if the last element of 'chunked array' doesn't exists or if the last element's length is equivalent to the chunk size that we wish to create
    - if any of the two conditions happen, create a new empty array [the chunk] and add the element which is presently being iterated, to it
    - else
      push the present element to it.
   - Once the 'chunked array' is filled, return it.
*/
function chunk(array, size) {
  const chunked = [];

  for (const element of array) {
    const lastElement = chunked[chunked.length - 1];

    if (!lastElement || lastElement.length === size) {
      chunked.push([element]);
    } else {
      lastElement.push(element);
    }
  }

  return chunked;
}

chunk([1, 2, 3, 4], 2)

module.exports = chunk;
