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

var math = require('./math.js');

console.log('create a matrix');
var p = math.matrix([[1, 0, 0, 0], 
					 [0.5, 0, 0.5, 0],
					 [0, 0.5, 0, 0.5],
					 [0, 0, 0, 1]]);
var result = p;
for (var i=0; i<50; i++) {
	result = math.multiply(result, p);
}


var result2 = math.pow(p,50);
var mat2 = math.matrix([0,0,1,0]); //starting at $50
var result3 = math.multiply(mat2,result2);
//console.log(result2)
console.log(result3)
