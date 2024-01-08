const repeatString = function(string, num) {

    let word = string;
    let times = num;

    if (num === 0){
        return "";
    }
    else if (num < 0){
        return "ERROR";
    }
    else{
    for(i = 0; i < times - 1; i++){
        word = word + string;
    }

    return word;
}

};

// Do not edit below this line
module.exports = repeatString;
