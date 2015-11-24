function sum(n, m) {
	while (--n % m !== 0);

	var count = Math.floor(n / m);

	return m * (count * (count + 1)) / 2;
}


var init = new Date().getTime();
console.log('sum5', sum(1000, 5), (new Date().getTime() - init) / 1000);

init = new Date().getTime();
console.log('sum3', sum(10, 3), (new Date().getTime() - init) / 1000);

init = new Date().getTime();
console.log('sum15', sum(1000, 15), (new Date().getTime() - init) / 1000);

init = new Date().getTime();
console.log('sum3+5', sum(1000, 3) + sum(1000, 5) - sum(1000, 15) , (new Date().getTime() - init) / 1000);
