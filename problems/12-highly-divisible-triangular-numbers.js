var numDivisors = function(num) {
  var divisors = 0;
  var sqrt = parseInt(Math.sqrt(num));

  for (var i = 1; i <= sqrt; i++) {
    if (number % i === 0) {
      divisors += 2;
    }
  }

  if (Math.pow(sqrt, 2) === num) {
    divisors--;
  }

  return divisors;
}


init = new Date().getTime();

var number  = 0;
var j = 1;
while(numDivisors(number) < 500) {
  number += j++;
}
console.log('numDivisors', number, (new Date().getTime() - init) / 1000);
