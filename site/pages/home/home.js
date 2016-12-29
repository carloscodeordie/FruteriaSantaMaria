var homeModule = angular.module('homeModule', [
    'directivesModule',
    'servicesModule'
]);
homeModule.controller('homeController', ['$scope', 'storeService', 'recommendersService', 'advantagesService', function($scope, storeService, recommendersService, advantagesService) {
    // Initialization of recommenders
    var initRecommenders = function() {
        $scope.recommenders = recommendersService.newest(3);
    };
    // Initialization of store services
    var initStoreServices = function() {
        $scope.services = storeService.all();
    };
    // Initialization of advantages
    initAdvantages = function() {
        $scope.advantages = advantagesService.all();
    };
    // Initialization of data
    var init = function() {
        // Initialization of store services
        initStoreServices();
        // Initialization of recommenders
        initRecommenders();
        // Initialization of advantages
        initAdvantages();
    };
    // Run the init function when the controller loads
    init();
}]);