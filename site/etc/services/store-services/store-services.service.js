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
                    url:            config.resourcesPath + 'images/store-services/frutas_y_verduras.jpg'
                },
                path: {
                    url:            generalService.getPaths().products
                }
            },
            {
                name:               'Recetas',
                description:        '',
                image: {
                    url:            config.resourcesPath + 'images/store-services/recetas.jpg'
                },
                path: {
                    url:            generalService.getPaths().recipes
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