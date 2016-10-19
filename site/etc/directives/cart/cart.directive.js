var cartDirective = angular.module('cartDirective', [
    'appConfig',
    'filtersModule'
])
.directive('myCart', function(config) {
    return {
        restrict:                       'E',
        scope: {
            cart:                       '=',
            idModal:                    '@',
            orderTime:                  '='
        },
        templateUrl:                    config.etcPath + 'directives/cart/cart.directive.html',
        controller:                     function($scope, config) {
            // Enables or disable the checkout button
            $scope.validateProducts = function() {
                var flag = true;
                if($scope.cart.length > 0) {
                    flag = false;
                }
                return flag;
            };
            // Shows or hide the cart
            $scope.toggleCart = function() {
                $scope.isCartShowed = !$scope.isCartShowed;
            };
            // Update cart from parent controller
            var updateCart = function(event, cart) {
                $scope.cart = cart;
            };
            // initialization of channels
            var initChannels = function() {
                $scope.$on('broadcastCart', updateCart);
            };
            // Initialization of default data
            var initValues = function() {
                $scope.isCartShowed = false;
            };
            // Initialization of data
            var init = function() {
                // initialization of channels
                initChannels();
                // Hide the cart when directive is loaded
                initValues();
            };
            // Run the init function when the controller loads
            init();
        }
    };
});