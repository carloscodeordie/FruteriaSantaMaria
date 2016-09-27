var productosModule = angular.module('productosModule', [
    'directivesModule',
    'servicesModule'
]);
productosModule.controller('productosController', ['$scope', function($scope) {
    
    // Initialization of data
    var init = function() {
        
    };
    
    // Run the init function when the controller loads
    init();
    
}]);