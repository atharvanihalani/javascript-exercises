const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function() {
  return arguments[0].reduce((sumRn, num) => sumRn + num, 0);
};

const multiply = function() {
  if (arguments.length == 0 || arguments[0].length == 0) {
    return 'ERROR';
  }
  return arguments[0].reduce((prodRn, num) => num * prodRn, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  }
	return a * factorial(a-1);
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
