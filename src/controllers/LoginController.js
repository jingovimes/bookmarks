(function(){
	'use strict';
	
	angular
		.module('bookmarks')
		.controller('LoginController', LoginController);
		
	function LoginController(){
		var vm = this;
		vm.test = 'Hello today you';
	}
})();