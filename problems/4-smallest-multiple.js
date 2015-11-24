function smallestMultiple(num, min, max) {
  for (var i = min; i <= max; i++) {
    if (num % i !== 0) {
      return false;
    }
  }
  return true;
}


var initT = new Date().getTime();
var found = false;
var num = 0;

while (!found) {
  num++;
  found = smallestMultiple(num, 1, 20);
}

var res = {
  num: num
};
console.log('exec time:', res, (new Date().getTime() - initT) / 1000);