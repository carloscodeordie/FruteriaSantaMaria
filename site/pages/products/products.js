var productsModule = angular.module('productsModule', [
    'ngStorage',
    'directivesModule',
    'servicesModule'
]);
productsModule.controller('productsController', ['$scope', '$localStorage', 'productsService', function($scope, $localStorage, productsService) {
    
    // Method to add a product and quantity to cart
    var addProductToCart = function(event, product, quantity) {
        // Obtain product from cart
        var productCart = _.find($scope.$storage.cart, function(productCart) { 
            return productCart.id === product.id; 
        });

        // If product is already in the cart, then, modify the quantity
        if(productCart) {
            productCart.quantity = productCart.quantity + quantity;
        } else {
            // Set the initial quantity for product
            product.quantity = quantity;
            // If product is not in the cart, then, push the product into the cart
            $scope.$storage.cart.push(product)
        }
        $scope.$broadcast('broadcastCart', $scope.$storage.cart);
    };

    // Method to remove a product quantity from cart
    var removeProductToCart = function(event, product, quantity) {
        // Obtain product from cart
        var productCart = _.find($scope.$storage.cart, function(productCart) { 
            return productCart.id === product.id; 
        });

        var index;
        // Look the product from the cart
        for(i = 0; i < $scope.$storage.cart.length; i++) {
            var aux = $scope.$storage.cart[i];
            if(productCart.id === aux.id) {
                aux.quantity = aux.quantity - quantity;
                if(aux.quantity <= 0) {
                    index = i;
                } 
            }
        }
        // Remove the product it is in cart
        if(index !== undefined) {
            $scope.$broadcast('restoreProduct', productCart);
            $scope.$storage.cart.splice(index, 1);
        }
    };

    // Method to remove a complete product from cart
    var removeCompleteProductToCart = function(event, productCart) {
        // Look the product from the cart
        for(i = 0; i < $scope.$storage.cart.length; i++) {
            var aux = $scope.$storage.cart[i];
            if(productCart.id === aux.id) {
                index = i;
            }
        }
        // Remove the product it is in cart
        if(index !== undefined) {
             $scope.$broadcast('restoreProduct', productCart);
            $scope.$storage.cart.splice(index, 1);
        }
    };

    // Method to make an order
    var makeOrder = function(event, customer) {
        emailjs.send("gmail", "order", 
            {
                customerName:           customer.name, 
                customerEmail:          customer.email,
                customerAddress:        customer.address,
                customerPhone:          customer.phone,
                orderTime:              $scope.orderTime,
                customerProducts:       $scope.$storage.cart
            })
            .then(function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    };

    // Initialization of channels
    var initChannels = function() {
        // listen for the event when a product is added
        $scope.$on('addProductEmit', addProductToCart);
        // listen for the event when a product is removed
        $scope.$on('removeProductEmit', removeProductToCart);
        // listen for the event when a product is removed completely
        $scope.$on('removeCompleteProductEmit', removeCompleteProductToCart);
        // listen for the event when an order is created
        $scope.$on('makeOrderEmit', makeOrder);
    };

    // Initialization of local storage
    var initStorage = function() {
        $scope.$storage = $localStorage;
        $scope.$storage.$reset();
        $scope.$storage.cart = [];
    };

    // Initialization of products
    var initProducts = function() {
        $scope.categories = productsService.getProductsByCategory();
    };

    // Initialization of data
    var init = function() {
        // Initialization of local storage
        initStorage();
        // Initialization of channels
        initChannels();
        // Initialization of products
        initProducts();
    };
    
    // Run the init function when the controller loads
    init();
    
}]);