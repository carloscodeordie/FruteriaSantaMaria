var contactModule = angular.module('contactModule', [
    'directivesModule',
    'servicesModule'
]);
contactModule.controller('contactController', ['$scope', function($scope) {
    // Sends an email with contact information
    var makeContact = function(event, contact) {
        emailjs.send("gmail", "contact", 
            {
                contactName:            contact.name, 
                contactEmail:           contact.email,
                contactComments:        contact.comments
            })
            .then(function(response) {
                
            },
            function(error) {
                
            }
        );
    };
    // Initialization of channels
    var initChannels = function() {
        // listen for the event when a contact is maked
        $scope.$on('makeContactEmit', makeContact);
    };
    // Initialization of data
    var init = function() {
        // Initialization of channels
        initChannels();
    };
    // Run the init function when the controller loads
    init();
}]);