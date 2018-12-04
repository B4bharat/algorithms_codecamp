// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*
  Regular expression
    for removing all space and special characters - /^\w/
*/

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
          .replace(/[^\w]/g, '') // Removes the special characters in a string
          .toLowerCase() // converts the string to lowercase
          .split('') // splits the string into an array of characters
          .sort() // sorts the array
          .join(''); // joins the characters back to form a string
}

module.exports = anagrams;


// function createCharMap(completeString) {
//   let charMap = {};

//   for (const char of completeString.replace(/[^\w]/g, "").toLowerCase()) {
//     if(charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const charMapA = createCharMap(stringA);
//   const charMapB = createCharMap(stringB);

//   if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (const char in charMapA) {
//     if(charMapB[char] !== charMapA[char]) {
//       return false
//     }
//   }

//   return true;
// }

// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))
// console.log(anagrams('Hi there', 'Bye there'))

/*
function createCharMap(completeString) {
  let charMap = {};

  for (const char of completeString) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
}

function anagrams(stringA, stringB) {
  const modStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const stringAChars = modStringA.split("");

  const modStringB = stringB.replace(/[^\w]/g, "").toLowerCase();
  const stringBChars = modStringB.split("");
  
  const charMapA = createCharMap(stringAChars);
  const charMapB = createCharMap(stringBChars);

  // check if the length of two arrays are equal
  const charMapAKeyLen = Object.keys(charMapA).length;
  const charMapBKeyLen = Object.keys(charMapB).length;

  const equivalentKeyLen = charMapAKeyLen === charMapBKeyLen;
  // check if each key in the object has equivalent values
  let equivalentKeyValues = true;
  for (const char in charMapA) {
    if(charMapB[char] !== charMapA[char]) {
      equivalentKeyValues = false;
      break;
    }
  }

  if (equivalentKeyLen && equivalentKeyValues) {
    return true
  } else {
    return false
  }
}
*/
