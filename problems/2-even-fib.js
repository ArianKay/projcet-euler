function sumEvenFib(n) {
	var n1 = 1;
	var n2 = 2;
	var sum = 2;
	var fib = 0;


	while (fib < n) {
		fib = n1 + n2;
		n1 = n2;
		n2 = fib;


		console.log(fib);
		if(fib % 2 === 0) {
			sum += fib;
		}
	}

	return sum;
}

var init = new Date().getTime();
console.log('fib-10', sumEvenFib(89), (new Date().getTime() - init) / 1000);

init = new Date().getTime();
console.log('fib-4M', sumEvenFib(4000000), (new Date().getTime() - init) / 1000);