var contactFormDirective = angular.module('contactFormDirective', [
    'ngMessages',
    'appConfig'
])
.directive('myContactForm', function(config) {
    return {
        restrict:                       'E',
        scope: {
            
        },
        templateUrl:                    config.etcPath + 'directives/contact-form/contact-form.directive.html',
        controller:                     function($scope, config) {
            // Methods that executes when user make a contact
            $scope.makeContact = function() {
                if(!$scope.submitted) {
			        $scope.submitted = true;
		        }
                if($scope.contactForm.$valid) {
                    $scope.$emit('makeContactEmit', $scope.contact);
                }
            };
            // Initialization of values
            var initValues = function() {
                $scope.messages = config.messages;
                $scope.submitted = false;
                $scope.contact = {};
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