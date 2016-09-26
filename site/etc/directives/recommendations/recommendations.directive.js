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
            
        }
    };
});