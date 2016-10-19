var productsModule = angular.module('productsModule', [
    'ngStorage',
    'directivesModule',
    'servicesModule'
]);
productsModule.controller('productsController', ['$scope', '$localStorage', '$location', 'productsService', function($scope, $localStorage, $location, productsService) {
    
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

    // Calculate the total price for all the products in the cart
    var calculateTotal = function(cart) {
        var total = 0;
        for(i = 0; i < cart.length; i++) {
            var product = cart[i];
            var totalByProduct = product.price * product.quantity;
            total = total + totalByProduct;
        }
        return total;
    };

    // Convert into a string the products into the cart
    var serializeProducts = function(cart) {
        var serializeProducts = '';
        for(i = 0; i < cart.length; i++) {
            var product = cart[i];
            serializeProducts = serializeProducts + ' - ' + product.name + ': ' + product.quantity + ' ' + product.unity;
        }
        return serializeProducts;
    };

    // Method to make an order
    var makeOrder = function(event, customer) {
        
        var total = calculateTotal($scope.$storage.cart);
        var transformProducts = serializeProducts($scope.$storage.cart);

        emailjs.send("gmail", "order", 
            {
                customerName:           customer.name, 
                customerEmail:          customer.email,
                customerAddress:        customer.address,
                customerPhone:          customer.phone,
                customerProducts:       transformProducts,
                total:                  total
            })
            .then(function(response) {
                $("#successModal").modal('show');
            },
            function(error) {
                $("#errorModal").modal('show');
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