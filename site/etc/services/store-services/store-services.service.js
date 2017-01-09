var storeServicesService = angular.module('storeServicesService', [
    'appConfig',
    'generalService'
]);
storeServicesService.factory('storeServicesFactory', function(config, generalService) {
    var factory = {};
    factory.getStoreServices = function() {
        return [
            {
                name:               'Frutas y verduras',
                description:        '',
                image: {
                    url:            config.resourcesPath + 'images/store-services/fruits.jpg'
                },
                path: {
                    url:            generalService.getPaths().products
                }
            },
            {
                name:               'Recetas',
                description:        '',
                image: {
                    url:            config.resourcesPath + 'images/store-services/recipes.jpg'
                },
                path: {
                    url:            generalService.getPaths().promotion
                }
            }
        ]
    };
    return factory;
});
storeServicesService.service('storeService', function(storeServicesFactory){
    // Obtains all the store services for the business
    this.all = function() {
        return storeServicesFactory.getStoreServices();
    }
});