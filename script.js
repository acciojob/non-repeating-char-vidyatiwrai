//your JS code here. If required.


function firstNonRepeatedCharacter(string) {
    return string.split('').filter(function (character, index, obj) {
        return obj.indexOf(character) === obj.lastIndexOf(character);
    }).shift();
}

console.log(firstNonRepeatedCharacter('aabcbd'));
