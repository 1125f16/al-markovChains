// load math.js
var math = require('./math.js');

function print (value) {
  var precision = 3;
  console.log(math.format(value, precision));
}

// Builds the matrix, takes to power N
function finder(N){
	// Create matrix
	var p = math.matrix([
		[1, 0, 0, 0],
		[0.5, 0, 0.5, 0],
		[0, 0.5, 0, 0.5],
		[0, 0, 0, 1]
		]
		);

		// Multiply it N number of times
	res = math.pow(p, N);


	// Print results
	print(res);

	var start = [0,1,0,0];

	var fifty = math.multiply(start, res);

	print(fifty);
}

// Run function
finder(50);