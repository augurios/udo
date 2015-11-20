'use strict';

angular.module('uDoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('forgot', {
        url: '/forgot',
        templateUrl: 'app/forgot/forgot.html',
        controller: 'ForgotCtrl'
      });
  });