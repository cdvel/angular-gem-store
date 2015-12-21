'use strict';

// Declare app level module which depends on views, and components
angular
	.module('myApp', [
  		'ngRoute', 'ngMaterial',
  		'myApp.catalogue',
		'myApp.view1',
  		'myApp.view2',
  		'myApp.version'])
	.config(function($routeProvider, $mdThemingProvider) {
  			$routeProvider.otherwise({redirectTo: '/view1'});
  			 $mdThemingProvider.theme('default')
              .primaryPalette('cyan')
              .accentPalette('red')
              .backgroundPalette('grey');
		});


