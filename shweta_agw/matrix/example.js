// load math.js
var math = require('./math.js');

console.log('create a matrix');
var p = math.matrix([[1,0,0,0],
					[0.5,0,0.5,0],
					[0,0.5,0,0.5],
					[0,0,0,1]]);
print(p);

// the matrix can be retrieved using valueOf()
console.log('retrieve matrix data');
var array = p.valueOf();
print(array);

// matrices can be cloned
console.log('matrices can be cloned');
var clone = p.clone();
print(clone);

// matrix multiplication using for loop
//console.log('matrix multiplication');
//var result = math.multiply(p, p);
//print(result);

//for (var i=1;i<50;i++) 
//{	
//	var result = math.multiply(result, p); 
//}
//console.log("final result using for loop");
//print(result);

// multiplication using built-in math function
function power(x,matrix)
{
	var result = math.multiply(matrix, matrix);
	x-=2;
	for (var i=0; i<x; i++) {
		result = math.multiply(result, matrix);
		}
		return result;
}

var markov = power(50,p);
console.log("final result using power function");
print(markov);

var q = [0,1,0,0];
var new_result25 = math.multiply(q,markov);
print("result for starting condition 25");
print(new_result25);

var r = [0,0,1,0];
var new_result50 = math.multiply(r,markov);
print("result for starting condition 50");
print(new_result50);

function print (value) {
var precision = 3;
console.log(math.format(value, precision));
//console.log(value._data);   
}