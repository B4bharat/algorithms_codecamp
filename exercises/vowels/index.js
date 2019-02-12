// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  /*
    - 'match' method returns an array of matches if found, if nothing is found/matched, it returns null
    - '[]' indicates that let us know if any of the characters from inside the bracket is found
    - 'g': global, keep on searching even if one match is found
    - 'i': do a case insensitive search
  */
  return matches ? matches.length : 0;
}

console.log(vowels('Hi There!'));

module.exports = vowels;

/*
Solution #2: Better iterative solution with array.includes
function vowels(str) {
  let vowelCounter = 0;
  let vowelList = ['a', 'e', 'i', 'o', 'u'];

  for (const char of str.toLowerCase()) {
    if (vowelList.includes(char)) {
      vowelCounter++;
    }
  }

  return vowelCounter++;
}
*/

/*
Solution #1: Iterative solution
function vowels(str) {
  
    - convert your string to array of chars
    - loop through your array of chars and check if the current character is 'a' or 'e' or 'i' or 'o' or 'u'
    - if so, increment the counter
    - post looping return the counter
  
 let vowelCounter = 0;

 let arrayOfChars = str.split('');
 arrayOfChars.forEach(char => {
   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
     vowelCounter++
   }
 });

 return vowelCounter;
}
*/