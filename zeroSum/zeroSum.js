/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/
function zeroSum(array) {
	var n = -1;
	var first = array[n] 
	var bool;
	
	for (var i = 1; i <= array.length - 1; i++) {
		// console.log(array[i] + array[n], array[n], array[i])
		if (array[i] + array[n] === 0) {
			bool = true
		} else {
			bool = false;
		}
			n++;
	}
	return bool;
}