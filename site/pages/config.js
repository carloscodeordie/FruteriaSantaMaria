var appConfig = angular.module('appConfig', [])
.provider('config', function() {
	
	var config = this;
	
	config.dist = '/dist';
	config.resourcesPath = config.dist + '/resources/';
	config.pagesPath = config.dist + '/pages/';
	config.api = config.dist + '/api/';
	config.geonames = 'http://api.geonames.org/';
	config.home = '/home';
	
	this.$get = function() {
		return config;
	};
});