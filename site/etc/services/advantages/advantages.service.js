var advantagesService = angular.module('advantagesService', [
    'appConfig'
]);
advantagesService.factory('advantagesFactory', function(config) {
    var factory = {};
    factory.getAdvantages = function() {
        return [
            {
                title:                  'Entrega a domicilio',
                description:            'Te entregamos tu pedido a domicilio sin ningun costo extra y de manera rapida',
                image: {
                    url:                config.resourcesPath + 'images/advantages/delivery.png'
                }
            },
            {
                title:                  'Precios bajos',
                description:            'Tenemos los mejores precios para ti de toda la colonia',
                image: {
                    url:                config.resourcesPath + 'images/advantages/price.png'
                }
            },
            {
                title:                  'Recetas gratis',
                description:            'Unete a nuestra comunidad donde podras compartir y aprender deliciosas y recetas para ti y tu familia',
                image: {
                    url:                config.resourcesPath + 'images/advantages/recipes.png'
                }
            }
        ]
    };
    return factory;
});
advantagesService.service('advantagesService', function(advantagesFactory){
    // Obtains all the advantages of the business
    this.all = function() {
        return advantagesFactory.getAdvantages();
    };
});