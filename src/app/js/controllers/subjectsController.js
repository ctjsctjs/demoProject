(function () {
  var subjectsController = function ($scope){

    $scope.message = 'Subject page';
    $scope.subjects = [];
    $scope.fetchSubjects = function(){
      $scope.subjects = [
        { ID: 1, SubjectName: "English", Category: "Education" },
        { ID: 2, SubjectName: "Maths", Category: "Education" },
        { ID: 3, SubjectName: "Physics", Category: "Education" },
        { ID: 4, SubjectName: "Chemistry", Category: "Education" },
        { ID: 5, SubjectName: "Biology", Category: "Education" },
        { ID: 6, SubjectName: "Illustration", Category: "Design" }, 
        { ID: 7, SubjectName: "Photoshop", Category: "Design" } 
      ];
    }  
  }
  myModule.controller('subjectsController', subjectsController);
}());

