const repeatString = function(phrase, times) {
    let repeatedStr = "";
    if(times < 0) return "ERROR";
    for (let index = 0; index < times; index++) {
        repeatedStr += phrase;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;