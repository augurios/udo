'use strict';

angular.module('uDoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('verify', {
        url: '/verify?sptoken',
        templateUrl: 'app/verify/verify.html',
        controller: 'VerifyCtrl'
      });
  });