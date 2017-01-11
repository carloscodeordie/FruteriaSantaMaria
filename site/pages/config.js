var appConfig = angular.module('appConfig', [])
.provider('config', function() {
	var config = this;
	// Paths
	config.context = '/' + window.location.pathname.split('/')[1];
	config.resourcesPath = '/resources/';
	config.pagesPath = '/pages/';
	config.etcPath = '/etc/';
	config.templatesPath = '/template/';
	config.api = '/api/';
	config.geonames = 'http://api.geonames.org/';
	config.sortProducts = 4;
	// Router
	config.home = '/home';
	config.products = '/productos';
	config.recipes = '/recetas';
	config.promotion = '/promocion';
	// Messages
	config.messages = {
		add:						'Agregar',
		address:					'Dirección:',
		apologies:					'Lo sentimos!',
		checkoutButton:				'Realizar pedido',
		close:						'Cerrar',
		company:					'Frutería Santa María',
		contact:					'Contacto',
		contactUs:					'Contactanos:',
		createdBy:					'Developed by @CodeOrDie',
		delivery:					'Tu envio es gratis!',
		email:						'Correo electronico:',
		emailInvalid:				'Ingrese un correo valido.',
		followMe:					'Sigueme',
		followUs:					'Siguenos en:',
		inputRequired:				'Ingrese este dato por favor.',
		leadMagnet: {
			title:					'Postres de Chef gratis',
			subtitle:				'Como preparar postres estilo chef para tus hijos de manera sencilla',
			confidential:			'Su información es 100% segura con nosotros',
			buttonLabel:			'Si, envieme las recetas ahora',
			benefits: [
				{
					description:	'Aprender como preparar nieve artesanal en casa'
				},
				{
					description:	'Como sorprender a tus hijos con una tarta calientita'
				},
				{
					description:	'Como consertirlos con unas crepas deliciosas'
				}
			],
			button:					'Obtener las recetas ahora'
		},
		menu:						'Menu de navegación',
		moreLinks:					'Más links:',
		name:						'Nombre:',
		next:						'Siguiente',
		order:						'Ordenar el pedido a tu casa',
		phone:						'Telefono:',
		previous:					'Anterior',
		products:					'Productos',
		recipes:					'Recetas',
		slogan:						'Tu mandado a domicilio!',
		sloganDescription:			'Ordena tu mandado desde el celular y te llegara a la hora que lo pidas'
	};
	this.$get = function() {
		return config;
	};
});