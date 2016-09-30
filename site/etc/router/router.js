var routerModule = angular.module('routerModule', [
	'appConfig',
	'ngRoute',
    'homeModule',
	'productsModule',
	'recetasModule'
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
			.when(configProvider.recetas, {
				templateUrl:    configProvider.pagesPath + '/recetas/recetas.html',
                controller:     'recetasController'
			})
            .otherwise({
				redirectTo: configProvider.home
			});
            
        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
	}
]);