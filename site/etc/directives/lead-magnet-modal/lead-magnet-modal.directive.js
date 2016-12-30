var leadMagnetModalDirective = angular.module('leadMagnetModalDirective', [
    'ngMessages',
    'appConfig'
])
.directive('myLeadMagnetModal', function(config) {
    return {
        restrict:                       'E',
        scope: {
            idModal:                    '@',
            title:                      '@'
        },
        templateUrl:                    config.etcPath + 'directives/lead-magnet-modal/lead-magnet-modal.directive.html',
        controller:                     function($scope, config) {
            // Methods that executes when user request the recipes
            $scope.obtainRecipes = function() {
                if(!$scope.submitted) {
			        $scope.submitted = true;
		        }
                if($scope.customerForm.$valid) {
                    $scope.$emit('sendRecipesEmit', $scope.customer);
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