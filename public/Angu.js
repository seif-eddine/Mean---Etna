'use strict'
const app = angular.module('todoCtrl', []);

app.controller('toCtrl', function($scope, $http){
	$http.get("http://localhost:3000/home/:tab").then(function (response) {
		console.log('get', response);
		$scope.names = response.data;
	});
})