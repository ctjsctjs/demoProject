app.controller('navController', ['$scope', function($scope){
  $scope.test = 'works';
  $scope.isActive = false;
  $scope.toggleMenu = function() {
    $scope.isActive = !$scope.isActive;
  }
}]);