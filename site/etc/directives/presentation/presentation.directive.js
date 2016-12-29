var presentationDirective = angular.module('presentationDirective', [
    'appConfig'
])
.directive('myPresentation', function(config) {
    return {
        restrict:                       'E',
        scope: {
            
        },
        templateUrl:                    config.etcPath + 'directives/presentation/presentation.directive.html',
        controller:                     function($scope, config) {
            // Initialization of values
            var initValues = function() {
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