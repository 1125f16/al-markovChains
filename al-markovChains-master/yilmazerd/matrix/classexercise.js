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
var mat2 = math.matrix([0,0,1,0]]);
var result3 = math.multiply(mat2,result2);
//console.log(result2)
console.log(result3)
