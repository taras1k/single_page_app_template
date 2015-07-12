angular.module('app').
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('main', {
    'url': '/',
    'views': {
      'main': {
        'templateUrl': 'templates/main.html',
        'controller': 'MainController'
      },
      'header': {
        'templateUrl': 'templates/header.html',
        'controller': 'HeaderController'
      }
    }
  })
  .state('login', {
    'url': '/login',
    'views': {
      'main': {
        'templateUrl': 'templates/login.html',
        'controller': 'LoginController'
      },
      'header': {
        'templateUrl': 'templates/anonymous_header.html',
        'controller': 'HeaderController'
      }
    }
  })
  ;
}]);
