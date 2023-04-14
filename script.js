//your JS code here. If required.
let string = prompt("Enter a string:");
function firstNonRepeatedCharacter(string) {
   
for (let i = 0; i < string.length; i++) {
let result = string.charAt(i);
if (string.indexOf(result) === i && string.indexOf(result, i + 1) === -1) {
// console.log(character);
}
}
// return  str

if (result) {
alert(The first non-repeated character is "${result}".);
} else {
alert("There's no non-repeated character in the string.");
}
}
firstNonRepeatedCharacter(string); 



