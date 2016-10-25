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

//Casino Markov Chain Example
var markov = math.matrix([[1,0,0,0],
						  [0.5,0,0.5,0],
						  [0,0.5,0,0.5],
						  [0,0,0,1]]);


function matrix_power(x,matrix){
	var result = matrix;
	for( i=1; i <= x; i++ ){
	var result = math.multiply(result,markov);
		}
	return result;
}

var ten = matrix_power(10, markov);
var fifty = matrix_power(50, markov);
console.log('matrix to the 10th');
print(ten);
console.log('matrix to the 50th');
print(fifty);

// start with $50 
var initial_state = math.matrix([[0,0,1,0]]);
var money_result = math.multiply(initial_state, fifty);
console.log('start with $50');
print(money_result);

//start with $25
var initial_state = math.matrix([[0,1,0,0]]);
var money_result = math.multiply(initial_state, fifty);
console.log('start with $25');
print(money_result);