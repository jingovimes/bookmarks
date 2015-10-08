(function(){
	'use strict';
	
	angular
		.module('bookmarks')
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when('/home',{
					templateUrl: 'pages/home.html',
					controller : 'HomeController',
					controllerAs : 'vm'
				})
				.when('/login',{
					templateUrl: 'pages/login.html',
					controller : 'LoginController',
					controllerAs : 'vm'
				})
				.otherwise({
					redirectTo: '/login'
				});
		}]);
})();