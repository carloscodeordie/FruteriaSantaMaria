var productCategoryDirective = angular.module('productCategoryDirective', [
    'appConfig'
])
.directive('myProductCategory', function(config) {
    return {
        restrict:                       'E',
        scope: {
            category:                   '='
        },
        templateUrl:                    config.etcPath + 'directives/product-category/product-category.directive.html',
        controller:                     function($scope, config) {
            $scope.isFirstElement = function(index) {
                var flag = false;
                if(index === 0) {
                    flag = true;
                }
                return flag;
            };
            var sortProducts = function(products, sort) {
                var sortedProducts = [];

                var counter = 0;
                var innerArray = [];

                for(i = 0; i < products.length; i++) {
                    var product = products[i];
                    if(counter < sort) {
                        innerArray.push(product);
                        counter = counter + 1;
                    } else {
                        sortedProducts.push(innerArray);
                        innerArray = [];
                        counter = 0;
                        innerArray.push(product);
                    }
                }
                sortedProducts.push(innerArray);

                return sortedProducts;
            };
            // Initialization of data
            var init = function() {
                // Sort the products to show them in carrousel
                $scope.sortedProducts = sortProducts($scope.category.products, config.sortProducts);
                console.log($scope.sortedProducts);
            };
            // Run the init function when the controller loads
            init();
        }
    };
});