var totalCartFilter = angular.module('totalCartFilter', []);
totalCartFilter.filter('totalCart', function() {
    
    return function(array) {
        var total = 0;
        
        for(i = 0; i < array.length; i++) {
            var product = array[i];
            var totalProduct = product.price * product.quantity;
            total = total + totalProduct;
        }

        return total;
    };

});