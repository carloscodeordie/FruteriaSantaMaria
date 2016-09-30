var productsService = angular.module('productsService', [
    'appConfig'
]);
productsService.factory('productsFactory', function(config) {
    var factory = {};
    factory.getProductsByCategory = function() {
        return [
            {
                name:                           'Verduras',
                products: [
                    {
                        id:                     1,
                        name:                   'Jitomate',
                        description:            'El jitomate sirve para...',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/jitomate.png'
                        }
                    },
                    {
                        id:                     2,
                        name:                   'Tomatillo',
                        description:            'El tomatillo sirve para...',
                        price:                  20,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/tomatillo.png'
                        }
                    },
                    {
                        id:                     3,
                        name:                   'Jitomate',
                        description:            'El jitomate sirve para...',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/jitomate.png'
                        }
                    },
                    {
                        id:                     4,
                        name:                   'Jitomate',
                        description:            'El jitomate sirve para...',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/jitomate.png'
                        }
                    },
                    {
                        id:                     5,
                        name:                   'Jitomate',
                        description:            'El jitomate sirve para...',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/jitomate.png'
                        }
                    },
                    {
                        id:                     6,
                        name:                   'Jitomate',
                        description:            'El jitomate sirve para...',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/jitomate.png'
                        }
                    },
                    {
                        id:                     7,
                        name:                   'Jitomate',
                        description:            'El jitomate sirve para...',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/jitomate.png'
                        }
                    }
                ]
            }
        ]
    };
    
    return factory;
});
productsService.service('productsService', function(productsFactory){
    this.getProductsByCategory = function() {
        return productsFactory.getProductsByCategory();
    };
});