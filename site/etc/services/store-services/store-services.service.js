var storeServicesService = angular.module('storeServicesService', [
    'appConfig'
]);
storeServicesService.factory('storeServicesFactory', function(config) {
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
                    url:            config.context + '#productos'
                }
            },
            {
                name:               'Recetas',
                description:        '',
                image: {
                    url:            config.resourcesPath + 'images/store-services/recetas.jpg'
                },
                path: {
                    url:            config.context + '#recetas'
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