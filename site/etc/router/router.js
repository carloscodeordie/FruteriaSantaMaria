var routerModule = angular.module('routerModule', [
	'appConfig',
	'ngRoute',
    'homeModule',
	'productsModule',
	'recipesModule'
]);

routerModule.config(['configProvider', '$routeProvider', '$locationProvider', 
	function(configProvider, $routeProvider, $locationProvider) {
		$routeProvider
            .when(configProvider.home, {
				templateUrl:    configProvider.pagesPath + '/home/home.html',
                controller:     'homeController'
			})
			.when(configProvider.products, {
				templateUrl:    configProvider.pagesPath + '/products/products.html',
                controller:     'productsController'
			})
			.when(configProvider.recipes, {
				templateUrl:    configProvider.pagesPath + '/recipes/recipes.html',
                controller:     'recipesController'
			})
            .otherwise({
				redirectTo: configProvider.home
			});
            
        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
	}
]);