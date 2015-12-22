var numbers = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand'
};  

var num2Word = function(num) {
  var numArray = num.toString().split('').map(function(value) {
    return parseInt(value);
  });
  var out = '';

  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] === 0) {
      continue;
    }
    if (out.length) {
      out += ' and ';
    }
    if (i === numArray.length - 1) {
      out += numbers[numArray[i]];
    } else if (i === numArray.length - 2 && numArray[i] < 2) {
      out += numbers[numArray[i] * 10 + numArray[i+1]];
      break;
    } else if (i === numArray.length - 2) {
      out += numbers[numArray[i] * 10];
      if (numArray[i+1] > 0) {
       out += '-' + numbers[numArray[i+1]];
      }
      break;
    } else {
      out += numbers[numArray[i]] + ' ' + numbers[Math.pow(10, numArray.length - (i +1))];
    }
  }

  return out;
};


var countLetters = function (str) {
  var esc = str.replace(/(\s|\-)/g, '');
  return esc.length;
};

var count = 0;
for (var i = 1; i <= 1000; i++) {
  var num = num2Word(i);
  console.log(num);
  count += countLetters(num);
}

console.log(count);
