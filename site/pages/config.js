var appConfig = angular.module('appConfig', [])
.provider('config', function() {
	
	var config = this;
	
	config.context = '/' + window.location.pathname.split('/')[1];
	config.resourcesPath = '/resources/';
	config.pagesPath = '/pages/';
	config.etcPath = '/etc/';
	config.api = '/api/';
	config.geonames = 'http://api.geonames.org/';
	config.home = '/home';
	config.products = '/productos';
	config.recipes = '/recetas';
	config.sortProducts = 4;
	config.messages = {
		company:			'Frutería Santa María',
		slogan:				'Tu mandado a domicilio!',
		sloganDescription:	'Ordena tu mandado desde el celular y te llegara a la hora que lo pidas',
		delivery:			'Tu envio es gratis!',
		checkoutButton:		'Realizar pedido',
		moreLinks:			'Más links:',
		products:			'Productos',
		recipes:			'Recetas',
		followUs:			'Siguenos en:',
		contactUs:			'Contactanos:',
		phone:				'Telefono:',
		email:				'Correo electronico:',
		createdBy:			'Developed by @CodeOrDie',
		menu:				'Menu de navegación',
		contact:			'Contacto',
		name:				'Nombre:',
		address:			'Dirección:',
		apologies:			'Lo sentimos!',
		inputRequired:		'Ingrese este dato por favor.',
		emailInvalid:		'Ingrese un correo valido.',
		close:				'Cerrar',
		order:				'Ordenar',
		add:				'Agregar',
		previous:			'Anterior',
		next:				'Siguiente',
		followMe:			'Sigueme'
	};
	
	this.$get = function() {
		return config;
	};
});