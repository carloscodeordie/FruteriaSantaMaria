var navbarDirective = angular.module('presentationDirective', [
    'appConfig'
])
.directive('myPresentation', function(config) {
    return {
        restrict:                       'E',
        scope: {
            
        },
        templateUrl:                    config.etcPath + 'directives/presentation/presentation.directive.html',
        controller:                     function($scope, config) {
            // Initialization of data
            var init = function() {
                
            };
            // Run the init function when the controller loads
            init();
        }
    };
});