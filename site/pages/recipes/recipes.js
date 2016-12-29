var recipesModule = angular.module('recipesModule', [
    'directivesModule',
    'servicesModule'
]);
recipesModule.controller('recipesController', ['$scope', function($scope) {
    
    // Initialization of data
    var init = function() {
        
    };
    
    // Run the init function when the controller loads
    init();
    
}]);