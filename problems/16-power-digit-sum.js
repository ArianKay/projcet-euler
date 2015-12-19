var powerDigits = function(num, pow) {
  pow--;
  var numArr = num.toString(10).split('').map(function(value) {
    return parseInt(value);
  }).reverse();

  for (var i = 0; i < pow; i++) {
    var arr = [];
    var carry = 0;

    for (var j = 0; j < numArr.length; j++) {
      var d = (numArr[j] * 2) + carry;
      if(d >= 10) {
        carry = Math.floor(d / 10);
        d -= carry * 10;
      } else {
        carry = 0;
      }

      arr.push(d);
    }

    if (carry) {
      arr.push(carry);
    }   
    numArr = arr;
    arr = null;
  }

  return numArr;
};

var arraySum = function(arr) {
  return arr.reduce(function(prev, curr, index) {
    return prev + parseInt(curr);
  }, 0);
};

// @todo: time and optimize
console.log(arraySum(powerDigits(2, 1000)));
