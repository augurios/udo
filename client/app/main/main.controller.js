'use strict';

angular.module('uDoApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
	$scope.customData = [];

    $http.get('/me').success(function(profileInfo) {
		
		$scope.customData = profileInfo.customData;
		
		var todosInStore = profileInfo.customData.todos
		
		$scope.todos = todosInStore || [];
		
		//$scope.$watch('todos', function () {
		  //todosInStore.set('todos', $scope.todos);
//}, true);
		
		$scope.addTodo = function () {
		  $scope.todos.push($scope.todo);
		  $scope.todo = '';
		};

		 $scope.removeTodo = function (index) {
			  $scope.todos.splice(index, 1);
		  };
		
    });
	
	
	
	
	
	
	
	$http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
		
		
    });

  });
