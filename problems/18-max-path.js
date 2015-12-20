var Edge = function(weight, dest) {
  return {
    weight: weight || 0,
    dest: dest || null
  };
};

var Vertex = function() {
  this.dist = Number.MIN_VALUE;
  this.prev = null;
  this.edges = [];
};

Vertex.prototype = {
  constructor: Vertex,
  setDist: function(d) {
    this.dist = d;
  },
  setPrev: function(p) {
    this.prev = p;
  },
  addEdge: function(e) {
    this.edges.push(e);
  }  
};

var Graph = function(weights) {
  var vertices = [];

  for (var i = 0; i < weights.length; i++) {
    for (var j = 0; j < weights[i].length; j++) {
      var v = new Vertex();
      if (i > 0) {
        var e = new Edge(weights[i][j], v);
        if (j !== 0) { // first element
          vertices[vertices.length - weights[i].length].addEdge(e);
        }
        if (j !== (weights[i].length - 1)) { // last element
          vertices[vertices.length - weights[i - 1].length].addEdge(e);
        }
      }
      vertices.push(v);
    }
  }

  var getVertices = function() {
    return vertices.slice();
  };

  return {
    getVertices: getVertices
  };
};


var popLargestDist = function(arr) {
  var max = Number.MIN_VALUE;
  var maxIndex = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].dist > max) {
      max = arr[i].dist;
      maxIndex = i;
    }
  }

  var vertex = arr[maxIndex];
  arr.splice(maxIndex, 1);
  return vertex;
};

var dijkstra = function(graph, sourceDist) {
  var maxDist = Number.MIN_VALUE;
  var maxVertex = null;
  var q = graph.getVertices();

  for (var i = 0; i < q.length; i++) {
    q[i].setDist(Number.MIN_VALUE);
    q[i].setPrev(null);
  }
  q[0].setDist(sourceDist || 0);

  while (q.length) {
    var u = popLargestDist(q);
    for (var j = 0; j < u.edges.length; j++) {
      var alt = u.dist + u.edges[j].weight;
      if (alt > u.edges[j].dest.dist) {
        u.edges[j].dest.setDist(alt);
        u.edges[j].dest.setPrev(u);
        q.push(u.edges[j].dest);
      }

      if (alt > maxDist) {
        maxDist = alt;
        maxVertex = u.edges[j].dest;
      }
    }
  }

  return {
    maxDist: maxDist,
    maxVertex: maxVertex
  };
};

var readline = require('readline');
var fs = require('fs');

var readlineInterface = readline.createInterface({
  input: fs.createReadStream('../data/67.txt')
});

var weights = [];
var sourceWeight = null;
readlineInterface.on('line', function(line) {
  var lineArr = line.split(' ').map(function(value) {
    return parseInt(value);
  });
  if(!sourceWeight) {
    sourceWeight = lineArr[0];
  }
  weights.push(lineArr);
});


readlineInterface.on('close', function() {

  var init = new Date().getTime();

  var graph = new Graph(weights);
  var maxSum = dijkstra(graph, sourceWeight);
  console.log('maxSum', maxSum.maxDist, (new Date().getTime() - init) / 1000);

});
