// load math.js
var math = require('./math.js');

console.log('create a matrix');
var p = math.matrix([[1, 0,0,0], 
					 [0.5,0,0.5,0],
					 [0,0.5,0,0.5],
					 [0,0,0,1]]);
print(p);

var t = math.matrix([0, 0,1,0]);
print(t);

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
var result = math.pow(p, 50);
var result2= math.multiply(p,p);
// print(result);

var result3 = p;

for(i=0;i<10;i++){
	var result3 = math.multiply(result3,p);
}
print(result);

console.log('Final');
final = math.multiply(t,result);
print(t);
print(final);

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
  //console.log(value._data);   
}