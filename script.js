//yfunction firstNonRepeatedChar(str) {
  const charCounts = new Map(); 
for (const char of str) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }
  for (const char of str) {
    if (charCounts.get(char) === 1) {
      return char;
    }
  }
  return null;
}
const userInput = prompt("Enter a string:");
const result = firstNonRepeatedChar(userInput);
if (result) {
  alert(`The first non-repeated character is "${result}".`);
} else {
  alert("There's no non-repeated character in the string.");
}



