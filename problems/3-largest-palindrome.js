function isPalindrome(n) {
  var nArr = n.toString().split('');
  var last = nArr.length - 1;

  for (var i = 0; i < Math.ceil(nArr.length / 2); i++) {
    if (nArr[i] !== nArr[last - i]) {
      return false;
    }
  }
  return true;
}



var initT = new Date().getTime();

var maxPalindrome = 0;
var product = 0;
var m = 0;
var n = 0;
for (var i = 100; i < 1000; i++) {
  for (var j = 100; j <= 1000; j++) {
    product = i * j;
    if (isPalindrome(product) && product > maxPalindrome) {
      maxPalindrome = product;
      m = i;
      n = j;
    }
  }
}

var res = {
  m: m,
  n: n,
  p: m * n
};
console.log('exec time:', res, (new Date().getTime() - initT) / 1000);