// load math.js
var math = require('./math.js');

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
  //console.log(value._data);   
}

var p = math.matrix([[1,   0,   0,   0], 
					 [0.5, 0,   0.5, 0], 
					 [0,   0.5, 0,   0.5],
                     [0,   0,   0   ,1],]);

function power(x,matrix){
	var result = math.multiply(matrix,matrix);
	x = x-2; 
	for (var i=0; i<x; i++){
		result = math.multiply(result,matrix);
	}
	return result; 
}

var markov = power(100,p); 
print(markov);


var state2 = math.matrix([[0,   1,   0,   0]]);
var v2P = math.multiply(state2,markov);
print(v2P);

var state3 = math.matrix([[0,   0,   1,   0]]);
var v3P = math.multiply(state3,markov);
print(v3P);

