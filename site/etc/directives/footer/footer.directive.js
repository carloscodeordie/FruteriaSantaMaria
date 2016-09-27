var footerDirective = angular.module('footerDirective', [
    'appConfig',
    'generalService'
])
.directive('myFooter', function(config) {
    return {
        restrict:                       'E',
        scope: {
            
        },
        templateUrl:                    config.etcPath + 'directives/footer/footer.directive.html',
        controller:                     function($scope, config, generalService) {
            // Initialization of general data
            var initData = function() {
                $scope.store = generalService.getStore();
                $scope.social = generalService.getSocial();
                $scope.paths = generalService.getPaths();
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