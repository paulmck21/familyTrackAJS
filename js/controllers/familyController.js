var familyApp = angular.module('familyApp', []);
familyApp.controller('FamilyController', function($scope) {
	$scope.master = {firstName: "", lastName: ""};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

	$scope.objs = [];

	var testDate = new Date();

    $scope.submitVals = function(memberName, memberCity){
    	$scope.objs.push({
    		'name': memberName,
    		'city': memberCity,
    		'time': testDate
    	});
   

    $scope.reset();


     console.log($scope.objs);

    
	}
});
familyApp.directive('memberinfo', function() { 
  return { 
  	scope: {
  		user: '='
  	},
    template: '<li> {{ x.name }} </li>'
  }; 
});