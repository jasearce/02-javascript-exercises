const add = function(...args) {
  let result = 0;
	args.forEach(arg => result+= arg);
  return result;
};

const subtract = function(...args) {
	let result = 0;
  for (let i = 0; i < args.length; i++) {
    if ( i === 0 ){
      result = args[0];
    } 
    else {
      result -= args[i];
    }
  }
  return result;
};

const sum = function(numberArr) {
	return numberArr.reduce((total, number) => total + number, 0);
};

const multiply = function(numberArr) {
  return numberArr.reduce((total, number) => total * number);
};

const power = function(...args) {
	return args.reduce((total, number) => Math.pow(total,number));
};

const factorial = function(number) {
	let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
