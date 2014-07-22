'use strict';

/**
 * @ngdoc function
 * @name bivitfrontSampleApp.controller:UsersUseridCtrl
 * @description
 * # UsersUseridCtrl
 * Controller of the bivitfrontSampleApp
 */
angular.module('bivitfrontSampleApp')
  .controller('UsersUseridCtrl', function ($scope, $http, $route, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var url = 'http://localhost:8080/api/users/' + $routeParams.userId;

    $http.get(url)
    	.success( function (data) {
    		$scope.user = data;
    		console.log(data);
    	})
  });
