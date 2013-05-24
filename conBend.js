/**

  @description
	conduit offset converter
	
	@param {Object}
	degree: (Number)  10 || 22 || 30 || 45 || 60, offset: (Number)
		
	@returns {Object}
	degree: (Number), offset: (Number), length: (Number)

*/

function conBend(obj) {
	"use strict";

	var mult, len, d,
		degrees = [10, 22, 30, 45, 60],
		multiple = [6, 2.6, 2, 1.4, 1.2],
		deg = Math.abs(Number(obj.degree)) || false,
		off = Math.abs(Number(obj.offset)) || false;

	if (deg && off) {
		d = degrees.indexOf(deg);
		if (d !== 0) {
			mult = multiple[d];
		} else {
			return;
		}
	} else {
		return;
	}

	len = (off * mult).toFixed(2);

	return {
		degree: deg,
		offset: off,
		length: len
	};
}
