'use strict';

angular.module('sparky')
  .controller('panelScheduleCtrl', function ($scope) {
  var o, e, a,
    circuitsAll = [];

    $scope.circuitsOdd = [];

	for (o = 0; o < 21; o++) {
	  $scope.circuitsOdd[o] = {name: ''};
	}
		
	$scope.circuitsEven = [];
		
    for (e = 0; e < 21; e++) {
      $scope.circuitsEven[e] = {name: ''};
    }

    circuitsAll[0] = {name: "", volt: "", amp: ""};
	
    for (a = 0; a < 21; a++) {
   	  circuitsAll[((a * 2) + 1)] = $scope.circuitsOdd[a];
      circuitsAll[((a + 1) * 2)] = $scope.circuitsEven[a];
    }

	$scope.addName = function () {
      circuitsAll[0].name = $scope.pname;
    };

    $scope.addVolt = function () {
      circuitsAll[0].volt = $scope.pvolt;
    };

	$scope.addAmp = function () {
      circuitsAll[0].amp = $scope.pamp;
    };

    $scope.scheduleToJson = function () {
      circuitsAll = angular.toJson(circuitsAll);
      console.log(circuitsAll);
    };
  });
