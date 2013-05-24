/**

  @description
	ohms law calculator

	@param (Object) with two of four fields:
	apms: (Number), watts: (Number), volts: (Number), ohms: (Number)

	@returns 
	apms: (Number), watts: (Number), volts: (Number), ohms: (Number)

*/

function ohmsLaw(obj) {
	"use strict";

	var a = Math.abs(Number(obj.amps)) || false,
		w = Math.abs(Number(obj.watts)) || false,
		v = Math.abs(Number(obj.volts)) || false,
		o = Math.abs(Number(obj.ohms)) || false;

	if (!a && !v && !w && !o) {return; }
	if (!a && !v && !w) {return; }
	if (!a && !v && !o) {return; }
	if (!v && !w && !o) {return; }

	if (v) {
		if (a) {
			w = v * a;
			o = v / a;
		} else if (w) {
			a = w / v;
			o = (Math.pow(v, 2)) / w;
		} else if (o) {
			a = v / o;
			w = (Math.pow(v, 2)) / o;
		}
	} else if (w) {
		if (a) {
			v = w / a;
			o = w / (Math.pow(a, 2));
		} else if (o) {
			v = Math.sqrt(w * o);
			a = Math.sqrt(w / o);
		}
	} else if (a) {
		if (o) {
			v = a * o;
			w = (Math.pow(a, 2)) * o;
		}
	} else {return; }

	return {
		amps: a,
		volts: v,
		watts: w,
		ohms: o
	};
}
