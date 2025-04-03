const leapYears = function(year) {
    const divisibleByFour = year % 4 == 0;
    const divisibleByHundred = year % 100 === 0;
    const divisibleByFourHundred = year % 400 === 0;
    
    let isLeapYear = false;

    if (divisibleByFour){
        if (!divisibleByHundred || divisibleByFourHundred) return !isLeapYear;
    }
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
