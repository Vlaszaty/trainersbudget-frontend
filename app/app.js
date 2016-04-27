'use strict';

// Declare app level module which depends on views, and components
angular.module('trainersBudgetApp', [
  'ngRoute',
    'ngResource',
  'ratesController',
  'ratesService'

]).constant('API','http://localhost:5000')
    .config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/rates'});
}]);
