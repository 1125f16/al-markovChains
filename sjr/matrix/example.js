// load math.js
var math = require('./math.js');

console.log('create a matrix');
var p = math.matrix([[1.0,0.0,0.0,0.0], 
					 [0.5, 0.0, 0.5, 0.0],
					  [0.0, 0.5, 0.0, 0.5],
					   [0.0, 0.0, 0.0, 1.0],]);
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
function power(x,matrix){
	var result = math.multiply(matrix,matrix);

	for(var i=0; i<x; i++){
		result = math.multiply(result,matrix);
	}
	return result;
}
var markov = power(50,p);
// return result;
// var result = math.pow(p, 50);
 print(markov);
   var v = [0.0,0.0,1.0,0.0];

  var newres = math.multiply(v,markov);
  print(newres);  

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
  //console.log(value._data); 


}