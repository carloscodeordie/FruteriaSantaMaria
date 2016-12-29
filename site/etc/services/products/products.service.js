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
                        name:                   'Acelgas',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/acelgas.png'
                        }
                    },
                    {
                        id:                     2,
                        name:                   'Alcachofa',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/alcachofa.png'
                        }
                    },
                    {
                        id:                     3,
                        name:                   'Alfalfa',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/alfalfa.png'
                        }
                    },
                    {
                        id:                     4,
                        name:                   'Apio',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/apio.png'
                        }
                    },
                    {
                        id:                     5,
                        name:                   'Berenjena',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/berenjena.png'
                        }
                    },
                    {
                        id:                     5,
                        name:                   'Berros',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/berros.png'
                        }
                    },
                    {
                        id:                     7,
                        name:                   'Brocoli',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/brocoli.png'
                        }
                    },
                    {
                        id:                     8,
                        name:                   'Calabacitas',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/calabacitas.png'
                        }
                    },
                    {
                        id:                     9,
                        name:                   'Cebolla',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/cebolla.png'
                        }
                    },
                    {
                        id:                     10,
                        name:                   'Champiñon',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/champiñon.png'
                        }
                    },
                    {
                        id:                     11,
                        name:                   'Chicharos',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/chicharos.png'
                        }
                    },
                    {
                        id:                     12,
                        name:                   'Coles de bruselas',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/coles_de_bruselas.png'
                        }
                    },
                    {
                        id:                     13,
                        name:                   'Coliflor',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/coliflor.png'
                        }
                    },
                    {
                        id:                     14,
                        name:                   'Esparragos',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/esparragos.png'
                        }
                    },
                    {
                        id:                     15,
                        name:                   'Espinacas',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/espinacas.png'
                        }
                    },
                    {
                        id:                     16,
                        name:                   'Jitomate',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/jitomate.png'
                        }
                    },
                    {
                        id:                     17,
                        name:                   'Lechuga',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/lechuga.png'
                        }
                    },
                    {
                        id:                     18,
                        name:                   'Nabo',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/nabo.png'
                        }
                    },
                    {
                        id:                     19,
                        name:                   'Pepino',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/pepino.png'
                        }
                    },
                    {
                        id:                     20,
                        name:                   'Pimiento amarillo',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/pimiento_amarillo.png'
                        }
                    },
                    {
                        id:                     21,
                        name:                   'Pimiento rojo',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/pimiento_rojo.png'
                        }
                    },
                    {
                        id:                     22,
                        name:                   'Pimiento verde',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/pimiento_verde.png'
                        }
                    },
                    {
                        id:                     23,
                        name:                   'Puerro',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/puerro.png'
                        }
                    },
                    {
                        id:                     24,
                        name:                   'Rabanos',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/rabanos.png'
                        }
                    },
                    {
                        id:                     25,
                        name:                   'Repollo',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/repollo.png'
                        }
                    },
                    {
                        id:                     26,
                        name:                   'Tomatillo',
                        price:                  20,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/tomatillo.png'
                        }
                    },
                    {
                        id:                     27,
                        name:                   'Zanahoria',
                        price:                  20,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/vegetables/zanahoria.png'
                        }
                    }
                ]
            },
            {
                name:                           'Frutas',
                products: [
                    {
                        id:                     28,
                        name:                   'Ciruela',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/ciruela.png'
                        }
                    },
                    {
                        id:                     29,
                        name:                   'Coco',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/coco.png'
                        }
                    },
                    {
                        id:                     30,
                        name:                   'Dátil',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/datil.png'
                        }
                    },
                    {
                        id:                     31,
                        name:                   'Durazno',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/durazno.png'
                        }
                    },
                    {
                        id:                     32,
                        name:                   'Frambuesa',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/frambuesa.png'
                        }
                    },
                    {
                        id:                     33,
                        name:                   'Fresa',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/fresa.png'
                        }
                    },
                    {
                        id:                     34,
                        name:                   'Granada',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/granada.png'
                        }
                    },
                    {
                        id:                     35,
                        name:                   'Guanabana',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/guanabana.png'
                        }
                    },
                    {
                        id:                     36,
                        name:                   'Higo',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/higo.png'
                        }
                    },
                    {
                        id:                     37,
                        name:                   'Kiwi',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/kiwi.png'
                        }
                    },
                    {
                        id:                     38,
                        name:                   'Lima',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/lima.png'
                        }
                    },
                    {
                        id:                     39,
                        name:                   'Limón',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/limon.png'
                        }
                    },
                    {
                        id:                     40,
                        name:                   'Mandarina',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/mandarina.png'
                        }
                    },
                    {
                        id:                     41,
                        name:                   'Mango',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/mango.png'
                        }
                    },
                    {
                        id:                     42,
                        name:                   'Manzana',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/manzana.png'
                        }
                    },
                    {
                        id:                     43,
                        name:                   'Melón',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/melon.png'
                        }
                    },
                    {
                        id:                     44,
                        name:                   'Membrillo',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/membrillo.png'
                        }
                    },
                    {
                        id:                     45,
                        name:                   'Naranja',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/naranja.png'
                        }
                    },
                    {
                        id:                     46,
                        name:                   'Papaya',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/papaya.png'
                        }
                    },
                    {
                        id:                     47,
                        name:                   'Pera',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/pera.png'
                        }
                    },
                    {
                        id:                     48,
                        name:                   'Persimmon',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/persimmon.png'
                        }
                    },
                    {
                        id:                     49,
                        name:                   'Piña',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/piña.png'
                        }
                    },
                    {
                        id:                     50,
                        name:                   'Platano',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/platano.png'
                        }
                    },
                    {
                        id:                     51,
                        name:                   'Sandia',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/sandia.png'
                        }
                    },
                    {
                        id:                     52,
                        name:                   'Toronja',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/toronja.png'
                        }
                    },
                    {
                        id:                     53,
                        name:                   'Uva',
                        price:                  10,
                        unity:                  'Kg',
                        category:               'Verduras',
                        image: {
                            url:                config.resourcesPath + 'images/products/fruits/uva.png'
                        }
                    }
                ]
            }
        ]
    };
    return factory;
});
productsService.service('productsService', function(productsFactory){
    // Obtains all the products separated by category
    this.getProductsByCategory = function() {
        return productsFactory.getProductsByCategory();
    };
});