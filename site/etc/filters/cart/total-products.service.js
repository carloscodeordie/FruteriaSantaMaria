var totalProductsFilter = angular.module('totalProductsFilter', []);
totalProductsFilter.filter('totalProducts', function() {
    // Obtains the amount of items selected in the cart
    return function(cart) {
        return cart.length;
    };
});