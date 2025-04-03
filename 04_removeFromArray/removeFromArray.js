const removeFromArray = function(givenArray, ...itemsToRemove) {
    resultArr = [];
    for (let i = 0; i < givenArray.length; i++) {
        if (!itemsToRemove.includes(givenArray[i])) {
            resultArr.push(givenArray[i]);
        }
    }
    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
