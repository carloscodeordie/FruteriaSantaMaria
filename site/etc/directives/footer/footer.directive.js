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