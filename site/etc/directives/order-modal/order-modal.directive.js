var orderModalDirective = angular.module('orderModalDirective', [
    'ngMessages',
    'appConfig'
])
.directive('myOrderModal', function(config, productsService) {
    return {
        restrict:                       'E',
        scope: {
            idModal:                    '@',
            title:                      '@'
        },
        templateUrl:                    config.etcPath + 'directives/order-modal/order-modal.directive.html',
        controller:                     function($scope, config) {
            // Methods that executes when user make an order
            $scope.makeOrder = function() {
                if(!$scope.submitted) {
			        $scope.submitted = true;
		        }
                if($scope.customerForm.$valid) {
                    $scope.$emit('makeOrderEmit', $scope.customer);
                    hideModal();
                }
            };
            // Hides the modal after user makes an order
            var hideModal = function() {
                var modalId = '#' + $scope.idModal;
                $(modalId).modal('hide');
            };
            // Initialization of values
            var initValues = function() {
                $scope.submitted = false;
                $scope.customer = {};
                $scope.messages = config.messages;
            };
            // Initialization of data
            var init = function() {
                // Initialization of values
                initValues();
            };
            // Run the init function when the controller loads
            init();
        }
    };
});