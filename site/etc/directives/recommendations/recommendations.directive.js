var recommendationsDirective = angular.module('recommendationsDirective', [
    'appConfig'
])
.directive('myRecommendations', function(config) {
    return {
        restrict:                       'E',
        scope: {
            title:                      '@',
            recommenders:               '='
        },
        templateUrl:                    config.etcPath + 'directives/recommendations/recommendations.directive.html',
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