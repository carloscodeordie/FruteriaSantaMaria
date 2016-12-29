var generalService = angular.module('generalService', [
    'appConfig'
]);
generalService.factory('generalFactory', function(config) {
    var factory = {};
    factory.getStoreData = function() {
        return {
            phone:                  '9736705',
            email:                  'pedidos@fruteriasantamaria.com',
            transparentLogo: {
                url:                config.resourcesPath + 'images/logo/transparent-logo.png'
            }
        };
    };
    factory.getSocialData = function() {
        return {
            facebook: {
                url:        'https://www.facebook.com/FruteriaSantaMariaAlcazar/',
                image:      config.resourcesPath + 'images/social/facebook.png'
            },
            youtube: {
                url:        'https://www.facebook.com/FruteriaSantaMariaAlcazar/',
                image:      config.resourcesPath + 'images/social/youtube.png'
            }
        };
    };
    factory.getPathsData = function() {
        return {
            home:           config.context + '#home',
            products:       config.context + '#productos',
            recipes:        config.context + '#recetas'
        };
    };
    return factory;
});
generalService.service('generalService', function(generalFactory){
    // Obtains the store information
    this.getStore = function() {
        return generalFactory.getStoreData();
    };
    // Obtains the social media information
    this.getSocial = function() {
        return generalFactory.getSocialData();
    }
    // Obtains the paths for application
    this.getPaths = function() {
        return generalFactory.getPathsData();
    }
});