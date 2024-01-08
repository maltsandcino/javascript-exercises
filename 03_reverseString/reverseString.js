const reverseString = function(string) {

    let length = string.length
    let stringArray = []

    for(i = 0; i < length; i++){
        stringArray.push(string.charAt(i));
    }

    let reverseArray = stringArray.reverse();
    let newString = reverseArray.join("");

    return newString;

};

// Do not edit below this line
module.exports = reverseString;
