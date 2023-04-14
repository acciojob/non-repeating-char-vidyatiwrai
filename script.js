//your JS code here. If required.

function firstNonRepeatedCharacter(string) {
for (let i = 0; i < string.length; i++) {
let character = string.charAt(i);
if (string.indexOf(character) === i && string.indexOf(character, i + 1) === -1) {
return character;
}
}
return null;
}


