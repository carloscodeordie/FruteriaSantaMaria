var recommendersService = angular.module('recommendersService', [
    'appConfig'
]);
recommendersService.factory('recommendersFactory', function(config) {
    var factory = {};
    factory.getRecommenders = function() {
        return [
            {
                name:               'Adriana Santoyo',
                position:           'Ama de casa',
                company:            '',
                reviewTitle:        'Excelente servicio!',
                reviewDescription:  'Pedi mis cosas a domicilio y en un par de minutos tenia en mi casa las frutas que encarge.',
                image: {
                    url:            config.resourcesPath + 'images/recommenders/adriana.png'
                },
                frame: {
                    url:            config.resourcesPath + 'images/recommenders/frame.png'
                },
                site: {
                    url:            'http://facebook.com'
                }
            },
            {
                name:               'Adriana Santoyo',
                position:           'Ama de casa',
                company:            '',
                reviewTitle:        'Excelente servicio!',
                reviewDescription:  'Pedi mis cosas a domicilio y en un par de minutos tenia en mi casa las frutas que encarge. Pedi mis cosas a domicilio y en un par de minutos tenia en mi casa las frutas que encarge. Pedi mis cosas a domicilio y en un par de minutos tenia en mi casa las frutas que encarge.',
                image: {
                    url:            config.resourcesPath + 'images/recommenders/adriana.png'
                },
                frame: {
                    url:            config.resourcesPath + 'images/recommenders/frame.png'
                },
                site: {
                    url:            'http://facebook.com'
                }
            },
            {
                name:               'Adriana Santoyo',
                position:           'Ama de casa',
                company:            '',
                reviewTitle:        'Excelente servicio!',
                reviewDescription:  'Pedi mis cosas a domicilio y en un par de minutos tenia en mi casa las frutas que encarge.',
                image: {
                    url:            config.resourcesPath + 'images/recommenders/adriana.png'
                },
                frame: {
                    url:            config.resourcesPath + 'images/recommenders/frame.png'
                },
                site: {
                    url:            'http://facebook.com'
                }
            }
        ]
    };
    return factory;
});
recommendersService.service('recommendersService', function(recommendersFactory){
    // Obtains all the recommenders
    this.all = function() {
        return recommendersFactory.getRecommenders();
    };
    // Obtains only the newest recommenders using the size
    this.newest = function(size) {
        var recommenders = recommendersFactory.getRecommenders();
        var newest = recommenders.splice((size * -1), size);
        return newest;
    }
});