(function() {
	'use strict';

	angular
		.module('bookmarks')
		.directive('dafTest', Test);


	function Test() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			restrict: 'AE',
			template: '<h3>Hello handsome</h3>'
		};
		return directive;
	}
})();