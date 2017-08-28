app.controller('loginController', ['$scope', '$http', function($scope, $http){
  $scope.message = 'Login page';
  $scope.sortField = 'ID';
  $scope.reverse = false;
  $scope.subjects = [];
  $scope.fetchSubjects = function(){
    $http.get("json/subject.json").then(function(response) {
      $scope.subjects = response.data.Subjects;
    });
  }
}]);