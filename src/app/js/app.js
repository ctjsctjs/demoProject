var app = angular.module('demoApp', [
  /*Include*/
  'ngRoute'
])
/*Routing*/
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider.
  when('/',{
    templateUrl:'views/main.html',
    controller:'mainController',
  }).
  when('/login',{
    templateUrl:'views/login.html',
    controller:'loginController',
  }).
  when('/table',{
    templateUrl:'views/table.html',
    controller:'tableController',
  }).otherwise({
    redirectTo:'/'
  });

  /*remove # and ! from URL*/
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $locationProvider.hashPrefix('');
}]);



