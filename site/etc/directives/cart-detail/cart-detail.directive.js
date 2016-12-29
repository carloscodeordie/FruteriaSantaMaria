var cartDetailDirective = angular.module('cartDetailDirective', [
    'appConfig',
    'filtersModule'
])
.directive('myCartDetail', function(config) {
    return {
        restrict:                       'E',
        scope: {
            product:                    '='
        },
        templateUrl:                    config.etcPath + 'directives/cart-detail/cart-detail.directive.html',
        controller:                     function($scope, config) {
            // Triggers when user clicks on remove button on cart detail directive
            $scope.removeProduct = function(product) {
                $scope.$emit('removeCompleteProductEmit', product);
            };
        }
    };
});