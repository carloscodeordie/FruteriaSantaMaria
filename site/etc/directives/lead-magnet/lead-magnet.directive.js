var leadMagnetDirective = angular.module('leadMagnetDirective', [
    'appConfig'
])
.directive('myLeadMagnet', function(config) {
    return {
        restrict:                       'E',
        scope: {
            
        },
        templateUrl:                    config.etcPath + 'directives/lead-magnet/lead-magnet.directive.html',
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