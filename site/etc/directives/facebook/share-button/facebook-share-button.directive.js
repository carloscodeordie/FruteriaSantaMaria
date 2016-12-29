var facebookShareButtonDirective = angular.module('facebookShareButtonDirective', [
    'appConfig'
])
.directive('myFacebookShareButton', function(config) {
    return {
        restrict:                       'E',
        scope: {
            rightPosition:              '='
        },
        templateUrl:                    config.etcPath + 'directives/facebook/share-button/facebook-share-button.directive.html',
        controller:                     function($scope, config) {
            
        }
    };
});