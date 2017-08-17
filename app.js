(function() {
  'use strict';

  var shoppingList1 = [
    "Milk","Donuts","Cookies","Chocolate",
    "Peanut Butter", "Pepto Bismol",
    "Pepto Bismol (Chocolate flavor)",
    "Pepto Bismol (Cookie flavor)"
  ];

  var shoppingList2 = [
    { name: "Milk", quantity: "2"},
    { name: "Donuts", quantity: "200"},
    { name: "Cookies", quantity: "300"},
    { name: "Chocolate", quantity: "5"},
    { name: "Peanut Butter", quantity: "2"},
    { name: "Pepto Bismol", quantity: "2"},
    { name: "Pepto Bismol (Chocolate flavor)", quantity: "2"},
    { name: "Pepto Bismol (Cookie flavor)", quantity: "2"},
  ]

  angular.module('ShoppingListApp',[])
  .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['$scope','$timeout'];

  function ShoppingListController($scope,$timeout) {
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.addToList = function() {
      var newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };

      $scope.shoppingList2.push(newItem);
    };

  };

})();  // IIFE  Immediately Invoked Function Expression - prevents variables from bleeding into global scope
  // angular.module('BindingApp',[])
  // .controller('BindingController', BindingController);
  //
  // BindingController.$inject = ['$scope','$timeout'];
  //
  // function BindingController($scope,$timeout) {
  //   $scope.firstName = 'Yaakov';
  //   //$scope.fullName = '';
  //
  //   $scope.showNumberOfWatchers = function() {
  //     console.log("# of watchers: ",$scope.$$watchersCount);
  //   };
  //
  //   $scope.setFullName = function() {
  //     $scope.fullName = $scope.firstName + " Chaikin";
  //   };
  //
  //   $scope.logFirstName = function() {
  //     console.log("first name is: ",$scope.firstName);
  //   };
  //
  //   $scope.logFullName = function() {
  //     console.log("full name is:", $scope.fullName);
  //   };
  //
  // }

  // angular.module('CounterApp',[])
  // .controller('CounterController', CounterController);
  //
  // CounterController.$inject = ['$scope','$timeout'];
  //
  // function CounterController($scope,$timeout) {
  //   $scope.counter = 0;
  //
  //   $scope.upCounter = function() {
  //     $timeout(function() {
  //       $scope.counter++;
  //       console.log("counter incremented: ",$scope.counter);
  //     },  2000
  //     );
  //   };
  //
  //   // $scope.upCounter = function() {
  //   //   setTimeout(function() {
  //   //     $scope.$apply(function(){
  //   //       $scope.counter++;
  //   //       console.log("counter incremented: ",$scope.counter);
  //   //     });
  //   //   },
  //   //     2000
  //   //   );
  //   // };
  //   // $scope.upCounter = function() {
  //   //   setTimeout(function() {
  //   //     $scope.counter++;
  //   //     console.log("counter incremented: ",$scope.counter);
  //   //     $scope.$digest();
  //   //   },
  //   //     2000
  //   //   );
  //   // };
  //
  // }


  // angular.module('CounterApp',[])
  // .controller('CounterController', CounterController);
  //
  // CounterController.$inject = ['$scope'];
  //
  // function CounterController($scope) {
  //   $scope.onceCounter = 0;
  //   $scope.counter = 0;
  //
  //   $scope.showNumberOfWatchers = function() {
  //     console.log("# of watchers: ",$scope.$$watchersCount);
  //   };
  //
  //   $scope.countOnce = function() {
  //     $scope.onceCounter = 1;
  //   }
  //
  //   $scope.upCounter = function() {
  //     $scope.counter++;
  //   }
  //
  //   $scope.$watch(function() {
  //     console.log("Digest fired");
  //   })
  //
  //   // $scope.$watch('onceCounter', function(newValue, oldValue) {
  //   //   console.log('oldValue',oldValue);
  //   //   console.log('newValue',newValue);
  //   // });
  //   //
  //   // $scope.$watch('counter', function(newValue, oldValue) {
  //   //   console.log('counter: oldValue',oldValue);
  //   //   console.log('counter: newValue',newValue);
  //   // });
  // }

  // var x = 'hello';
  // module(name, array of dependencies)
  // controller will define the 'view' of our view model (index.html)
  // angular.module('myFirstApp',[])
  //
  // .controller('myFirstController', function($scope){
  //   $scope.name = "Yaakov";
  //   $scope.sayHello = function() {
  //     return "Hello Coursera!";
  //   };
  // });
  //
  // angular.module('NameCalculator',[])
  //
  // .controller('NameCalculatorController', function($scope) {
  //
  //   $scope.name="";
  //   $scope.totalValue = 0;
  //
  //   $scope.displayNumeric = function() {
  //     var totalNameValue = calculateNumericForString($scope.name);
  //     $scope.totalValue = totalNameValue;
  //   };
  //
  //   function calculateNumericForString(string) {
  //     var totalStringValue = 0;
  //     for ( var i = 0; i < string.length; i++ ) {
  //       totalStringValue += string.charCodeAt(i);
  //     }
  //     return totalStringValue;
  //   };
  // })

  // angular.module('DIApp',[])
  // .controller('DIController', DIController);
  //
  // function DIController($scope, $filter, $injector) {
  //   $scope.name = 'Yaakov';
  //   $scope.upper = function() {
  //     var upCase = $filter('uppercase');
  //     $scope.name = upCase($scope.name);
  //
  //   };
  //   console.log($injector.annotate(DIController));
  // }

  // angular.module('MsgApp',[])
  // .controller('MsgController', MsgController)
  // .filter('loves', LovesFilter)
  // .filter('truth', TruthFilter);
  //
  // MsgController.$inject = ['$scope', '$filter', 'lovesFilter'];
  //
  // function MsgController($scope, $filter, lovesFilter) {
  //   $scope.name = 'Yaakov';
  //   $scope.stateOfBeing = "hungry";
  //   $scope.cookieCost = 0.45;
  //
  //   $scope.sayMessage = function() {
  //     var msg = $scope.name + " likes to eat healthy snacks at night"
  //     //var output = $filter('uppercase')(msg);
  //     return msg;
  //   }
  //
  //   $scope.sayLovesMessage = function() {
  //     var msg = $scope.name + " likes to eat healthy snacks at night"
  //     var output = lovesFilter(msg);
  //     return output;
  //   }
  //
  //   $scope.feedYaakov = function() {
  //     $scope.stateOfBeing="fed";
  //   }
  //
  // }
  //
  // function LovesFilter() {
  //   return function(input) {
  //     input = input || "";
  //     input = input.replace("likes","loves");
  //     return input;
  //   }
  // };
  //
  // function TruthFilter() {
  //   return function(input, target, replace) {
  //     input = input || "";
  //     input = input.replace(target, replace);
  //     return input;
  //   }
  // };
