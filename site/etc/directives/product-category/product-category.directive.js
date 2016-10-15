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
            
            // Method to create an empty cart if it was not created
            var initCart = function(product) {
                product.cart = {};
            };

            // Method to calculate the quantity to add
            var calculateAddedQuantity = function(isAdded, unity) {
                var quantity;

                // if product was added to cart, then add 1 if unity is for piece or add 0.25 if unity is Kg.
                if(isAdded) {
                    if(_.isEqual(unity, 'Kg')) {
                        quantity = 0.25;
                    } else {
                        quantity = 1;
                    }
                } else {
                    // the quantity is 1 (Kg or piece) if product was not added previously to cart 
                    quantity = 1;
                }

                // Return quantity to be added
                return quantity;
            };

            // Method to calculate the quantity to remove
            var calculateRemovedQuantity = function(unity) {
                var quantity;

                // Remove 1 if unity is for piece or remove 0.25 if unity is Kg.
                if(_.isEqual(unity, 'Kg')) {
                    quantity = 0.25;
                } else {
                    quantity = 1;
                }

                // Return quantity to be added
                return quantity;
            };
            
            // Add a product into cart
            $scope.addProduct = function(product) {
                
                // Initialize product cart
                initCart(product);
                
                // Calculate quantity to add
                var quantityToAdd = calculateAddedQuantity(product.cart.isAdded, product.unity);
                
                // Tell parent controller that a product was added into cart
                $scope.$emit('addProductEmit', product, quantityToAdd);

                // Change status of that product to indicate it was added to the cart
                product.cart.isAdded = true;
            };

            // Remove product from cart
            $scope.removeProduct = function(product) {
                
                // Calculate quantity to remove
                var quantityToRemove = calculateRemovedQuantity(product.unity);
                
                // Tell parent controller that a product was added into cart
                $scope.$emit('removeProductEmit', product, quantityToRemove);
            };

            // Determines if the index is the first element in the carrousel
            $scope.isFirstElement = function(index) {
                var flag = false;
                if(index === 0) {
                    flag = true;
                }
                return flag;
            };

            // Sort the products to show them in carrousel
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

            // Restore the product status when it is removed from cart
            var restoreProductStatus = function(event, productRemoved) {
                _.each($scope.category.products, function(product) {
                    if(product.id === productRemoved.id) {
                        initCart(product);
                    }
                });
            };

            // Initialization of channels
            var initChannels = function() {
                $scope.$on('restoreProduct', restoreProductStatus);
            };

            // Sort the products 
            var initSorting = function() {
                // Sort the products to show them in carrousel
                $scope.sortedProducts = sortProducts($scope.category.products, config.sortProducts);
            };

            // Initialization of data
            var init = function() {
                // Initialization of channels
                initChannels();
                // Sort the products to show them in carrousel
                initSorting();
            };

            // Run the init function when the controller loads
            init();
        }
    };
});