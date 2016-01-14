app.directive('memberinfo', function() { 
  return { 
    restrict: 'E', 
    scope: {
    }, 
    templateUrl: '<p>Name: {{ obj.name }} and City: {{ obj.city }}' 
  }; 
});