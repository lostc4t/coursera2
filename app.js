(function() {
  'use strict';

  var x = 'hello';
  // module(name, array of dependencies)
  // controller will define the 'view' of our view model (index.html)
  angular.module('myFirstApp',[])

  .controller('myFirstController', function($scope){
    $scope.name = "Yaakov";
    $scope.sayHello = function() {
      return "Hello Coursera!";
    };
  });

  angular.module('NameCalculator',[])

  .controller('NameCalculatorController', function($scope) {

    $scope.name="";
    $scope.totalValue = 0;

    $scope.displayNumeric = function() {
      var totalNameValue = calculateNumericForString($scope.name);
      $scope.totalValue = totalNameValue;
    };

    function calculateNumericForString(string) {
      var totalStringValue = 0;
      for ( var i = 0; i < string.length; i++ ) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    };
  })


})();  // IIFE  Immediately Invoked Function Expression - prevents variables from bleeding into global scope
