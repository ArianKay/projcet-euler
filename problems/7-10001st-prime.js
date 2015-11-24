var primes = require('./primes.js');
var init = new Date().getTime();

console.log('nth-prime:', primes.nthPrime(10001), (new Date().getTime() - init) / 1000);