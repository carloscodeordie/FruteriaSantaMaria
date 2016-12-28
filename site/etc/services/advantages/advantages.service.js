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
                    url:                config.resourcesPath + 'images/advantages/envio.png'
                }
            },
            {
                title:                  'Precio',
                description:            'Tenemos los mejores precios para ti de toda la colonia',
                image: {
                    url:                config.resourcesPath + 'images/advantages/precio.png'
                }
            },
            {
                title:                  'Recetas',
                description:            'Unete a nuestra comunidad donde podras compartir y aprender deliciosas y recetas para ti y tu familia',
                image: {
                    url:                config.resourcesPath + 'images/advantages/recetas.png'
                }
            }
        ]
    };
    
    return factory;
});
advantagesService.service('advantagesService', function(advantagesFactory){
    this.all = function() {
        return advantagesFactory.getAdvantages();
    };
});