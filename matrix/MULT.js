//programming for matrix ^ 50


// load math.js
var math = require('./math.js');

console.log('create a matrix');
var p = math.matrix([[1, 0, 0, 0], 
					 [0.5,0,0.5,0],
					 [0,0.5,0,0.5],
					 [0,0,0,1]]);
print(p);

// the matrix can be retrieved using valueOf()
//console.log('retrieve matrix data');
//var array = p.valueOf();
//print(array);

// matrices can be cloned
//console.log('matrices can be cloned');
//var clone = p.clone();
//print(clone);

// matrix multiplication
console.log('matrix multiplication');
p1=p;
for (i=1;i<11;i++)
{
	i=i+1;
var p1 = math.multiply(p, p1);

}
var p2=math.pow(p,10);
//print(p);
print(p1);
print(p2);


function power (x,matrix){
	var result=math.multiply(matrix,matrix);
	x-=2;
	for (var j=0;j<x;j++){
		result=math.multiply(result,matrix)
	}
	return result;
}

var markov=power(10,p);
print(markov);
function print (value) {
  var precision = 3;
 console.log(math.format(value, precision));
console.log(value._data);   
}