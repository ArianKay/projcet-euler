var largeFactorial = function(num) {
  var f = [1];
  var carry = 0;
  var tmp = 0;

  for (var i = 2; i <= num; i++) {
    for (var j = 0; j < f.length; j++) {
      tmp = f[f.length - 1 - j] * i;
      if (carry) {
        tmp += carry;
        carry = 0;
      }
      if (tmp > 9) {
        carry = Math.floor(tmp / 10);
      }

      f[f.length - (1 + j)] = tmp - (carry * 10);

      if (carry && j === (f.length - 1)) {
        j++;
        f.unshift(carry);
        carry = 0;
      }
      console.log(f, tmp, carry, carry*10);
    }
  }

  return f;
};

console.log(largeFactorial(100).reduce(function(car, curr) {
  return car + curr;
}, 0));
