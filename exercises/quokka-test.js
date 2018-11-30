const string = "Parallelisation";
const chars = {};

for (const char of string) {
  if(!chars[char]) {
    chars[char] = 1;
  } else {
    chars[char]++
  }
}


let mostChars = 0;
let highestCharacterName;

for (const char in chars) {
  if(chars[char] > mostChars) {
    mostChars = chars[char];
    highestCharacterName = char
  }
}

console.log(mostChars)
console.log(highestCharacterName)