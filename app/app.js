'use strict';

// Declare app level module which depends on views, and components
angular
	.module('myApp', [
  		'ngRoute', 'ngMaterial', 'angular.filter', 'ngMdIcons',
  		'myApp.catalogue',  		
  		'myApp.about',
  		'myApp.version'])
	.config(function($routeProvider, $mdThemingProvider) {
  			$routeProvider.otherwise({redirectTo: '/catalogue'});
  			 $mdThemingProvider.theme('default')
              .primaryPalette('cyan')
              .accentPalette('red')
              .backgroundPalette('grey');
		});


