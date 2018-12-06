// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Solution #2: compliant with test cases
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair)
  }
}

module.exports = steps;

/*
// Solution #1: Appropriate, but fails the tests
function steps(n) {
  // 2
  // 1st iteration - 1# (2-1) space
  // 2nd iteration - 2# (2-2) space
  
  // 3
  // 1st iteration - 1# (3-1) space
  // 2nd iteration - 2# (3-2) space
  // 3rd iteration - 3# (3-3) space

  // 4
  // 1st iteration - 1# (4-1) space
  // 2nd iteration - 2# (4-2) space
  let stepsArray = [];
  for (let index = 1; index <= n; index++) {
    const hash = "#";
    const spaceChar = " ";
    const newLineChar = "\n";

    const stepLine = hash.repeat(index) + spaceChar.repeat(n-index) + newLineChar;
    stepsArray.push(stepLine)
  }

  return stepsArray.join('');
}
*/