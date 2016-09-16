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
	
	this.$get = function() {
		return config;
	};
});