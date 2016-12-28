var advantagesDirective = angular.module('advantagesDirective', [
    'appConfig'
])
.directive('myAdvantages', function(config) {
    return {
        restrict:                       'E',
        scope: {
            advantages:                 '='
        },
        templateUrl:                    config.etcPath + 'directives/advantages/advantages.directive.html',
        controller:                     function($scope, config) {
            
        }
    };
});