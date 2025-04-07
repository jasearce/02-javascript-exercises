const fibonacci = function(num) {
    if ( num < 0 ) return "OOPS";
    if ( num == 0 ) return 0;
    if ( num == 1 ) return 1;
    let fibonacciArr = [];
    for (let i = 0; i < num; i++) {
        (i === 0 || i === 1) ? fibonacciArr.push(1) : fibonacciArr.push(fibonacciArr[i-1] + fibonacciArr[i-2]); 
    }
    console.log({fibonacciArr});
    return fibonacciArr.at(num-1);
};

// Do not edit below this line
module.exports = fibonacci;
