// load math.js
var math = require('./math.js');

console.log('Matrix: ');

var p = math.matrix([[1,0,0,0], [0.5,0,0.5,0],[0,0.5,0,0.5],[0,0,0,1]]);

print(p);

var array = p.valueOf();

var clone = p.clone();

var multiply_matrix_result = p;

for (var i=1; i<25 ; i++)
{
	multiply_matrix_result = math.multiply(p,multiply_matrix_result);
}

console.log('matrix multiplication ' + i + ' times');
print(multiply_matrix_result);


var multiply_matrix_result = p;

for (var i=1; i<50 ; i++)
{
	multiply_matrix_result = math.multiply(p,multiply_matrix_result);
}

console.log('matrix multiplication ' + i + ' times');
print(multiply_matrix_result);

var intial_vector = [0,1,0,0];

var scalar_result = math.multiply(intial_vector,multiply_matrix_result);

print("Vector Multiplication [0,1,0,0] : ");
print(scalar_result);


function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
}