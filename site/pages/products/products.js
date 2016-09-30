var productsModule = angular.module('productsModule', [
    'directivesModule',
    'servicesModule'
]);
productsModule.controller('productsController', ['$scope', 'productsService', function($scope, productsService) {
    
    // Initialization of products
    var initProducts = function() {
        $scope.categories = productsService.getProductsByCategory();
    };

    // Initialization of data
    var init = function() {
        // Initialization of products
        initProducts();
    };
    
    // Run the init function when the controller loads
    init();
    
}]);