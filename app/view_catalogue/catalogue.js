'use strict';

(function(){

	var gem = {name: 'Azurite', price: 2.95};
	var app = angular.module('myApp.catalogue', ['ngRoute'])

	app.controller('StoreController', function(){
		this.product = gem;
	})

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/catalogue', {
    		templateUrl: 'view_catalogue/catalogue.html',
    		controller: 'StoreController'
	  	});	
	}])

})();