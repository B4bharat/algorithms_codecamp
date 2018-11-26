// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce( (reverseString, character) =>  character + reverseString, '' );
}


module.exports = reverse;

/**** SOLUTION #1
  function reverse(str) {
    return str.split('').reverse().join('');
  }
*/

/**** SOLUTION #2
  function reverse(str) {
    let reversedString = '';

    for(let character of str) {
      reversedString = character + reversedString;
    }

    return reversedString;
  }
*/
