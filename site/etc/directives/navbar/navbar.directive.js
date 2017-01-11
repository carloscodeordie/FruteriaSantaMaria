var navbarDirective = angular.module('navbarDirective', [
    'appConfig',
    'directivesModule',
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
                $scope.contactLink = config.contact;
            };
            // Initialization of values
            var initValues = function() {
                $scope.messages = config.messages;
            };
            // Initialization of data
            var init = function() {
                // Initialization of general data
                initData();
                // Initialization of values
                initValues();
            };
            // Run the init function when the controller loads
            init();
        }
    };
});