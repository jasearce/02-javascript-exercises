const reverseString = function(word) {
    let reversedStr = "";
    for (let i = 0; i < word.length; i++) {
        reversedStr = reversedStr.concat(word.charAt(word.length - i - 1));
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
