'use strict';

angular.module('uDoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
		  sp:{
			waitForUser: true
		  }
      });
  });