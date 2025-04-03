const sumAll = function(start, end) {
    if (start < 0 || end < 0 ) return "ERROR";
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR"; // no floating numbers allowed
    if (start === isNaN || end === isNaN) return "ERROR"; // no other type of data allowed (can be omitted)
    let resultSum = 0;
    // Works when start is greater than end
    if (start > end) {
        for (let i = end; i < start + 1; i++) {
            resultSum+= i;
        }
    }
    else {
        for (let i = start; i < end + 1; i++) {
            resultSum+= i;
        }
    }
    return resultSum;
};

// Do not edit below this line
module.exports = sumAll;
