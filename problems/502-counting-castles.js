require('console.table');

var CountingCastles = function(w, h) {
  'use strict';

  var hash = [
    [1]
  ];
  var countBlocks = function(row) {
    var r = row.toString(2).split('');
    var count = parseInt(r[0]);

    for (var i = r.length - 1; i >= 0; i--) {
      if (r[i] === '0' && r[i + 1] === '1') {
        count++;
      }
    }
    return count;
  }

  var generateHash = function() {
    if (h <= 1) {
      return 0;
    }
    var arr = [];
    var piv = Math.pow(2, w);
    var blocks = 0;
    var count = 0;
    for (var i = 1; i < piv; i++) {
      blocks = countBlocks(i);
      arr.push(blocks);
      if (!!(blocks % 2)) {
        count++;
      }
    }

    console.log('count', count);
    return arr;
  }

  var traverseTree = function() {
    if (h <= 1) {
      return 0;
    }
    var piv = Math.pow(2, w) - 1;
    for (var i = 1; i < h; i++) {
      for (var j = 2; j <= piv; j++) {
        var count = countBlocks(j);
        console.log(j, count);
      }
    }
  }

  var initGrid = function(w, h) {
    var grid = [];

    for (var i = 0; i < h; i++) {
      grid.push([]);
      for (var j = 0; j < w - 1; j++) {
        grid[i].push(0);
      }
    }
    return grid;
  }

  var getNextGrid = function(grid) {
    var rowIndex = 0;
    var row = null;
    var carry = true;

    while (carry) {
      for (var i = 0; i < grid[rowIndex].length; i++) {
        if (grid[rowIndex + 1][i] === 1) {
          grid[rowIndex][i] = Math.abs(grid[rowIndex][i] - 1);
          if (rowIndex > 0 && grid[rowIndex][i] === 0) {
            var currIndex = rowIndex;
            while (currIndex >= 0) {
              grid[currIndex][i] = 0;
              currIndex--;
            }
          } else if (rowIndex > 0 && grid[rowIndex][i] === 1) {
            var currIndex = rowIndex;
            while (currIndex >= 0) {
              grid[currIndex][i] = 1;
              currIndex--;
            }
          }
        } else {
          continue;
        }

        if (i === (grid[rowIndex].length - 1) && (grid[rowIndex][i] === 1)) {
          rowIndex++;
          carry = true;
          if (rowIndex === (grid.length) - 1) {
            carry = false;
          }
        } else if (grid[rowIndex][i] === 0) {
          carry = false;
          break;
        }
      }
    }
    return grid;
  }

  var toString = function(grid) {
    var out = '';
    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
        out += grid[i][j] === 1 ? '+' : '-';
      }
      out += '\n';
    }
    return out;
  }


  return {
    traverseTree: traverseTree,
    generateHash: generateHash,
    initGrid: initGrid,
    getNextGrid: getNextGrid,
    toString: toString
  };
}
var finalT = 0;
var initT = new Date().getTime();
var cc = CountingCastles(3, 2);

var grid = cc.initGrid(3, 3);
console.log(cc.toString(grid));
for (var i = 0; i < 150; i++) {
  grid = cc.getNextGrid(grid);
  console.log(cc.toString(grid));
}

finalT = new Date().getTime();
console.log('time:', (finalT - initT) / 1000);