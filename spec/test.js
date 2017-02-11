var myApp = require('../lib/app.js');

describe("Program to list Prime numbers between 0 to n where is 'n' is the input", function(){


	describe("Check for invalid inputs",function(){
		it("String 'foo' should return 'Invalid input, please only Positive Integers above zero are allowed'",function(){
			expect(myApp.getPrimes('foo').isEqual('Invalid input, please only Positive Integers above zero are allowed'))
		});

		it("Array '[]' should return 'Invalid input, please only Positive Integers above zero are allowed'",function(){
			expect(myApp.getPrimes([]).isEqual('Invalid input, please only Positive Integers above zero are allowed'));
		});

		it("Object '{}' should return 'Invalid input, please only Positive Integers above zero are allowed'",function(){
			expect(myApp.getPrimes({}).isEqual('Invalid input, please only Positive Integers above zero are allowed'));
		});
	});


	describe("Check for Negative Integer inputs",function(){
		it("Input -23 should return 'Invalid input, please only Positive Integers above zero are allowed'",function(){
			expect(myApp.getPrimes(-23).isEqual('Invalid input, please only Positive Integers above zero are allowed'));
		});
	});

	describe("Check for input of '0' ",function(){
		it("Input '0' should return 'Invalid input, please only Positive Integers above zero are allowed'",function(){
			expect(myApp.getPrimes(0).isEqual('Invalid input, please only Positive Integers above zero are allowed'));
		});
	});

	describe("Check that it can run on a 32 bit processor",function(){
		it("Input '2147483647' should return 'Please keep it 32 bit' ", function(){
			expect(myApp.getPrimes(2147483647).isEqual('Please keep it 32 bit'));
		});
	});

	describe("Check for correct input values",function(){
		it("Input '3' should return [ 2, 3 ]"function(){
			expect(myApp.getPrimes(3).isEqual([ 2, 3 ]));
		});
	});

	describe("Check for correct input values",function(){
		it("Input '24' should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]"function(){
			expect(myApp.getPrimes(24).isEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]));
		});
	});

	
	describe("Check for correct input values",function(){
		it("Input '60' should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59 ]"function(){
			expect(myApp.getPrimes(24).isEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59 ]));
		});
	});
});