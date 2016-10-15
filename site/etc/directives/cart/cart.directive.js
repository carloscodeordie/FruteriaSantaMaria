var cartDirective = angular.module('cartDirective', [
    'appConfig',
    'filtersModule'
])
.directive('myCart', function(config) {
    return {
        restrict:                       'E',
        scope: {
            cart:                       '='
        },
        templateUrl:                    config.etcPath + 'directives/cart/cart.directive.html',
        controller:                     function($scope, config) {
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