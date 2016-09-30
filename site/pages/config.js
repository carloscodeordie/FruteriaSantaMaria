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
	config.recetas = '/recetas';
	config.sortProducts = 5;
	
	this.$get = function() {
		return config;
	};
});