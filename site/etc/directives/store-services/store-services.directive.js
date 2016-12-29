var storeServicesDirective = angular.module('storeServicesDirective', [
    'appConfig'
])
.directive('myStoreServices', function(config) {
    return {
        restrict:                       'E',
        scope: {
            services:                   '='
        },
        templateUrl:                    config.etcPath + 'directives/store-services/store-services.directive.html',
        controller:                     function($scope, config) {
            
        }
    };
});