'use strict';

/**
 * @ngdoc overview
 * @name uDoApp
 * @description
 * # uDoApp
 *
 * Main module of the application.
 */
angular
  .module('uDoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch', 
	'templates'
  ])
  .config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state(
      'home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
	  resolve: {
		postPromise: ['posts', function(posts){
			return posts.getAll();
			
		}]
	}
    })
    .state(
      'posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl',
		  resolve: {
  post: ['$stateParams', 'posts', function($stateParams, posts) {
    return posts.get($stateParams.id);
  }]
}
    });


  $urlRouterProvider.otherwise('home');
}]);





