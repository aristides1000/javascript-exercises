const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    if (num1 > num2) {
      let aux = num1;
      num1 = num2;
      num2 = aux;
    }
  
    let sum = num1;
    for(num1 = num1 + 1; num1 <= num2; num1++) {
      sum = sum + num1;
    }
    return sum;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
