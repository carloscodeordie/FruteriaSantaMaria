var routerModule = angular.module('routerModule', [
	'appConfig',
	'ngRoute',
    'homeModule',
	'productosModule',
	'recetasModule'
]);

routerModule.config(['configProvider', '$routeProvider', '$locationProvider', 
	function(configProvider, $routeProvider, $locationProvider) {
		$routeProvider
            .when(configProvider.home, {
				templateUrl:    configProvider.pagesPath + '/home/home.html',
                controller:     'homeController'
			})
			.when(configProvider.productos, {
				templateUrl:    configProvider.pagesPath + '/productos/productos.html',
                controller:     'productosController'
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