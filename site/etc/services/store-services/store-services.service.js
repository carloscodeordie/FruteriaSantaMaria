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
                    url:            generalService.getPaths().productos
                }
            },
            {
                name:               'Recetas',
                description:        '',
                image: {
                    url:            config.resourcesPath + 'images/store-services/recetas.jpg'
                },
                path: {
                    url:            generalService.getPaths().recetas
                }
            }
        ]
    };
    
    return factory;
});
storeServicesService.service('storeService', function(storeServicesFactory){
    this.all = function() {
        return storeServicesFactory.getStoreServices();
    }
});