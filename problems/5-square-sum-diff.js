function sumSquered(n) {
  return Math.pow((n * (n + 1) / 2), 2);
}

function squareSum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}


var initT = new Date().getTime();



var res = sumSquered(100) - squareSum(100);

console.log('exec time:', res, (new Date().getTime() - initT) / 1000);