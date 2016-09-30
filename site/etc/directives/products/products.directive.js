var productsDirective = angular.module('productsDirective', [
    'appConfig',
    'productsService'
])
.directive('myProducts', function(config, productsService) {
    return {
        restrict:                       'E',
        scope: {
            categories:                 '='
        },
        templateUrl:                    config.etcPath + 'directives/products/products.directive.html',
        controller:                     function($scope, config) {
            // Initialization of data
            var init = function() {
                
            };
            // Run the init function when the controller loads
            init();
        }
    };
});