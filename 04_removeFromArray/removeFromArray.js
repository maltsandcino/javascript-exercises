const removeFromArray = function(array, ...theArgs) {

    let originalArray = array;

    if (theArgs.length > 1){
        for (const arg of theArgs) {
            if (originalArray.includes(arg)) {
                let position = originalArray.indexOf(arg);
                originalArray.splice(position, 1);
            }        
    }}
    else {
        if (originalArray.includes(theArgs[0])) {
        let singlePosition = originalArray.indexOf(theArgs[0]);
        originalArray.splice(singlePosition, 1);}
    }

    return originalArray;

};
//You can simplify by removing the bottom else statement and changing the first if statement to >= 1.


// Do not edit below this line
module.exports = removeFromArray;
