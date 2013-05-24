/**

  @description
	resistor color converter

	@param (Object)
	band1: (String), band2: (String), band3: (String), band4: (String)
		
	values for band(s):
		'black' || 'brown' || 'red' || 'orange' || 'yellow' || 'green' || 'blue' || 'purple' || 'gray' || 'white' || 'gold' || 'silver' || null

	@returns (Object)
	resistance: (Number), tolerance:  (Number)

*/
function resistor(obj) {
	"use strict";

	var band = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'gray', 'white', 'gold', 'silver', null],
		multiple = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0.01, 0.1, null],
		tlrnce = [null, 1, 2, null, 5, 0.5, 0.25, 0.1, 0.05, null, 5, 10, 20],
		firstDigit = String(band.indexOf(obj.band1)),
		secondDigit = String(band.indexOf(obj.band2)),
		mult = multiple[(band.indexOf(obj.band3))],
		tol = tlrnce[(band.indexOf(obj.band4))],
		res;

	if (firstDigit && secondDigit && mult) {
		res = ((Number(firstDigit + secondDigit)) * mult);
	}

	return {
		resistance: res,
		tolerance : tol
	};
}
