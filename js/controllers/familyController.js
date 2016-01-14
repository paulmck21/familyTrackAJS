var familyApp = angular.module('familyApp', []);
familyApp.controller('FamilyController', function($scope) {
	$scope.master = {firstName: "", lastName: ""};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

	$scope.objs = [];

	$scope.member = {};

	var testDate = new Date();

	$scope.submitName = function(memberName){
		$scope.member.name = memberName

	}

	$scope.submitCity = function(cityName){
		$scope.member.city = cityName;
		$scope.member.memberTime = testDate;

		$scope.objs.push($scope.member);

		$scope.member = {};

	}



    // $scope.submitVals = function(memberName, memberCity){
    // 	$scope.objs.push({
    // 		'name': memberName,
    // 		'city': memberCity,
    // 		'time': testDate
    // 	});
   

    $scope.reset();


     // console.log($scope.objs);

    
	
});
