// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/**
 * Solution:
 * - Create Empty array of arrays called 'results'
 * - Create a counter variable, starting at 1
 * - As long as (start column <= end column) AND (start row <= end row)
 *  - Loop from start column to end column
 *    - At results[start_row][i] assign counter variable
 *    - Increment counter
 *  - Increment Start row
 *  - Loop from Start row to End row
 *    - At results[i][end_column] assign counter variable
 *    - Increment Counter
 *  - Decrement end row
 *  - ...repeat for other two sides
 */

function matrix(n) {
  // - Create Empty array of arrays called 'results'
  const results = [];

  for (let index = 0; index < n; index++) {
    results.push([]);
  }

  // - Create a counter variable, starting at 1
  let counter = 1;

  let startColumn = 0;
  let endColumn = n-1;
  let startRow = 0;
  let endRow = n-1;

  // - As long as (start column <= end column) AND (start row <= end row)
  while (startColumn <= endColumn && startRow <= endRow) {

    // Responsible for filling up the top row
    for (let i = startColumn; i <= endColumn; i++) {
      // - At results[start_row][i] assign counter variable
      results[startRow][i] = counter;
      // - Increment counter
      counter++;
    }

    // - Increment Start row
    startRow++;

    // Responsible for filling up the rightmost column
    for (let i = startRow; i <= endRow; i++) {
      // - At results[i][end_column] assign counter variable
      results[i][endColumn] = counter;
      // - Increment Counter
      counter++;
    }
    endColumn--;

    // Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start left hand side column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  console.log(results);
}

matrix(3);

module.exports = matrix;
