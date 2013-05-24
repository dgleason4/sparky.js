/**

  @description
	decibel / wattage converter
	
	@param (Object)
	decibels: (Number) || watts: (Number)
		
	@returns (object)
	decibels: (Number), watts: (Number)

*/

function decibel(obj) {
	"use strict";

	var dbs = Math.abs(Number(obj.decibels)) || false,
		wts = Math.abs(Number(obj.watts)) || false;

	if (!dbs && !wts) {return; }

	if (dbs) {
		wts = Math.pow(10, (dbs / 10));
	} else if (wts) {
		dbs = 10 * (Math.LOG10E * Math.log(wts));
	} else {return; }

	return {
		decibles: dbs,
		watts: wts
	};
}
