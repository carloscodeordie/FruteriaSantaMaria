var productsDirective = angular.module('productsDirective', [
    'ngStorage',
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
            
        }
    };
});