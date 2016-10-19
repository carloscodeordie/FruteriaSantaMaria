var successModalDirective = angular.module('successModalDirective', [
    'appConfig'
])
.directive('mySuccessModal', function(config) {
    return {
        restrict:                       'E',
        scope: {
            idModal:                    '@',
            path:                       '@',
            title:                      '@',
            content:                    '@'
        },
        templateUrl:                    config.etcPath + 'directives/success-modal/success-modal.directive.html',
        controller:                     function($scope, $location, config) {
            // Hides the modal after user clicks on close button
            var hideModal = function() {
                var modalId = '#' + $scope.idModal;
                $(modalId).on('hidden.bs.modal', function (event) {
                    // Go the path after the modal is closed
                    $location.path($scope.path);
                });
                $(modalId).modal('hide');
            };

            // Method that redirects to page indicated in path scope variable
            $scope.goPath = function () {
                hideModal();
            };
        }
    };
});