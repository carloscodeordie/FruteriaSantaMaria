var recetasModule = angular.module('recetasModule', [
    'directivesModule',
    'servicesModule'
]);
recetasModule.controller('recetasController', ['$scope', function($scope) {
    
    // Initialization of data
    var init = function() {
        
    };
    
    // Run the init function when the controller loads
    init();
    
}]);