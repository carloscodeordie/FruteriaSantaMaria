var totalProductsFilter = angular.module('totalProductsFilter', []);
totalProductsFilter.filter('totalProducts', function() {
    
    return function(cart) {
        return cart.length;
    };

});