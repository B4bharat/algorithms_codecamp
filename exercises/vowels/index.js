// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  /*
    - convert your string to array of chars
    - loop through your array of chars and check if the current character is 'a' or 'e' or 'i' or 'o' or 'u'
    - if so, increment the counter
    - post looping return the counter
  */
 let vowelCounter = 0;

 let arrayOfChars = str.split('');
 arrayOfChars.forEach(char => {
   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
     vowelCounter++
   }
 });

 console.log(vowelCounter);
 return vowelCounter;
}

vowels('Why?')

module.exports = vowels;
