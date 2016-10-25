// load math.js
var math = require('./math.js');

/*console.log('create a matrix');
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
*/

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
  //console.log(value._data);   
}


console.log('create a matrix');
var p1 = math.matrix([[1, 0, 0, 0], 
					  [0.5, 0, 0.5, 0],
                      [0, 0.5, 0, 0.5],
                      [0,0,0,1]
					 ]);
print(p1);

function raiseMatrixToPower(matrix, power){

    var result = math.multiply(matrix, matrix);
    power -= 2;

	for (var k=0; k<power; k++){
       result = math.multiply(result, matrix);
	}

	return result;
}



console.log('create the Initial matrix');
var p3 = math.matrix([[0, 0, 1, 0]
					 ]);
print(p3);

console.log('printing probabilities matrix raised to power 50');
//calling the function
var result2 = raiseMatrixToPower(p1, 50);
print(result2);

console.log('printing final result (product of the two matrices)');
var finalResult = math.multiply(p3, result2);
print (finalResult);