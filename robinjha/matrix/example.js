// load math.js
var math = require('./math.js');

console.log('create a matrix');
//var p = math.matrix([[5, 8], 
//					 [4, 3]]);
var p = math.matrix([[1,0,0,0],
					[0.5,0,0.5,0],
					[0,0.5,0,0.5],
					[0,0,0,1]]);


var initialStateVP50 = [0,0,1,0];
var vP50 = [0,1,0,0];
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
//var result = Math.pow(math.multiply(p, p),10);
//var blah = math.multiply(p,p);
//var result = Math.pow(blah,10);
var result = power(50,p);
var result1 = math.multiply(vP50, result);
var result2 = math.multiply(initialStateVP50, result);
print("======Matrix raised to power of 50==========");
print(result);
print("===========================================");
print("After multiplying with vector [0,0,1,0]");
print(result2);
print("===========================================");
print("After multiplying with vector [0,1,0,0]");
print(result1);

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
  //console.log(value._data);   
}

function power(x,matrix) {
	var result = math.multiply(matrix, matrix);
	x -= 2;
	for(var i = 0; i < x; i++) {
		result = math.multiply(result,matrix);
	}
	return result;
}


