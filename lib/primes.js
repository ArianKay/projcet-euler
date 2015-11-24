var nthPrime = function(n) {
  var count = 1;
  var prime = 0;

  while (count <= n) {
    if (simplePrime(++prime)) {
      count++;
    }
  }

  return prime;
}

function simplePrime(n) {
  if (n === 2 || n === 3 || n === 5) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n < 2) {
    return false;
  }

  var sqrtN = Math.sqrt(n) + 1;
  var i = 7;

  while (i < sqrtN) {
    if (n % i === 0) return false;
    if (n % (i + 4) == 0) return false;
    if (n % (i + 6) == 0) return false;
    if (n % (i + 10) == 0) return false;
    if (n % (i + 12) == 0) return false;
    if (n % (i + 16) == 0) return false;
    if (n % (i + 22) == 0) return false;
    if (n % (i + 24) == 0) return false;
    i += 30;
  }
  return true;
}

function fermatPrime(n, k) {
  var t = k || 3;
  var a = 0;
  if (n > 1) {
    while (t--) {
      a = randomNumber(2, n - 2);
      if (Math.pow(a, n - 1) % n !== 1) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function largestSimplePrimeFactor(n) {
  var m = Math.floor(Math.sqrt(n)) / 2;
  var largestPrime = 0;
  var prime = 2;

  for (var i = 0; i < m; i++) {
    if (i > 0) {
      prime = (i * 2) + 1;
    }

    if (simplePrime(prime) && n % prime === 0) {
      largestPrime = prime;
    }
  }

  return largestPrime;
}

function largestLeastFactorPrimePrimeFactor(n) {
  var m = Math.floor(Math.sqrt(n)) / 2;
  var largestPrime = 0;
  var prime = 2;

  for (var i = 0; i < m; i++) {
    if (i > 0) {
      prime = (i * 2) + 1;
    }

    if (leastFactorPrime(prime) && n % prime === 0) {
      largestPrime = prime;
    }
  }

  return largestPrime;
}

// var init = new Date().getTime();


// // console.log('nth-prime:', nthPrime(10001), (new Date().getTime() - init) / 1000);


// init = new Date().getTime();
// // console.log(getNPrimes(10001));
// // console.log(largestPrimeFactor(13195));
// // console.log(largestPrimeFactor(600851475143));
// // console.log('1', isPrime(1));
// // console.log('2', isPrime(2));
// // console.log('3', isPrime(3));
// // console.log('4', isPrime(4));
// // console.log('5', isPrime(5));
// // console.log('31', isPrime(31, 1000));

// // console.log('exec time simple:', largestSimplePrimeFactor(600851475143), (new Date().getTime() - init) / 1000);


// init = new Date().getTime();
// console.log('exec time simple:', simplePrime(341550071728323), (new Date().getTime() - init) / 1000);
var p = 0;
var i = 0;
var sum = 0;
do {
  if (simplePrime(i)) {
    console.log(i);
    p = i;
    sum += p;
  }
  if (i > 2) {
    i += 2;
  } else {
    i++;
  }
} while (i < 2000000);

console.log(sum);
module.exports = {
  nthPrime: nthPrime
}