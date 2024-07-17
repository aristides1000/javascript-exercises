const sumAll = function(num1, num2) {
  let sum = num1;
  for(num1 = num1 + 1; num1 <= num2; num1++) {
    sum = sum + num1;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
