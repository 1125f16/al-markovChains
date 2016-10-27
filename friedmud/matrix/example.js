// load math.js
var math = require('./math.js');

console.log('create a matrix');
var p = math.matrix([[5, 8],
					 [4, 3]]);
print(p);

// the matrix can be retrieved using valueOf()
console.log('retrieve matrix data');
var array = p.valueOf();
print(array);

// matrices can be cloned
console.log('matrices can be cloned');
var clone = p.clone();
print(clone);

// matrix multiplication
console.log('matrix multiplication');
var result = math.multiply(p, p);
print(result);

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
  //console.log(value._data);
}

var p = math.matrix([[1,0,0,0],
		     [0.5,0,0.5,0],
		     [0,0.5,0,0.5],
		     [0,0,0,1]])

var initialSateVP50 = [0,0,1,0];
var vP50 = [0,1,0,0];

print(p);

var result = math.pow(math.multiply(p, p), 50)

var result1 = math.multiply(vP50, result);
var result2 = math.multiply(initialSateVP50, result);

print(result)
print(result2)
