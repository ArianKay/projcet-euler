var max = 1000;
var a = 0;
var b = 0;
var c = 0;
var found = false;
for (var i = 1; i < max; i++) {
  for (var j = i; j < max; j++) {
    a = Math.pow(i, 2);
    b = Math.pow(j, 2);
    c = Math.sqrt(a + b);
    if ((i + j + c) === 1000) {
      a = i;
      b = j;
      found = true;
      break;
    }
  }
  if (found) {
    break;
  }
}


console.log(a, b, c, a * b * c);