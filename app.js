var app = angular.module('decisionApp', []);

app.controller('mainController', ['$scope', '$log', function($scope, $log){

  $log.info('Hello sunshine!');

  $scope.input = '';
  $scope.list = [];
  $scope.randomResult = -1;
  $scope.submit = function() {
    if($scope.input) {
      $scope.list.push(this.input);
      $scope.input = '';
    }
  };

  $scope.randomChoice = function() {
    $log.log("clicked!");
    var total = $scope.list.length;
    var result = $scope.randomResult = Math.floor(Math.random()* total);
    $scope.randomResult = $scope.list[result];
    $log.info(result);

  };
}]);
