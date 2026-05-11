const add = (a, b) => {
  return a + b;
}

const subtract = (a,b) => {
  return a-b;
}

const sum = (arr) => {
  return arr.reduce((total, current) => total += current, 0);
}

const multiply = (arr) => {
  return arr.reduce( (total, curVal) => total *= curVal, 1);
}

const power = (base, exp) => {
  return base **exp;
}

const factorial = (num) => {
  let start = 1;
  let total = 1;
  while (start <= num) {
    total *= start;
    start++;
  }
  return total;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
