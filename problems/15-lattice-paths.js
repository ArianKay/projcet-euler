var generateGrid = function(num) {
  var h = Math.ceil(num / 2);
  var grid = [];
  for (var i = 0; i <= num; i++) {
    var r = [];
    for (var j = 0; j <= num; j++) {
      if(i === 0 || j === 0) {
        r.push(1);
      } else {
        r.push(grid[i-1][j] + r[j-1]);
      }
    }
    grid.push(r);
  }

  return grid;
};

function factorial (n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return factorial(n-1) * n;
}

function centralBinomial(num) {
  return (factorial(2*num)) / Math.pow(factorial(num), 2);
}


// @todo: time and optimize
console.log(generateGrid(20));
console.log(centralBinomial(20));