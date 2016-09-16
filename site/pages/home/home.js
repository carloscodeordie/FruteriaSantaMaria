var homeModule = angular.module('homeModule', [
    'directivesModule',
    'servicesModule'
]);
homeModule.controller('homeController', [
    '$scope',
    function($scope) {
    
    // Initialization of data
    var init = function() {
        
    };
    
    // Run the init function when the controller loads
    init();
    
}]);