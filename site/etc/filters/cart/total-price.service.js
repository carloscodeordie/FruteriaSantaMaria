var totalPriceFilter = angular.module('totalPriceFilter', []);
totalPriceFilter.filter('totalPrice', function() {
    // Calculate the price for product depending of quantity
    return function(object, price, quantity) {
        return price * quantity;
    };
});