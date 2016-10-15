var app = angular.module('fruteriaSantaMariaApp', [
	'routerModule'
]);

app.run(function ($rootScope)
{
	$rootScope._ = window._;
});