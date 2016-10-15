var totalPriceFilter = angular.module('totalPriceFilter', []);
totalPriceFilter.filter('totalPrice', function() {
    
    return function(object, price, quantity) {
        return price * quantity;
    };

});