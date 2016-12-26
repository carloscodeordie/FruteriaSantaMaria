var navbarDirective = angular.module('navbarDirective', [
    'appConfig',
    'facebookShareButtonDirective',
    'generalService'
])
.directive('myNavbar', function(config) {
    return {
        restrict:                       'E',
        scope: {
            
        },
        templateUrl:                    config.etcPath + 'directives/navbar/navbar.directive.html',
        controller:                     function($scope, config, generalService) {
            // Initialization of general data
            var initData = function() {
                $scope.store = generalService.getStore();
                $scope.social = generalService.getSocial();
            };
            
            // Initialization of data
            var init = function() {
                // Initialization of general data
                initData();
            };
            // Run the init function when the controller loads
            init();
        }
    };
});