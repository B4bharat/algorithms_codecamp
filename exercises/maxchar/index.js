// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};

  for (const char of str) {
    if(!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  let mostChars = 0;
  let highestCharacterName;

  for (const char in chars) {
    if(chars[char] > mostChars) {
      mostChars = chars[char];
      highestCharacterName = char;
    }
  }

  return highestCharacterName;
}

module.exports = maxChar;
