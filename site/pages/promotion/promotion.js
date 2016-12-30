var promotionModule = angular.module('promotionModule', [
    'directivesModule',
    'servicesModule'
]);
promotionModule.controller('promotionController', ['$scope', function($scope) {
    // Send recipes to user
    var sendRecipes = function(event, customer) {
        emailjs.send("gmail", "magnet", 
            {
                customerName:           customer.name, 
                customerEmail:          customer.email
            })
            .then(function(response) {
                $("#successModal").modal('show');
            },
            function(error) {
                $("#errorModal").modal('show');
            }
        );
    };
    // Initialization of channels
    var initChannels = function() {
        // listen for the event when the user request the recipes
        $scope.$on('sendRecipesEmit', sendRecipes);
    };
    // Initialization of data
    var init = function() {
        // Initialization of channels
        initChannels();
    };
    // Run the init function when the controller loads
    init();
}]);