var homeModule = angular.module('homeModule', [
    'directivesModule',
    'servicesModule'
]);
homeModule.controller('homeController', ['$scope', 'storeServices', function($scope, storeServices) {
    
    // Initialization of store services
    var initStoreServices = function() {
        $scope.services = storeServices.all();
    };

    // Initialization of data
    var init = function() {
        // Initialization of store services
        initStoreServices();
    };
    
    // Run the init function when the controller loads
    init();
    
}]);