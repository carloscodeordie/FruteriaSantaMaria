var navbarDirective = angular.module('navbarDirective', [
    'appConfig'
])
.directive('myNavbar', function(config) {
    return {
        restrict:                       'E',
        scope: {
            
        },
        templateUrl:                    config.etcPath + 'directives/navbar/navbar.directive.html',
        controller:                     function($scope, config) {
            // Initialization of links
            var initLinks = function() {
                $scope.phone = 524499736705;
                $scope.email = 'pedidos@fruteriasantamaria.com';
                $scope.facebook = {
                    url:        'https://www.facebook.com/FruteriaSantaMariaAlcazar/',
                    image:      'resources/images/social/facebook.png'
                };
                $scope.youtube = {
                    url:        'https://www.facebook.com/FruteriaSantaMariaAlcazar/',
                    image:      'resources/images/social/youtube.png'
                };
            };
            
            // Initialization of data
            var init = function() {
                // Initialization of links
                initLinks();
            };
            // Run the init function when the controller loads
            init();
        }
    };
});