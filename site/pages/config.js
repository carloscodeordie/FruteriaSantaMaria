var appConfig = angular.module('appConfig', [])
.provider('config', function() {
	
	var config = this;
	
	config.resourcesPath = '/resources/';
	config.pagesPath = '/pages/';
	config.api = '/api/';
	config.geonames = 'http://api.geonames.org/';
	config.home = '/home';
	
	this.$get = function() {
		return config;
	};
});