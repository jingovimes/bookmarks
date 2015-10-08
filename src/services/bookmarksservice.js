(function() {
'use strict';

	angular
		.module('bookmarks')
		.service('bookmarksservice', BookmarksService);
	
	function BookmarksService() {
		this.getBookmarks = getBookmarks;
		
		////////////////
		function getBookmarks() { 
		
		}
	}
})();