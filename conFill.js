/**

@description
conduit fill calculator

@param (Object) with two of three fields:
conduitSize: (Number), wireSize: (Number), wireNumber: (Number)

@returns (Object)
conduitSize: (Number), wireSize: (Number), wireNumber: (Number)

*/

function conFill(obj) {
  "use strict";
  var i, v, w, x, y, z,
      conFillArray = [
        [12, 9, 5, 3, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [22, 16, 10, 6, 4, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [35, 26, 16, 9, 7, 4, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [61, 45, 28, 16, 12, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1],
        [84, 61, 38, 22, 16, 10, 8, 7, 5, 4, 3, 3, 2, 1, 1, 1, 1],
        [138, 101, 63, 36, 26, 16, 13, 11, 8, 7, 6, 5, 4, 3, 3, 2, 1],
        [241, 176, 111, 64, 46, 28, 24, 20, 15, 12, 10, 8, 7, 6, 5, 4, 3],
        [364, 266, 167, 96, 69, 43, 36, 30, 22, 19, 16, 13, 11, 9, 7, 6, 5],
        [476, 347, 219, 126, 91, 56, 47, 40, 29, 25, 20, 17, 14, 11, 10, 9, 6],
        [608, 443, 279, 161, 116, 71, 60, 51, 37, 32, 26, 22, 18, 15, 13, 11, 8]
      ],
      cS = Math.abs(Number(obj.conduitSize)) || false,
      wS = Math.abs(Number(obj.wireSize)) || false,
      wN = Math.abs(Number(obj.wireNumber)) || false;

  if (!cS && !wS && !wN) {return; }
  if (!cS && !wS) {return; }
  if (!cS && !wN) {return; }
  if (!wS && !wN) {return; }

  if (cS && wN) {
    for (i = 0; i <= 17; i = i + 1) {
      x = conFillArray[cS - 1][i];
      y = conFillArray[cS - 1][i + 1];
      if (wN <= x && wN > y) {
        obj.wireSize = i + 1;
        return obj;
      }
    }
  }

  if (cS && wS) {
    z = conFillArray[cS - 1][wS - 1];
    obj.wireNumber = z;
    return obj;
  }

  if (wS && wN) {
    for (v = 0; v <= 10; v = v + 1) {
      w = conFillArray[v][wS - 1];
      if (wN <= w) {
        obj.conduitSize = v + 1;
        return obj;
      }
    }
  }
}
