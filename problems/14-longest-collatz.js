var Collatz = function() {
  var next = function(n) {
    if (n % 2) {
      return (3 * n) + 1;
    }
    return n / 2;
  };

  var sequenceLength = function(n) {
    var count = 1;
    while (n !== 1) {
      count++;
      n = next(n);
    }

    return count;
  };

  return {
    next: next,
    sequenceLength: sequenceLength
  };
};

var init = new Date().getTime();
var number = 1000000;
var sequenceLength = 0;
var longestN = 0;
while(number > 0) {
  var sl = Collatz().sequenceLength(number);
  if (sl > sequenceLength) {
    sequenceLength = sl;
    longestN = number;
  }
  number--;
}
console.log('longest collatz', sequenceLength, longestN, (new Date().getTime() - init) / 1000);
