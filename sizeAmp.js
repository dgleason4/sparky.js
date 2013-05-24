/**

  @description
	wire size / amperage converter
	
	@param (object)	
	amps: (Number) || guage: (String),
	copper: (Boolean) || aluminum: (Boolean)

	@returns (object)
	amps: (Number), guage: (String), copper: (Boolean), aluminum: (Boolean)

*/

function sizeAmp(obj) {
	"use strict";

	var sizeArray = ['14', '12', '10', '8', '6', '4', '3', '2', '1', '1/0', '2/0', '3/0', '4/0', '250', '300', '350', '500', '750'],
		cuArray = [15, 20, 30, 75, 95, 110, 130, 150, 170, 195, 225, 260, 290, 320, 350, 430, 545],
		auArray = [10, 15, 25, 45, 60, 75, 85, 100, 115, 135, 175, 205, 230, 255, 280, 435],
		cu = obj.copper || false,
		au = obj.aluminum || false,
		size = obj.guage || false,
		amp = Math.abs(Number(obj.amps)) || false,
		index;

	if (cu) {
		if (size) {
			index = sizeArray.indexOf(size);
			amp = cuArray[index];
		} else if (amp) {
			if (amp < 16) {
				index = 0;
			} else if (amp < 21) {
				index = 1;
			} else if (amp < 31) {
				index = 2;
			} else if (amp < 56) {
				index = 3;
			} else if (amp < 76) {
				index = 4;
			} else if (amp < 96) {
				index = 5;
			} else if (amp < 111) {
				index = 6;
			} else if (amp < 131) {
				index = 7;
			} else if (amp < 151) {
				index = 8;
			} else if (amp < 171) {
				index = 9;
			} else if (amp < 196) {
				index = 10;
			} else if (amp < 226) {
				index = 11;
			} else if (amp < 261) {
				index = 12;
			} else if (amp < 291) {
				index = 13;
			} else if (amp < 321) {
				index = 14;
			} else if (amp < 351) {
				index = 15;
			} else if (amp < 431) {
				index = 16;
			} else if (amp < 536) {
				index = 17;
			} else {
				return;
			}
			size =  sizeArray[index];
		}
	} else if (au) {
		if (size) {
			index = sizeArray.indexOf(size);
			amp = auArray[index];
		} else if (amp) {
			if (amp < 11) {
				index = 0;
			} else if (amp < 16) {
				index = 1;
			} else if (amp < 26) {
				index = 2;
			} else if (amp < 46) {
				index = 3;
			} else if (amp < 61) {
				index = 4;
			} else if (amp < 76) {
				index = 5;
			} else if (amp < 86) {
				index = 6;
			} else if (amp < 101) {
				index = 7;
			} else if (amp < 116) {
				index = 8;
			} else if (amp < 136) {
				index = 9;
			} else if (amp < 151) {
				index = 10;
			} else if (amp < 176) {
				index = 11;
			} else if (amp < 206) {
				index = 12;
			} else if (amp < 231) {
				index = 13;
			} else if (amp < 256) {
				index = 14;
			} else if (amp < 281) {
				index = 15;
			} else if (amp < 351) {
				index = 16;
			} else if (amp < 436) {
				index = 17;
			} else {
				return;
			}
			size =  sizeArray[index];
		}
	} else {
		return;
	}

	return {
		amps: amp,
		guage: size,
		copper: cu,
		aluminum: au
	};
}
