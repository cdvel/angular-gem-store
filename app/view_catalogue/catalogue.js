'use strict';

(function(){

	var gems = [{	name: 'Azurite',
			   		price: 2.95,
			   		canPurchase: false,
			   		soldOut: false,
			   		description: 'Some gems have hidden qualities...',
			  },
			  {		name: 'Ruby',
			   		price: 12.95,
			   		canPurchase: true,
			   		soldOut: false,
			   		description: 'Some gems have hidden qualities...',
			  }];

	var app = angular.module('myApp.catalogue', ['ngRoute'])

	app.controller('StoreController', function(){
		this.products = gems;
	})

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/catalogue', {
    		templateUrl: 'view_catalogue/catalogue.html',
    		controller: 'StoreController'
	  	});	
	}])

})();